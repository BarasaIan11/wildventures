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
    "Get in touch with Zafronix Safaris' safari specialists. Based in Hamza House Along Jogoo Road, Nairobi, Kenya. Call, email or WhatsApp us to start planning your East Africa safari today.",
  keywords: [
    "contact Zafronix Safaris",
    "safari inquiry Kenya",
    "plan safari East Africa",
    "Nairobi safari company contact",
    "Kenya safari specialist",
    "Tanzania safari booking",
  ],
  alternates: {
    canonical: "https://zafronixsafari.com/contact",
  },
  openGraph: {
    title: "Contact Zafronix Safaris — Plan Your Kenya & Tanzania Safari",
    description:
      "Speak to our safari specialists in Nairobi. Call, email or WhatsApp to start planning your tailor-made East Africa safari.",
    url: "https://zafronixsafari.com/contact",
    images: [
      {
        url: "https://zafronixsafari.com/images/hero/contact-hero.png",
        width: 1200,
        height: 630,
        alt: "Contact Zafronix Safaris specialists — Hamza House Along Jogoo Road, Nairobi, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Zafronix Safaris — Plan Your Safari",
    description:
      "Speak to our Nairobi-based safari specialists. WhatsApp, call or email us.",
    images: ["https://zafronixsafari.com/images/hero/contact-hero.png"],
  },
};

// ── JSON-LD Schema
function ContactSchema() {
  const rawWhatsapp = "254722319565";
  const contactPhone = `+${rawWhatsapp}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://zafronixsafari.com/contact",
        url: "https://zafronixsafari.com/contact",
        name: "Contact Zafronix Safaris And Travels Limited.",
        description:
          "Get in touch with Zafronix Safaris to plan your Kenya, Tanzania or Zanzibar safari.",
        isPartOf: { "@id": "https://zafronixsafari.com/#website" },
      },
      {
        "@type": "TravelAgency",
        "@id": "https://zafronixsafari.com/#organization",
        name: "Zafronix Safaris And Travels Limited.",
        url: "https://zafronixsafari.com",
        ...(contactPhone ? { telephone: contactPhone } : {}),
        email: "info@zafronixsafari.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hamza House Along Jogoo Road",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            ...(contactPhone ? { telephone: contactPhone } : {}),
            contactType: "customer service",
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            email: "info@zafronixsafari.com",
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
            item: "https://zafronixsafari.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://zafronixsafari.com/contact",
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