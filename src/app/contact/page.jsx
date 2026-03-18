// src/app/contact/page.jsx
// ─────────────────────────────────────────────────────────────
// NOTE: The actual ContactPage is a "use client" component
// (it uses React hooks for the form). In Next.js App Router,
// metadata must be exported from a Server Component.
// Solution: this file is the server wrapper — it exports
// metadata and renders the client component below.
// ─────────────────────────────────────────────────────────────
import ContactClient from "./ContactClient";

// ── SEO Metadata
export const metadata = {
  title: "Contact Zafronix Safaris — Plan Your Kenya & Tanzania Safari",
  description:
    "Get in touch with Zafronix Safaris' safari specialists. Based in Nairobi, Kenya. Call, email or WhatsApp us to start planning your East Africa safari today.",
  keywords: [
    "contact Zafronix Safaris",
    "safari inquiry Kenya",
    "plan safari East Africa",
    "Nairobi safari company contact",
    "Kenya safari specialist",
    "Tanzania safari booking",
  ],
  alternates: {
    canonical: "https://zafronixsafaris.co.ke/contact",
  },
  openGraph: {
    title: "Contact Zafronix Safaris — Plan Your Kenya & Tanzania Safari",
    description:
      "Speak to our safari specialists in Nairobi. Call, email or WhatsApp to start planning your tailor-made East Africa safari.",
    url: "https://zafronixsafaris.co.ke/contact",
    images: [
      {
        url: "https://zafronixsafaris.co.ke/images/hero/contact-hero.png",
        width: 1200,
        height: 630,
        alt: "Contact Zafronix Safaris safari specialists — Nairobi, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Zafronix Safaris — Plan Your Safari",
    description:
      "Speak to our Nairobi-based safari specialists. WhatsApp, call or email us.",
    images: ["https://zafronixsafaris.co.ke/images/hero/contact-hero.png"],
  },
};

// ── JSON-LD Schema
function ContactSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://zafronixsafaris.co.ke/contact",
        url: "https://zafronixsafaris.co.ke/contact",
        name: "Contact Zafronix Safaris Safari Co.",
        description:
          "Get in touch with Zafronix Safaris to plan your Kenya, Tanzania or Zanzibar safari.",
        isPartOf: { "@id": "https://zafronixsafaris.co.ke/#website" },
      },
      {
        "@type": "TravelAgency",
        "@id": "https://zafronixsafaris.co.ke/#organization",
        name: "Zafronix Safaris Safari Co.",
        url: "https://zafronixsafaris.co.ke",
        telephone: "+254780166113",
        email: "hello@zafronixsafaris.co",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Westlands Business Park",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday",
            "Thursday","Friday","Saturday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+254780166113",
            contactType: "customer service",
            availableLanguage: ["English"],
            contactOption: "TollFree",
          },
          {
            "@type": "ContactPoint",
            email: "hello@zafronixsafaris.co",
            contactType: "sales",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://zafronixsafaris.co.ke",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://zafronixsafaris.co.ke/contact",
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

// ── Server wrapper — renders schema + client component
export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <ContactClient />
    </>
  );
}