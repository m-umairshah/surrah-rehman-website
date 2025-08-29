next-sitemap.config.js// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://suraherahman.com', // your base URL
  generateRobotsTxt: true, // Optional, to generate robots.txt
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*'], // exclude private API routes if any
  transform: async (cfg, path) => {
    let priority = 0.7;
    let changefreq = 'monthly';

    // Define custom frequency and priority based on paths
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    }

    return {
      loc: path, // The URL of the page
      changefreq,
      priority,
      lastmod: new Date().toISOString(), // last modification date
    };
  },
};
