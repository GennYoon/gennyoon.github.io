/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://gennyoon.net",
  changefreq: "daily",
  priority: 1,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: [],
  rebotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
  },
};
