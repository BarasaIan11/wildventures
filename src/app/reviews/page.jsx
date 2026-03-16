import Image from "next/image";
import BookingCTA from "@/components/home/BookingCTA";
import { testimonials } from "@/data/testimonials";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "Safari Reviews & Traveler Stories — Real Guest Experiences",
  description:
    "Read honest reviews from WildVentures guests across Kenya, Tanzania & Zanzibar. 4.9★ average from 3,200+ travellers. Real stories from real safaris.",
  keywords: [
    "WildVentures reviews",
    "Kenya safari reviews",
    "Tanzania safari testimonials",
    "safari company reviews",
    "East Africa safari experiences",
    "Masai Mara safari reviews",
    "Serengeti safari reviews",
  ],
  alternates: {
    canonical: "https://wildventures.co.ke/reviews",
  },
  openGraph: {
    title: "Safari Reviews & Traveler Stories | WildVentures",
    description:
      "4.9★ from 3,200+ travellers. Read real reviews from WildVentures guests across Kenya, Tanzania & Zanzibar safaris.",
    url: "https://wildventures.co.ke/reviews",
    images: [
      {
        url: "https://wildventures.co.ke/images/hero/reviews-hero.png",
        width: 1200,
        height: 630,
        alt: "Happy travellers on safari — WildVentures reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Reviews — 4.9★ from 3,200+ Travellers | WildVentures",
    description:
      "Real stories from real guests across Kenya, Tanzania & Zanzibar.",
    images: ["https://wildventures.co.ke/images/hero/reviews-hero.png"],
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD — AggregateRating + individual Reviews
// This can generate star ratings in Google search results
// ─────────────────────────────────────────────────────────────
function ReviewsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://wildventures.co.ke/#organization",
        name: "WildVentures Safari Co.",
        url: "https://wildventures.co.ke",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: testimonials.length,
          bestRating: "5",
          worstRating: "1",
        },
        review: testimonials.slice(0, 10).map((t) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: t.name,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: "5",
          },
          reviewBody: t.text,
          datePublished: "2025-01-01",
          publisher: {
            "@type": "Organization",
            name: "WildVentures Safari Co.",
          },
        })),
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
            name: "Reviews",
            item: "https://wildventures.co.ke/reviews",
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

// ─────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────
function Avatar({ initials, color, size = 44 }) {
  return (
    <div
      aria-hidden="true"
      className="rounded-full flex items-center justify-center flex-shrink-0 border-2 border-beige"
      style={{ width: size, height: size, backgroundColor: color }}
    >
      <span className="text-white font-medium text-[0.75rem] tracking-wide select-none">
        {initials}
      </span>
    </div>
  );
}

function StarRating({ n = 5, size = "normal" }) {
  return (
    <p
      className={`text-orange tracking-[3px] ${
        size === "large" ? "text-xl" : "text-sm"
      }`}
      aria-label={`${n} out of 5 stars`}
    >
      {"★".repeat(n)}
    </p>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function ReviewsPage() {
  return (
    <>
      <ReviewsSchema />

      {/* ── Hero */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/reviews-hero.png"
          alt="WildVentures travellers experiencing a Kenya safari — guest reviews"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6"
          >
            <a href="/" className="hover:text-beige transition-colors">
              Home
            </a>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-beige">Reviews</span>
          </nav>

          <p className="section-label light">Traveler Stories</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1]">
            Real People, <br />
            Real <em className="italic text-beige">Adventures</em>
          </h1>
          <p className="text-white/80 mt-6 text-[1.05rem] font-light max-w-md leading-relaxed">
            The best part of our job is hearing about the moments that stayed
            with you long after the dust of the savanna settled.
          </p>
        </div>
      </div>

      <section className="section-pad pt-20">
        {/* Summary stats */}
        <div className="bg-green rounded-sm p-8 md:p-10 mb-14 text-center md:text-left shadow-card">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:border-r border-white/20 md:pr-10 flex-shrink-0">
              <p className="font-serif text-[4rem] text-white font-light leading-none">
                4.9
              </p>
              <StarRating n={5} size="large" />
              <p className="text-white/60 text-[0.8rem] mt-1 uppercase tracking-wider">
                out of 5 stars
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                {
                  num: testimonials.length.toString(),
                  label: "Verified Reviews",
                },
                { num: "98%", label: "Would Recommend" },
                { num: "15+", label: "Years of Excellence" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-serif text-[2.2rem] text-beige font-light leading-none">
                    {num}
                  </p>
                  <p className="text-white/55 text-[0.78rem] tracking-wide uppercase mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className={`rounded-sm p-8 transition-transform duration-300 hover:-translate-y-1 ${
                t.featured
                  ? "bg-green text-white"
                  : "bg-white shadow-card"
              }`}
            >
              <p
                className={`font-serif text-[3.5rem] leading-[0.7] mb-4 ${
                  t.featured ? "text-beige/30" : "text-beige"
                }`}
              >
                &ldquo;
              </p>
              <p
                className={`font-serif italic text-[1.05rem] leading-[1.8] mb-6 ${
                  t.featured ? "text-beige" : "text-charcoal"
                }`}
              >
                {t.text}
              </p>
              <StarRating n={t.rating} />
              <div className="flex items-center gap-3 mt-4">
                <Avatar initials={t.initials} color={t.color} />
                <div>
                  <p
                    className={`font-medium text-[0.95rem] ${
                      t.featured ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[0.8rem] ${
                      t.featured ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    {t.location}
                  </p>
                  <p className="text-[0.75rem] font-medium tracking-wide uppercase mt-0.5 text-orange">
                    {t.trip}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- Trust Logos Section --- */}
<div className="mt-28 border-t border-beige pt-16">
  <p className="text-center text-[0.7rem] tracking-[0.3em] uppercase text-green font-bold mb-10">
    Verified by the World's Leading Platforms
  </p>
  
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
    {/* TripAdvisor */}
    <div className="flex justify-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Tripadvisor_Logo.svg" alt="TripAdvisor" className="h-8 md:h-10" />
    </div>
    
    {/* Google Reviews */}
    <div className="flex justify-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-7 md:h-9" />
    </div>

    {/* Safari Bookings */}
    <div className="flex justify-center">
       <div className="flex items-center gap-1 font-bold text-charcoal text-xl tracking-tighter">
         <span className="text-orange">Safari</span>Bookings
       </div>
    </div>

    {/* Trustpilot */}
    <div className="flex justify-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Trustpilot_logo.svg" alt="Trustpilot" className="h-8 md:h-10" />
    </div>
  </div>
        </div>
      </section>

      <div className="mt-10">
        <BookingCTA />
      </div>
    </>
  );
}