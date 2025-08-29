// next-sitemap.config.ts
import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://suraherahman.com",
  generateRobotsTxt: true,  // Generates robots.txt
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/api/*", "/admin/*"], // Exclude unnecessary routes
  transform: async (cfg, path) => {
    let priority = 0.7;
    let changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';

    if (path === "/") {
      priority = 1.0;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

export default config;
