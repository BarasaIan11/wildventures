import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Thermometer } from "lucide-react";
import TourCard from "@/components/tours/TourCard";
import BookingCTA from "@/components/home/BookingCTA";
import { getDestinationBySlug, destinations } from "@/data/destinations";
import { getToursByDest } from "@/data/tours";

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

// SEO METADATA
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) return { title: "Destination Not Found" };

  // Keyword-rich title per destination
  const titleMap = {
    kenya: "Kenya Safari Holidays & Tours 2025/2026",
    tanzania: "Tanzania Safari Tours & Packages 2025/2026",
    zanzibar: "Zanzibar Beach Holidays & Safari Combos",
    rwanda: "Rwanda Gorilla Trekking Tours",
    uganda: "Uganda Safari & Gorilla Trekking",
  };

  const descriptionMap = {
    kenya:
      "Explore Kenya's iconic Masai Mara, Amboseli & Samburu on a tailor-made safari. Expert guides, luxury camps & the Great Migration.",
    tanzania:
      "Discover the Serengeti, Ngorongoro Crater & Zanzibar with Zafronix Safaris. Tanzania's greatest safari experiences crafted for international travellers.",
    zanzibar:
      "White-sand beaches, Stone Town spice tours & Indian Ocean diving. Combine Zanzibar with a Tanzania safari for the ultimate East Africa escape.",
    rwanda:
      "Trek to see mountain gorillas in Volcanoes National Park. Life-changing Rwanda gorilla safaris with Zafronix Safaris. Permits included.",
    uganda:
      "Gorilla trekking in Bwindi, chimpanzees in Kibale & tree-climbing lions. Uganda's best wildlife experiences with Zafronix Safaris.",
  };

  const title = titleMap[slug] || `${dest.name} Safari`;
  const description =
    descriptionMap[slug] ||
    `Explore ${dest.name} with Zafronix Safaris — ${dest.tagline}. Expert-guided safaris crafted for international travellers.`;

  const canonicalUrl = `https://zafronixsafari.com/destinations/${slug}`;
  const imageUrl = `https://zafronixsafari.com${dest.heroImage}`;

  return {
    title,
    description,
    keywords: [
      `${dest.name} safari`,
      `${dest.name} safari packages`,
      `${dest.name} safari tours`,
      `${dest.name} wildlife safari`,
      `best ${dest.name} safari company`,
      `${dest.name} safari holidays`,
      "East Africa safari",
      "Zafronix Safaris",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Zafronix Safaris And Travels Limited.",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${dest.name} Safari — Zafronix Safaris`,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      site: "@ZafronixSafaris",
    },
  };
}

// JSON-LD SCHEMA — TouristDestination + BreadcrumbList
function DestinationSchema({ dest }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "@id": `https://zafronixsafari.com/destinations/${dest.slug}`,
        name: dest.name,
        description: dest.description,
        url: `https://zafronixsafari.com/destinations/${dest.slug}`,
        image: `https://zafronixsafari.com${dest.heroImage}`,
        touristType: ["Safari", "Wildlife", "Adventure", "Luxury Travel"],
        includesAttraction: dest.highlights.map((h) => ({
          "@type": "TouristAttraction",
          name: h,
        })),
      },
      // TravelAgency offering tours to this destination
      {
        "@type": "TravelAgency",
        "@id": "https://zafronixsafari.com",
        name: "Zafronix Safaris And Travels Limited.",
        url: "https://zafronixsafari.com",
        telephone: "+254722319565",
        email: "info@zafronixsafari.com",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hamza House Along Jogoo Road",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        areaServed: [
          "Kenya",
          "Tanzania",
          "Zanzibar",
          "Rwanda",
          "Uganda",
        ],
      },
      // Breadcrumb
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
            name: "Destinations",
            item: "https://zafronixsafari.com/destinations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: dest.name,
            item: `https://zafronixsafari.com/destinations/${dest.slug}`,
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

// PAGE COMPONENT
export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) notFound();

  const tours = getToursByDest(dest.slug);

  return (
    <>
      <DestinationSchema dest={dest} />

      {/* ── Hero */}
      <div className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src={dest.heroImage}
          alt={`${dest.name} safari landscape — Zafronix Safaris`}
          fill
          sizes="100vw"
          className="object-cover animate-hero-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto pt-24">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6"
          >
            <Link
              href="/destinations"
              className="hover:text-beige transition-colors"
            >
              Destinations
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-beige">{dest.name}</span>
          </nav>

          <p className="text-orange text-[0.8rem] tracking-[0.2em] uppercase font-semibold mb-3">
            {dest.tagline}
          </p>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-light text-white leading-[1.1] max-w-4xl mb-8">
            {dest.flag} {dest.name}
          </h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="space-y-12">
            <div>
              <p className="section-label">About {dest.name}</p>
              <p className="text-[1.1rem] text-gray-600 leading-[1.85] font-light">
                {dest.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-beige/40 rounded-sm p-6 border border-beige/60">
                <div className="flex items-center gap-2 text-green font-semibold uppercase tracking-wider text-[0.75rem] mb-3">
                  <Calendar className="w-4 h-4 text-orange" /> Best Time to Visit
                </div>
                <p className="text-[1rem] text-charcoal">{dest.bestTime}</p>
              </div>
              <div className="bg-beige/40 rounded-sm p-6 border border-beige/60">
                <div className="flex items-center gap-2 text-green font-semibold uppercase tracking-wider text-[0.75rem] mb-3">
                  <Thermometer className="w-4 h-4 text-orange" /> Climate
                </div>
                <p className="text-[1rem] text-charcoal">{dest.climate}</p>
              </div>
            </div>

            <div>
              <p className="section-label">Must-See Highlights</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[0.95rem] text-gray-600"
                  >
                    <span className="text-orange mt-1">✦</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label">Wildlife You May See</p>
              <div className="flex flex-wrap gap-3">
                {dest.wildlife.map((w) => (
                  <span
                    key={w}
                    className="bg-beige text-green text-[0.85rem] px-5 py-2.5 rounded-sm font-medium"
                  >
                    🐾 {w}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-green rounded-sm p-8 text-white shadow-card">
              <p className="font-serif text-[1.6rem] leading-tight mb-4">
                Ready to visit {dest.name}?
              </p>
              <p className="text-white/70 text-[0.95rem] leading-relaxed mb-8 font-light">
                Our specialists know {dest.name} intimately. Let us craft your
                perfect itinerary.
              </p>
              <Link
                href="/plan"
                className="btn btn-primary block text-center w-full py-5"
              >
                Plan My Trip
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline-white block text-center mt-4 w-full py-5"
              >
                Talk to an Expert
              </Link>
            </div>
          </aside>
        </div>

        {/* Tours for this destination */}
        {tours.length > 0 && (
          <div className="mt-24 max-w-7xl mx-auto">
            <p className="section-label">{dest.name} Safaris</p>
            <h2 className="section-title mb-12">
              Recommended <em>Tours</em> in {dest.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        )}
      </section>

      <BookingCTA />
    </>
  );
}