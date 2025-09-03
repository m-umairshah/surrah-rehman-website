import { NextResponse } from "next/server"
import { fetchAllPosts } from "@/lib/blog-api"

// Helper function to validate and format dates for sitemap
function formatSitemapDate(dateString: string | null | undefined): string {
  if (!dateString) {
    return new Date().toISOString().split('T')[0] // Return current date in YYYY-MM-DD format
  }
  
  try {
    const date = new Date(dateString)
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return new Date().toISOString().split('T')[0]
    }
    
    // Return date in W3C Datetime format (YYYY-MM-DD)
    return date.toISOString().split('T')[0]
  } catch (error) {
    console.warn('Invalid date format:', dateString)
    return new Date().toISOString().split('T')[0]
  }
}

export async function GET() {
  try {
    const posts = await fetchAllPosts()

    const baseUrl = "https://suraherahman.com"
    const currentDate = formatSitemapDate(new Date().toISOString())

    const staticPages = [
      { url: `${baseUrl}/`, priority: "1.00", lastmod: currentDate },
      { url: `${baseUrl}/blog`, priority: "0.90", lastmod: currentDate },
      { url: `${baseUrl}/surah-rahman-listen-online`, priority: "0.80", lastmod: currentDate },
      { url: `${baseUrl}/surah-rahman-read-online`, priority: "0.80", lastmod: currentDate },
      { url: `${baseUrl}/surah-rahman-arabic`, priority: "0.80", lastmod: currentDate },
      { url: `${baseUrl}/surah-rahman-urdu`, priority: "0.80", lastmod: currentDate },
      { url: `${baseUrl}/surah-rahman-english`, priority: "0.80", lastmod: currentDate },
      { url: `${baseUrl}/surah-rahman-benefits`, priority: "0.80", lastmod: currentDate },
      { url: `${baseUrl}/qari-abdul-basit`, priority: "0.70", lastmod: currentDate },
      { url: `${baseUrl}/mishari-al-afasi`, priority: "0.70", lastmod: currentDate },
      { url: `${baseUrl}/surah-rahman-pdf`, priority: "0.70", lastmod: currentDate },
      { url: `${baseUrl}/about-us`, priority: "0.60", lastmod: currentDate },
      { url: `${baseUrl}/contact-us`, priority: "0.60", lastmod: currentDate },
      { url: `${baseUrl}/privacy-policy`, priority: "0.50", lastmod: currentDate },
      { url: `${baseUrl}/terms-and-conditions`, priority: "0.50", lastmod: currentDate },
    ]

    // Blog posts - map posts to get actual modified dates with validation
    const blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      priority: "0.80",
      lastmod: formatSitemapDate(post.modified)
    }))

    const allPages = [...staticPages, ...blogPages]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Next.js Dynamic Sitemap Generator -->

${allPages
  .map((page) => {
    return `
<url>
  <loc>${page.url}</loc>
  <lastmod>${page.lastmod}</lastmod>
  <priority>${page.priority}</priority>
</url>`
  })
  .join("")}

</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return new NextResponse("Error generating sitemap", { status: 500 })
  }
}