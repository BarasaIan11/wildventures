import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users, CheckCircle, XCircle } from "lucide-react";
import ItineraryAccordion from "@/components/tours/ItineraryAccordion";
import BookingWidget from "@/components/shared/BookingWidget";
import TourCard from "@/components/tours/TourCard";
import { getTourBySlug, tours } from "@/data/tours";
import TourFAQ from "@/components/tours/TourFAQ";

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) return { title: "Tour Not Found" };

  const title = `${tour.title} | ${tour.duration} Safari`;

  const description = `${tour.summary.slice(0, 140).trim()}… Private expeditions across ${tour.destination}. Enquire for bespoke rates and tailored itineraries with Zafronix Safaris.`;

  const canonicalUrl = `https://zafronixsafari.com/tours/${slug}`;
  const imageUrl = `https://zafronixsafari.com${tour.heroImage}`;

  return {
    title,
    description,
    keywords: [
      `${tour.destination} safari`,
      `${tour.destination} bespoke travel`,
      `${tour.title.toLowerCase()}`,
      "luxury safari inquiry",
      ...tour.wildlife.map((w) => `${w.toLowerCase()} safari`),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Zafronix Safaris And Travels Limited",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${tour.title} — Zafronix Safaris`,
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

function TourSchema({ tour }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `https://zafronixsafari.com/tours/${tour.slug}`,
        name: tour.title,
        description: tour.summary,
        url: `https://zafronixsafari.com/tours/${tour.slug}`,
        image: `https://zafronixsafari.com${tour.heroImage}`,
        touristType: tour.style,
        itinerary: tour.itinerary.map((day) => ({
          "@type": "TouristAttraction",
          name: day.title,
          description: day.description,
        })),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `https://zafronixsafari.com/tours/${tour.slug}`,
          priceCurrency: "USD",
          seller: {
            "@type": "TravelAgency",
            name: "Zafronix Safaris And Travels Limited",
          },
        },
        provider: {
          "@type": "TravelAgency",
          name: "Zafronix Safaris And Travels Limited",
          url: "https://zafronixsafari.com",
          telephone: "+254722319565",
          email: "info@zafronixsafari.com",
        },
        ...(tour.reviews.length > 0 && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (tour.reviews.reduce((sum, r) => sum + (r.rating || 5), 0) / tour.reviews.length).toFixed(1),
            reviewCount: tour.reviews.length,
            bestRating: "5",
          },
        }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://zafronixsafari.com" },
          { "@type": "ListItem", position: 2, name: "Tours", item: "https://zafronixsafari.com/tours" },
          { "@type": "ListItem", position: 3, name: tour.title, item: `https://zafronixsafari.com/tours/${tour.slug}` },
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

export default async function TourDetailPage({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) notFound();

  const related = tours
    .filter(
      (t) =>
        t.slug !== tour.slug &&
        t.destinationSlugs.some((d) => tour.destinationSlugs.includes(d))
    )
    .slice(0, 2);

  return (
    <>
      <TourSchema tour={tour} />

      {/* ── Hero */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src={tour.heroImage}
          alt={`${tour.title} — ${tour.destination} safari`}
          fill
          sizes="100vw"
          className="object-cover animate-hero-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto pt-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-beige transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <Link href="/tours" className="hover:text-beige transition-colors">Tours</Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-beige">{tour.title}</span>
          </nav>

          <div className="flex flex-wrap gap-3 mb-6">
            {tour.badge && (
              <span className={tour.badgeStyle === "green" ? "badge-green" : "badge-orange"}>
                {tour.badge}
              </span>
            )}
            <span className="badge bg-white/15 text-white backdrop-blur-md border border-white/10 uppercase tracking-widest">
              {tour.style}
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light text-white leading-[1] max-w-4xl mb-8">
            {tour.title}
          </h1>

          <div className="flex flex-wrap gap-8 text-white/90 text-[0.85rem] font-medium tracking-[0.2em] uppercase">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange" />
              {tour.destination}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange" />
              {tour.duration}
            </span>

          </div>
        </div>
      </div>

      {/* ── Main content */}
      <div className=" max-w-7xl mx-auto px-[5%] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          <div className="space-y-16">
            {/* Overview */}
            <div>
              <p className="section-label">The Expedition</p>
              <p className="text-[1.15rem] text-gray-600 leading-[1.8] font-light">
                {tour.summary}
              </p>
            </div>

            {/* Itinerary */}
            <div>
              <p className="section-label">Day-by-Day Journey</p>
              <h2 className="font-serif text-[2.5rem] text-green-dark leading-tight mb-8">
                Your Adventure, <br /><span className="italic font-normal">Step by Step</span>
              </h2>
              <ItineraryAccordion itinerary={tour.itinerary} />
            </div>
          </div>

          <aside className="sticky top-28 hidden lg:block">
            <BookingWidget tourTitle={tour.title} />
          </aside>

          {/* Mobile Widget (shows only on small screens at the bottom of this section) */}
          <div className="lg:hidden">
            <BookingWidget tourTitle={tour.title} />
          </div>
        </div>
      </div>

      <div className="bg-ivory/20 border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-[5%] space-y-24">

          {/* Highlights & Sightings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="section-label">Signature Highlights</p>
              <ul className="grid grid-cols-1 gap-4 mt-6">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[1rem] text-gray-600">
                    <span className="text-orange mt-1">✦</span> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label">Common Sightings</p>
              <div className="flex flex-wrap gap-3 mt-6">
                {tour.wildlife.map((w) => (
                  <span key={w} className="bg-white border border-beige text-green text-[0.85rem] px-5 py-2.5 rounded-sm font-medium shadow-sm">
                    🐾 {w}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Logistics (Included / Not Included) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-beige/40">
            <div>
              <p className="section-label !mb-6">What to Expect</p>
              <ul className="space-y-4">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-gray-500 font-light leading-snug">
                    <CheckCircle className="w-5 h-5 text-green-light shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label !mb-6">Not Included</p>
              <ul className="space-y-4">
                {tour.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-gray-500 font-light leading-snug">
                    <XCircle className="w-5 h-5 text-red-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="pt-12 border-t border-beige/40">
            <TourFAQ tour={tour} />
          </div>
        </div>
      </div>

      {/* Related tours */}
      {related.length > 0 && (
        <div className="section-pad bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="section-label">Continue Exploring</p>
            <h2 className="font-serif text-[2.5rem] text-green-dark mb-12">Similar <span className="italic">Experiences</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {related.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}