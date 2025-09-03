import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { fetchBlogPosts } from "@/lib/blog-api"
import { ArrowRight } from "lucide-react"

export async function BlogSection() {
  try {
    const response = await fetchBlogPosts(1, 3)
    console.log("[v0] Blog API response:", response) // Added debugging to see API response structure

    const posts = response?.posts || []

    console.log("[v0] Posts array:", posts) // Added debugging for posts array

    if (posts.length === 0) {
      return (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Latest Blog Posts</h2>
              <p className="text-muted-foreground">No blog posts available at the moment.</p>
            </div>
          </div>
        </section>
      )
    }

    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-card-foreground">Latest Blog Posts</h2>
              <p className="text-muted-foreground text-lg">
                Discover insights about Surah Rahman and Islamic teachings
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0 bg-transparent">
              <Link href="/blog" className="flex items-center gap-2">
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error("[v0] Error fetching blog posts:", error) // Added error logging
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Latest Blog Posts</h2>
            <p className="text-muted-foreground">Unable to load blog posts at the moment.</p>
          </div>
        </div>
      </section>
    )
  }
}
