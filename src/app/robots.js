// src/app/robots.js
// Next.js generates /robots.txt from this file automatically.
// No manual robots.txt file needed in /public.

export default function robots() {
  return {
    rules: [
      {
        // Allow all search engine crawlers
        userAgent: "*",
        allow: "/",
        // Block Next.js internal routes — no SEO value
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
    ],
    // Tell Google (and all crawlers) where your sitemap is
    sitemap: "https://zafronixsafari.com/sitemap.xml",
    // Your canonical domain — prevents crawling of Vercel preview URLs
    host: "https://zafronixsafari.com",
  };
}