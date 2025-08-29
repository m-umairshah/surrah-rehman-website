// next-sitemap.config.ts
import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://suraherahman.com',
  generateRobotsTxt: true,          // also creates robots.txt
  sitemapSize: 7000,
  changefreq: 'monthly',            // default (you can override per path below)
  priority: 0.7,                    // default
  exclude: ['/api/*', '/admin/*'],  // adjust if you have private routes
  transform: async (cfg, path) => {
    // Customize priority / freq by route patterns
    let priority = 0.7
    let changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path.startsWith('/surah-rahman')) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (
      ['/about-us', '/surah-rahman-read-online', '/surah-rahman-listen-online'].includes(path)
    ) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (['/privacy-policy', '/terms-and-conditions'].includes(path)) {
      priority = 0.3
      changefreq = 'yearly'
    }

    return {
      loc: path,                    // keep as path; next-sitemap prefixes siteUrl
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
export default config
