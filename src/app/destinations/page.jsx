import Image from "next/image";
import DestinationCard from "@/components/destinations/DestinationCard";
import BookingCTA from "@/components/home/BookingCTA";
import { destinations } from "@/data/destinations";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "Kenya, Tanzania & Zanzibar Safari Destinations",
  description:
    "Explore Zafronix Safaris' East African destinations — Kenya's Masai Mara, Tanzania's Serengeti, Zanzibar's white-sand beaches & more. Find your perfect safari destination.",
  keywords: [
    "Kenya safari destination",
    "Tanzania safari destination",
    "Zanzibar beach holiday",
    "Masai Mara Kenya",
    "Serengeti Tanzania",
    "East Africa safari destinations",
    "best safari destinations Africa",
    "Rwanda gorilla trekking",
  ],
  alternates: {
    canonical: "https://zafronixsafaris.com/destinations",
  },
  openGraph: {
    title: "Kenya, Tanzania & Zanzibar Safari Destinations",
    description:
      "Explore Zafronix Safaris' East African destinations — Kenya's Masai Mara, Tanzania's Serengeti, Zanzibar beaches & more.",
    url: "https://zafronixsafaris.com/destinations",
    images: [
      {
        url: "https://zafronixsafaris.com/images/hero/destinations-hero.png",
        width: 1200,
        height: 630,
        alt: "East Africa safari destinations — Zafronix Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya, Tanzania & Zanzibar Destinations",
    description:
      "Masai Mara, Serengeti, Zanzibar beaches & more. Find your perfect East Africa safari destination.",
    images: ["https://zafronixsafaris.com/images/hero/destinations-hero.png"],
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD — ItemList of destinations
// ─────────────────────────────────────────────────────────────
function DestinationsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zafronix Safaris East Africa Safari Destinations",
    description:
      "Safari and beach holiday destinations across East Africa, including Kenya, Tanzania, Zanzibar, Rwanda and Uganda.",
    url: "https://zafronixsafaris.com/destinations",
    numberOfItems: destinations.length,
    itemListElement: destinations.map((dest, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristDestination",
        name: dest.name,
        description: dest.description.slice(0, 200),
        url: `https://zafronixsafaris.com/destinations/${dest.slug}`,
        image: `https://zafronixsafaris.com${dest.image}`,
        touristType: ["Safari", "Wildlife", "Adventure"],
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

export default function DestinationsPage() {
  // Featured first (Kenya, Tanzania, Zanzibar)
  const featured = destinations.filter((d) => d.featured);
  // const secondary = destinations.filter((d) => !d.featured);

  return (
    <main className="bg-ivory">
      <DestinationsSchema />

      {/* ── Hero */}
      <div className="relative h-[65vh] min-h-[520px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/destinations-hero.png"
          alt="East African safari landscape — Kenya, Tanzania and Zanzibar destinations"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

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
            <span className="text-beige">Destinations</span>
          </nav>

          <p className="section-label light">Explore Africa</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1] max-w-3xl">
            Discover Legendary <br />
            <em className="italic text-beige">Destinations</em>
          </h1>
          <p className="text-white/80 mt-6 text-[1.1rem] font-light max-w-md leading-relaxed">
            From the endless plains of the Serengeti to Zanzibar's
            white-sand shores. Discover the soul of East Africa.
          </p>
        </div>
      </div>

      {/* ── Primary destinations: Kenya, Tanzania, Zanzibar */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-label">The Collection</p>
          <h2 className="section-title italic text-green">Our Focus Regions</h2>
          <p className="text-gray-500 text-[1rem] leading-relaxed max-w-2xl mt-4 font-light">
            These are the destinations we know best — where our guides grew up,
            where our camps are trusted, and where we can genuinely promise an
            extraordinary experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>

      {/* ── Secondary destinations: Rwanda, Uganda */}
      {/* {secondary.length > 0 && (
        <section className="pb-24 max-w-7xl mx-auto px-[5%]">
          <div className="mb-12 pt-8 border-t border-beige/60">
            <p className="section-label">Also Available</p>
            <h2 className="section-title">
              Rwanda <em>&amp; Uganda</em>
            </h2>
            <p className="text-gray-500 text-[1rem] leading-relaxed max-w-2xl mt-4 font-light">
              For travellers seeking the rare and extraordinary — mountain
              gorilla trekking and primate encounters in the heart of Central
              Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {secondary.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </section>
      )} */}

      <div className="mt-24 pt-12 border-t border-beige/60 text-center">
            <p className="text-[0.8rem] text-gray-400 tracking-[0.3em] uppercase font-medium mb-2">
          Specialising in East Africa
        </p>
      </div>
      </section>

      <BookingCTA />
    </main>
  );
}