export interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  slug: string
  date: string
  modified: string
  status: string
  author: string
  featured_image: string
  permalink: string
  categories: Array<{
    id: number
    name: string
    slug: string
    description: string
  }>
  tags: Array<{
    id: number
    name: string
    slug: string
    description: string
  }>
  seo: {
    focus_keyword: string
    seo_title: string
    meta_description: string
    seo_score: number
    content_score: number
    canonical_url: string
    robots: {
      index: string
      follow: string
    }
    open_graph: {
      title: string
      description: string
      image: string
    }
    twitter: {
      title: string
      description: string
      image: string
    }
    schema: string
  }
  languages: {
    current_language: string
    available_languages: Record<
      string,
      {
        code: string
        name: string
        flag: string
        default: string
      }
    >
    translations: Record<
      string,
      {
        id: number
        title: string
        permalink: string
        slug: string
        language: string
        language_name: string
      }
    >
    language_url: string
  }
}

export interface BlogApiResponse {
  posts: BlogPost[]
  total: number
  pages: number
  current_page: number
}

const BLOG_API_BASE = "https://blog.suraherahman.com/wp-json/custom/v1"

export async function fetchBlogPosts(page = 1, limit = 9): Promise<BlogApiResponse> {
  try {
    const response = await fetch(`${BLOG_API_BASE}/posts?per_page=${limit}&page=${page}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`)
    }

    const posts = await response.json()

    // Extract pagination info from headers
    const total = Number.parseInt(response.headers.get("X-WP-Total") || "0")
    const totalPages = Number.parseInt(response.headers.get("X-WP-TotalPages") || "0")

    return {
      posts: posts.map(processPostData), // Process each post to decode HTML entities
      total,
      pages: totalPages,
      current_page: page,
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return {
      posts: [],
      total: 0,
      pages: 0,
      current_page: 1,
    }
  }
}

export async function fetchBlogPost(id: number): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${BLOG_API_BASE}/post/${id}`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`)
    }

    const data = await response.json()
    return processPostData(data) // Process the post to decode HTML entities
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchBlogPosts(1, 100)
    const post = response.posts.find((p) => p.slug === slug)
    return post ? processPostData(post) : null // Process the post to decode HTML entities
  } catch (error) {
    console.error("Error fetching blog post by slug:", error)
    return null
  }
}
/**
 * Fetches all blog posts by making multiple API calls if needed
 * This function will automatically paginate through all available posts
 * @returns Promise<BlogPost[]> - Array of all blog posts
 */
export async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const allPosts: BlogPost[] = []
    let currentPage = 1
    let hasMorePages = true
    const postsPerPage = 100 // Use maximum per page to minimize API calls

    while (hasMorePages) {
      const response = await fetchBlogPosts(currentPage, postsPerPage)
      
      if (response.posts.length === 0) {
        break
      }

      allPosts.push(...response.posts)
      
      // Check if we have more pages
      hasMorePages = currentPage < response.pages
      currentPage++
    }

    return allPosts
  } catch (error) {
    console.error("Error fetching all blog posts:", error)
    return []
  }
}

/**
 * Fetches all blog post slugs - useful for generating static routes
 * This is more efficient than fetchAllPosts when you only need slugs
 * @returns Promise<string[]> - Array of all post slugs
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    // First, try to get slugs from a dedicated endpoint if available
    // If not available, fall back to fetching all posts and extracting slugs
    try {
      const response = await fetch(`${BLOG_API_BASE}/slugs`, {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      })
      
      if (response.ok) {
        const data = await response.json()
        return Array.isArray(data) ? data : data.slugs || []
      }
    } catch (slugEndpointError) {
      // Slug endpoint doesn't exist, continue with fallback
      console.log("Slug endpoint not available, using fallback method")
    }

    // Fallback: Fetch all posts and extract slugs
    const allPosts = await fetchAllPosts()
    return allPosts.map(post => post.slug).filter(Boolean) // Filter out any empty slugs
    
  } catch (error) {
    console.error("Error fetching all post slugs:", error)
    return []
  }
}

/**
 * Alternative optimized version of getAllPostSlugs that fetches minimal data
 * This version tries to minimize the data transferred by requesting only essential fields
 * @returns Promise<string[]> - Array of all post slugs
 */
export async function getAllPostSlugsOptimized(): Promise<string[]> {
  try {
    const allSlugs: string[] = []
    let currentPage = 1
    let hasMorePages = true
    const postsPerPage = 100

    while (hasMorePages) {
      // Try to fetch with minimal fields if the API supports it
      const url = `${BLOG_API_BASE}/posts?per_page=${postsPerPage}&page=${currentPage}&fields=slug`
      
      const response = await fetch(url, {
        next: { revalidate: 300 },
      })

      if (!response.ok) {
        // If fields parameter is not supported, fall back to regular method
        if (currentPage === 1) {
          return getAllPostSlugs()
        }
        break
      }

      const posts = await response.json()
      
      if (posts.length === 0) {
        break
      }

      // Extract slugs from the response
      const slugs = posts.map((post: any) => post.slug).filter(Boolean)
      allSlugs.push(...slugs)
      
      // Check pagination headers
      const totalPages = Number.parseInt(response.headers.get("X-WP-TotalPages") || "0")
      hasMorePages = currentPage < totalPages
      currentPage++
    }

    return allSlugs
  } catch (error) {
    console.error("Error fetching optimized post slugs:", error)
    // Fall back to the regular method
    return getAllPostSlugs()
  }
}
export async function fetchAvailableLanguages(): Promise<Record<string, any>> {
  try {
    const response = await fetch(`${BLOG_API_BASE}/languages`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch languages: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching available languages:", error)
    return {}
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "")
}

export function truncateText(text: string, maxLength = 150): string {
  const stripped = stripHtmlTags(text)
  if (stripped.length <= maxLength) return stripped
  return stripped.substring(0, maxLength).trim() + "..."
}

export function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    "&#8217;": "'",
    "&#8216;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&#8211;": "–",
    "&#8212;": "—",
    "&#8230;": "…",
    "&amp;": "&",
    "&#038;": "&", // Added &#038; entity for ampersand
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#039;": "'",
    "&nbsp;": " ",
  }

  let decoded = text
  for (const [entity, replacement] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, "g"), replacement)
  }

  return decoded
}

export function processPostData(post: BlogPost): BlogPost {
  return {
    ...post,
    title: decodeHtmlEntities(post.title),
    excerpt: decodeHtmlEntities(post.excerpt),
    content: decodeHtmlEntities(post.content),
    categories: post.categories.map((cat) => ({
      ...cat,
      name: decodeHtmlEntities(cat.name),
    })),
    tags: post.tags.map((tag) => ({
      ...tag,
      name: decodeHtmlEntities(tag.name),
    })),
  }
}
