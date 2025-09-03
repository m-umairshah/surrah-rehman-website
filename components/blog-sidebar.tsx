import { fetchBlogPosts, formatDate, decodeHtmlEntities } from "@/lib/blog-api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogSidebarProps {
  currentPostId?: number
}

export async function BlogSidebar({ currentPostId }: BlogSidebarProps) {
  const response = await fetchBlogPosts(1, 5)
  const recentPosts = response.posts.filter((post) => post.id !== currentPostId)

  return (
    <aside className="space-y-6">
      {/* Recent Posts */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Clock className="h-5 w-5 text-primary" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.slice(0, 4).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {post.featured_image && (
                <div className="relative w-full h-20 rounded-md overflow-hidden">
                  <Image
                    src={post.featured_image || "/placeholder.svg"}
                    alt={decodeHtmlEntities(post.title)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                {decodeHtmlEntities(post.title)}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(post.date)}</span>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      {recentPosts.length > 0 && recentPosts[0].categories && (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Tag className="h-5 w-5 text-primary" />
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(recentPosts.flatMap((post) => post.categories).map((cat) => cat.name)))
                .slice(0, 8)
                .map((categoryName) => (
                  <Badge key={categoryName} variant="secondary" className="text-xs">
                    {decodeHtmlEntities(categoryName)}
                  </Badge>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Newsletter Signup */}
      <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Stay Updated</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Get the latest Islamic content and spiritual guidance delivered to your inbox.
          </p>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
