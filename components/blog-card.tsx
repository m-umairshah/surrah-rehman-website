import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type BlogPost, formatDate, truncateText } from "@/lib/blog-api"
import { Calendar, User } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
  showFullExcerpt?: boolean
}

export function BlogCard({ post, showFullExcerpt = false }: BlogCardProps) {
  const excerpt = showFullExcerpt ? truncateText(post.excerpt, 200) : truncateText(post.excerpt, 120)

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-border bg-card">
      <div className="relative aspect-video overflow-hidden">
        {post.featured_image ? (
          <Image
            src={post.featured_image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-muted-foreground text-sm">No Image</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="space-y-3">
        {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div> */}

        <h3 className="text-xl font-bold text-card-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed line-clamp-3">{excerpt}</p>

        {/* {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <Badge key={category.id} variant="secondary" className="text-xs">
                {category.name}
              </Badge>
            ))}
          </div>
        )} */}

        <Button asChild className="w-full">
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
