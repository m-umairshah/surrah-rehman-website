import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { Pagination } from "@/components/pagination"
import { fetchBlogPosts } from "@/lib/blog-api"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const response = await fetchBlogPosts(1, 3)
  const latestPosts = response.posts

  const dynamicKeywords = [
    "Islamic blog",
    "Surah Rahman",
    "Quran teachings",
    "Islamic articles",
    "spiritual guidance",
    "Islamic insights",
    "Quranic wisdom",
    "Islamic spirituality",
    "Muslim blog",
    "Islamic knowledge",
  ]

  // Add keywords from latest posts
  latestPosts.forEach((post) => {
    if (post.seo?.focus_keyword) {
      dynamicKeywords.push(post.seo.focus_keyword)
    }
    post.categories?.forEach((cat) => dynamicKeywords.push(cat.name))
    post.tags?.forEach((tag) => dynamicKeywords.push(tag.name))
  })

  return {
    title: "Islamic Blog - Surah Rahman Insights & Quranic Wisdom",
    description: `Explore our collection of ${response.total}+ articles about Surah Rahman, Islamic teachings, and spiritual guidance. Discover the beauty and wisdom of the Quran through thoughtful insights and Islamic knowledge.`,
    keywords: [...new Set(dynamicKeywords)], // Remove duplicates
    openGraph: {
      title: "Islamic Blog - Surah Rahman Insights & Quranic Wisdom",
      description: `Explore our collection of ${response.total}+ articles about Surah Rahman and Islamic teachings.`,
      type: "website",
      url: "https://suraherahman.com/blog",
      images: [
        {
          url: "https://suraherahman.com/blog-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Islamic Blog - Surah Rahman Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Islamic Blog - Surah Rahman Insights & Quranic Wisdom",
      description: `Explore our collection of ${response.total}+ articles about Surah Rahman and Islamic teachings.`,
      images: ["https://suraherahman.com/blog-twitter-image.jpg"],
    },
    alternates: {
      canonical: "https://suraherahman.com/blog",
    },
  }
}

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number.parseInt(searchParams.page || "1", 10)
  const response = await fetchBlogPosts(currentPage, 9)
  const { posts, total, pages } = response

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-card-foreground">
              Islamic Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              Discover the beauty and wisdom of Surah Rahman through our collection of thoughtful articles and spiritual
              guidance.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{total} Articles</span>
              <span>•</span>
              <span>
                Page {currentPage} of {pages}
              </span>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {posts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {posts.map((post) => (
                    <BlogCard key={post.id} post={post} showFullExcerpt />
                  ))}
                </div>

                <Pagination currentPage={currentPage} totalPages={pages} baseUrl="/blog" />
              </>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">No Blog Posts Found</h2>
                <p className="text-muted-foreground">
                  We're working on bringing you amazing content. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
