// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://suraherahman.com', // your site base URL
  generateRobotsTxt: true, // Optional, generates robots.txt
  sitemapSize: 7000,
  changefreq: 'monthly', // Default change frequency for pages
  priority: 0.7, // Default priority for all pages
  exclude: ['/api/*'], // Optional, exclude routes like APIs
  transform: async (cfg, path) => {
    let priority = 0.7;
    let changefreq = 'monthly';

    // Customize priority and changefreq for specific paths
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    }

    return {
      loc: path, // The URL of the page (relative URL)
      changefreq,
      priority,
      lastmod: new Date().toISOString(), // last modified time
    };
  }
};
