import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";

// ─────────────────────────────────────────────────────────────
// SITEMAP
// Next.js reads this file and serves it at /sitemap.xml
// Submit the URL to Google Search Console after deploying:
// https://wildventures.co.ke/sitemap.xml
//
// Priority guide:
//   1.0 = Homepage (most important)
//   0.9 = Key landing pages (tours, destinations)
//   0.8 = Individual tour pages (these drive bookings)
//   0.7 = Destination pages
//   0.6 = Supporting pages (about, reviews, plan)
//   0.4 = Contact (important but not a ranking page)
// ─────────────────────────────────────────────────────────────

export default function sitemap() {
  const baseUrl = "https://wildventures.co.ke";
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // ── Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/plan`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // ── Dynamic tour pages — highest priority after homepage
  const tourPages = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── Dynamic destination pages
  const destinationPages = destinations.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...tourPages, ...destinationPages];
}