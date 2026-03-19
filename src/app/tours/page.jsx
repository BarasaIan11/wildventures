import { Suspense } from "react";
import Image from "next/image";
import TourCard from "@/components/tours/TourCard";
import TourFilters from "@/components/tours/TourFilters";
import BookingCTA from "@/components/home/BookingCTA";
import { tours } from "@/data/tours";

export const metadata = {
  title: "Kenya & Tanzania Safari Tours & Packages 2025/2026",
  description:
    "Browse Zafronix Safaris' full collection of Kenya and Tanzania safari packages — from 5-day Masai Mara classics to 14-day Tanzania & Zanzibar grand tours. From $1,450/pp.",
  keywords: [
    "Kenya safari packages 2025",
    "Tanzania safari tours",
    "Masai Mara safari",
    "Serengeti safari packages",
    "Zanzibar safari combo",
    "East Africa safari holidays",
    "luxury safari Kenya Tanzania",
    "family safari Africa",
    "Great Migration safari tour",
  ],
  alternates: {
    canonical: "https://zafronixsafaris.com/tours",
  },
  openGraph: {
    title: "Kenya & Tanzania Safari Tours & Packages",
    description:
      "Browse our full collection of Kenya and Tanzania safari packages. Masai Mara, Serengeti, Ngorongoro, Zanzibar & more. Expert guides, luxury camps. From $1,450/pp.",
    url: "https://zafronixsafaris.com/tours",
    images: [
      {
        url: "https://zafronixsafaris.com/images/hero/lions.png",
        width: 1200,
        height: 630,
        alt: "Safari lions on the Masai Mara plains — Zafronix Safaris Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya & Tanzania Safari Tours",
    description:
      "Browse our full collection of East Africa safari packages. From $1,450/pp.",
    images: ["https://zafronixsafaris.com/images/hero/lions.png"],
  },
};

// JSON-LD — ItemList of all tours for rich results
// Google can show individual tours as expandable results
function ToursSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zafronix Safaris Kenya & Tanzania Safari Tours",
    description:
      "Tailor-made safari packages across Kenya, Tanzania and Zanzibar.",
    url: "https://zafronixsafaris.com/tours",
    numberOfItems: tours.length,
    itemListElement: tours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        name: tour.title,
        description: tour.summary,
        url: `https://zafronixsafaris.com/tours/${tour.slug}`,
        image: `https://zafronixsafaris.com${tour.image}`,
        offers: {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// TOURS FILTER + GRID
function ToursContent({ destination, style, duration }) {
  let filtered = [...tours];

  if (destination)
    filtered = filtered.filter((t) => t.destinationSlugs.includes(destination));
  if (style)
    filtered = filtered.filter((t) => t.style.toLowerCase() === style);
  if (duration) {
    const map = { short: [3, 5], medium: [6, 8], long: [9, 14] };
    const [min, max] = map[duration] || [0, 99];
    filtered = filtered.filter((t) => {
      const days = parseInt(t.duration);
      return days >= min && days <= max;
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
      <Suspense fallback={<div />}>
        <TourFilters />
      </Suspense>
      <div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-[0.88rem] text-gray-500">
            <span className="font-medium text-charcoal">{filtered.length}</span>{" "}
            safaris found
          </p>
        </div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-sm">
            <p className="font-serif text-2xl text-charcoal mb-3">
              No safaris match your filters
            </p>
            <p className="text-gray-400 text-sm">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// PAGE
export default async function ToursPage({ searchParams }) {
  const params = (await searchParams) ?? {};
  const first = (value) => (Array.isArray(value) ? value[0] : value);
  const destination = first(params.destination);
  const style = first(params.style);
  const duration = first(params.duration);

  return (
    <>
      <ToursSchema />

      {/* ── Hero */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/lions.png"
          alt="Lions resting on the Masai Mara plains at golden hour — Zafronix Safaris Kenya safaris"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6"
          >
            <a href="/" className="hover:text-beige transition-colors">
              Home
            </a>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-beige">Tours</span>
          </nav>

          <p className="section-label light">Our Safari Collection</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1]">
            Find Your Perfect{" "}
            <em className="italic text-beige">Safari</em>
          </h1>
          <p className="text-white/80 mt-4 text-[1rem] max-w-md leading-relaxed font-light">
            Kenya, Tanzania & Zanzibar safari packages handpicked for
            international travellers — from classic Masai Mara drives to
            14-day grand expeditions.
          </p>
        </div>
      </div>

      <div className="section-pad">
        <ToursContent
          destination={destination}
          style={style}
          duration={duration}
        />
      </div>

      <BookingCTA />
    </>
  );
}