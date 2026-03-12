// src/app/plan/page.jsx
import PlanClient from "./PlanClient";

export const metadata = {
  title: "Plan Your Safari — Custom Kenya & Tanzania Itineraries",
  description:
    "Design your tailor-made Kenya, Tanzania or Zanzibar safari with WildVentures. Tell us your dates, budget & interests — we'll handle every detail. No commitment required.",
  keywords: [
    "plan Kenya safari",
    "custom Tanzania safari",
    "tailor-made safari itinerary",
    "bespoke safari Africa",
    "safari inquiry East Africa",
    "plan Zanzibar holiday",
    "luxury safari planning",
  ],
  alternates: {
    canonical: "https://wildventures.co.ke/plan",
  },
  openGraph: {
    title: "Plan Your Custom Safari | WildVentures",
    description:
      "Design your tailor-made Kenya, Tanzania or Zanzibar safari. Tell us your vision — we'll handle every detail.",
    url: "https://wildventures.co.ke/plan",
    images: [
      {
        url: "https://wildventures.co.ke/images/hero/plan-hero.png",
        width: 1200,
        height: 630,
        alt: "Plan your dream safari with WildVentures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan Your Custom Safari | WildVentures",
    description:
      "Tailor-made Kenya, Tanzania & Zanzibar safaris. Tell us your dream — we'll build it.",
    images: ["https://wildventures.co.ke/images/hero/plan-hero.png"],
  },
};

function PlanSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wildventures.co.ke/plan",
        url: "https://wildventures.co.ke/plan",
        name: "Plan Your Custom Safari — WildVentures",
        description:
          "Design a tailor-made Kenya, Tanzania or Zanzibar safari with WildVentures. Submit your safari inquiry and receive a bespoke itinerary within 24 hours.",
        isPartOf: { "@id": "https://wildventures.co.ke/#website" },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://wildventures.co.ke/plan",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Safari Inquiry",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://wildventures.co.ke",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Plan Your Safari",
            item: "https://wildventures.co.ke/plan",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PlanPage() {
  return (
    <>
      <PlanSchema />
      <PlanClient />
    </>
  );
}