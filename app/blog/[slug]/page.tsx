import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { fetchBlogPostBySlug, formatDate, fetchBlogPosts } from "@/lib/blog-api"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ShareButtons } from "@/components/share-buttons" // Import the client component

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetchBlogPosts(1, 100) // Fetch first 100 posts for static generation
    return response.posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const keywords = [
    post.seo?.focus_keyword,
  ].filter(Boolean)

  return {
    title: post.seo?.seo_title || `${post.title}`,
    description: post.seo?.meta_description || post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160),
    keywords: [...new Set(keywords)], // Remove duplicates
    authors: [{ name: post.author }],
    category: post.categories?.[0]?.name || "Islamic Articles",
    openGraph: {
      title: post.seo?.open_graph?.title || post.title,
      description: post.seo?.open_graph?.description || post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author],
      tags: post.tags?.map((tag) => tag.name) || [],
      images: post.seo?.open_graph?.image
        ? [post.seo.open_graph.image]
        : post.featured_image
          ? [post.featured_image]
          : [],
      url: `https://suraherahman.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.twitter?.title || post.title,
      description: post.seo?.twitter?.description || post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160),
      images: post.seo?.twitter?.image ? [post.seo.twitter.image] : post.featured_image ? [post.featured_image] : [],
    },
    alternates: {
      canonical: post.seo?.canonical_url || `https://suraherahman.com/blog/${post.slug}`,
    },
    robots: {
      index: post.seo?.robots?.index !== "noindex",
      follow: post.seo?.robots?.follow !== "nofollow",
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPostsResponse = await fetchBlogPosts(1, 20)
  const allPosts = allPostsResponse.posts
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 4)
  const latestPosts = allPosts.slice(0, 5)

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160),
    image: post.featured_image ? [post.featured_image] : [],
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Surah Rahman",
      url: "https://suraherahman.com",
      logo: {
        "@type": "ImageObject",
        url: "https://suraherahman.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://suraherahman.com/blog/${post.slug}`,
    },
    keywords: [
      post.seo?.focus_keyword,
      ...(post.categories?.map((cat) => cat.name) || []),
      ...(post.tags?.map((tag) => tag.name) || []),
    ]
      .filter(Boolean)
      .join(", "),
    articleSection: post.categories?.[0]?.name || "Islamic Articles",
    wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
  }

  const currentUrl = `https://suraherahman.com/blog/${post.slug}`

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <Header />

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 pt-8 select-none">
          <ol className="flex space-x-2 rtl:space-x-reverse">
            <li className="flex items-center">
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{post.title}</span>
            </li>
          </ol>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Left Content - Blog Post */}
          <div className="lg:col-span-3">
            {/* Post Title with Sharing */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">{post.title}</h1>

              {/* Meta Information */}
              {/* <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                {post.categories && post.categories.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>{post.categories[0].name}</span>
                  </div>
                )}
              </div> */}

              {/* Share Buttons */}
              <ShareButtons 
                url={currentUrl}
                title={post.title}
                description={post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160)}
              />
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="mb-8">
                <Image
                  src={post.featured_image || "/placeholder.svg"}
                  alt={`Featured image for ${post.title}`}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            )}

            {/* Blog Post Content with Enhanced Styling */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert 
              [&_h2]:bg-cyan-100 [&_h2]:dark:bg-cyan-900/20 [&_h2]:border-l-4 [&_h2]:border-cyan-500 [&_h2]:pl-4 [&_h2]:py-3 [&_h2]:rounded-r-lg [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_h2]:my-6
              [&_h3]:border-b-2 [&_h3]:border-cyan-500 [&_h3]:pb-2 [&_h3]:font-bold [&_h3]:text-lg [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_h3]:my-4
              [&_h4]:bg-cyan-100 [&_h4]:dark:bg-cyan-900/20 [&_h4]:border-l-4 [&_h4]:border-cyan-500 [&_h4]:pl-4 [&_h4]:py-2 [&_h4]:font-semibold [&_h4]:text-base [&_h4]:text-gray-900 [&_h4]:dark:text-white [&_h4]:my-3
              [&_p]:text-gray-700 [&_p]:dark:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
              [&_a]:text-cyan-600 [&_a]:dark:text-cyan-400 [&_a]:underline [&_a]:decoration-cyan-500/30 hover:[&_a]:text-cyan-700 hover:[&_a]:dark:text-cyan-300
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2
              [&_li]:text-gray-700 [&_li]:dark:text-gray-300 [&_li]:leading-relaxed
              [&_blockquote]:border-l-4 [&_blockquote]:border-cyan-500 [&_blockquote]:bg-cyan-50 [&_blockquote]:dark:bg-cyan-900/20 [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-6 [&_blockquote]:italic
              [&_strong]:text-gray-900 [&_strong]:dark:text-white [&_strong]:font-semibold
              [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:text-cyan-600 [&_code]:dark:text-cyan-400 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm
              [&_pre]:bg-gray-100 [&_pre]:dark:bg-gray-800 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6
              [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-6
              [&_hr]:border-gray-300 [&_hr]:dark:border-gray-600 [&_hr]:my-8"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share Buttons at Bottom */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Share this article</h3>
              <ShareButtons 
                url={currentUrl}
                title={post.title}
                description={post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160)}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <footer className="pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag.id} variant="outline" className="gap-1">
                      <Tag className="h-3 w-3" />
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </footer>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Related Posts Section */}
              {relatedPosts.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 bg-cyan-100 dark:bg-cyan-900/20 border-l-4 border-cyan-500 pl-4 py-3 rounded-r-lg">
                    Related Posts
                  </h2>
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <article key={relatedPost.id} className="group">
                        <Link href={`/blog/${relatedPost.slug}`} className="block">
                          {relatedPost.featured_image && (
                            <div className="aspect-video overflow-hidden rounded-lg mb-3">
                              <Image
                                src={relatedPost.featured_image || "/placeholder.svg"}
                                alt={`Featured image for ${relatedPost.title}`}
                                width={300}
                                height={200}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-2">
                          {relatedPost.excerpt.replace(/<[^>]*>/g, "").substring(0, 80)}...
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {/* Latest Posts Section */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 bg-cyan-100 dark:bg-cyan-900/20 border-l-4 border-cyan-500 pl-4 py-3 rounded-r-lg">
                  Latest Posts
                </h2>
                <div className="space-y-4">
                  {latestPosts.map((latestPost) => (
                    <article key={latestPost.id} className="group">
                      <Link href={`/blog/${latestPost.slug}`} className="block">
                        <div className="flex space-x-3">
                          {latestPost.featured_image && (
                            <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
                              <Image
                                src={latestPost.featured_image || "/placeholder.svg"}
                                alt={`Featured image for ${latestPost.title}`}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                              {latestPost.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                              {new Date(latestPost.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>

              {/* Newsletter Signup */}
              <section className="bg-gradient-to-br from-cyan-50 to-emerald-50 dark:from-cyan-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Stay Updated</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Get the latest Islamic insights and Quranic wisdom delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Subscribe</Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}