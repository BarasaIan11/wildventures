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

// ─────────────────────────────────────────────────────────────
// SEO METADATA — rich titles, descriptions, OG, Twitter cards
// ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) return { title: "Tour Not Found | WildVentures" };

  // Build a keyword-rich title: "Tour Name | X Days Safari | WildVentures"
  const title = `${tour.title} | ${tour.duration} Safari | WildVentures`;

  // 150-character meta description targeting what tourists actually search
  const description = `${tour.summary.slice(0, 130).trim()}… From $${tour.price.toLocaleString()}/pp. Book with WildVentures, East Africa's premier safari company.`;

  const canonicalUrl = `https://wildventures.co.ke/tours/${slug}`;
  const imageUrl = `https://wildventures.co.ke${tour.heroImage}`;

  return {
    title,
    description,
    keywords: [
      `${tour.destination} safari`,
      `${tour.destination} safari packages`,
      `${tour.title.toLowerCase()}`,
      `${tour.duration.toLowerCase()} safari`,
      `${tour.style.toLowerCase()} safari East Africa`,
      "East Africa safari tours",
      "WildVentures safari",
      "Kenya Tanzania safari packages",
      tour.wildlife.map((w) => `${w.toLowerCase()} safari`).join(", "),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "WildVentures Safari Co.",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${tour.title} — WildVentures`,
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
      site: "@WildVentures",
    },
  };
}

// ─────────────────────────────────────────────────────────────
// JSON-LD SCHEMA — TouristTrip + Product for rich results
// ─────────────────────────────────────────────────────────────
function TourSchema({ tour }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `https://wildventures.co.ke/tours/${tour.slug}`,
        name: tour.title,
        description: tour.summary,
        url: `https://wildventures.co.ke/tours/${tour.slug}`,
        image: `https://wildventures.co.ke${tour.heroImage}`,
        touristType: tour.style,
        itinerary: tour.itinerary.map((day) => ({
          "@type": "TouristAttraction",
          name: day.title,
          description: day.description,
        })),
        offers: {
          "@type": "Offer",
          price: tour.price,
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `https://wildventures.co.ke/tours/${tour.slug}`,
          seller: {
            "@type": "TravelAgency",
            name: "WildVentures Safari Co.",
            url: "https://wildventures.co.ke",
          },
        },
        provider: {
          "@type": "TravelAgency",
          name: "WildVentures Safari Co.",
          url: "https://wildventures.co.ke",
          telephone: "+254780166113",
          email: "hello@wildventures.co",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Westlands Business Park",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
        },
        ...(tour.reviews.length > 0 && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: tour.reviews.length,
            bestRating: "5",
            worstRating: "1",
          },
          review: tour.reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: "5",
            },
            reviewBody: r.comment,
          })),
        }),
      },
      // Breadcrumb schema
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
            name: "Safari Tours",
            item: "https://wildventures.co.ke/tours",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tour.title,
            item: `https://wildventures.co.ke/tours/${tour.slug}`,
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
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
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
      {/* Inject JSON-LD schema into <head> */}
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
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6"
          >
            <Link href="/" className="hover:text-beige transition-colors">
              Home
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <Link href="/tours" className="hover:text-beige transition-colors">
              Tours
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-beige">{tour.title}</span>
          </nav>

          <div className="flex flex-wrap gap-3 mb-6">
            {tour.badge && (
              <span
                className={
                  tour.badgeStyle === "green" ? "badge-green" : "badge-orange"
                }
              >
                {tour.badge}
              </span>
            )}
            <span className="badge bg-white/15 text-white backdrop-blur-md border border-white/10">
              {tour.style}
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-light text-white leading-[1.1] max-w-4xl mb-8">
            {tour.title}
          </h1>

          <div className="flex flex-wrap gap-8 text-white/90 text-[0.85rem] font-medium tracking-wide uppercase">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange" />
              {tour.destination}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange" />
              Max {tour.maxGroup} people
            </span>
          </div>
        </div>
      </div>

      {/* ── Main content */}
      <div className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start max-w-7xl mx-auto">
          <div className="space-y-16">
            <div>
              <p className="section-label">Overview</p>
              <p className="text-[1.1rem] text-gray-600 leading-[1.85] font-light">
                {tour.summary}
              </p>
            </div>

            <div>
              <p className="section-label">Highlights</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((h) => (
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
              <p className="section-label">Day-by-Day Itinerary</p>
              <h2 className="section-title mb-8">
                Your Journey, <em>Day by Day</em>
              </h2>
              {/* SEO NOTE: Ensure ItineraryAccordion renders content server-side */}
              <ItineraryAccordion itinerary={tour.itinerary} />
            </div>

            <div>
              <p className="section-label">Wildlife Highlights</p>
              <div className="flex flex-wrap gap-3">
                {tour.wildlife.map((w) => (
                  <span
                    key={w}
                    className="bg-beige text-green text-[0.85rem] px-5 py-2.5 rounded-sm font-medium"
                  >
                    🐾 {w}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label">Accommodation</p>
              <div className="bg-beige/40 rounded-sm p-8 border border-beige/60">
                <h3 className="font-serif text-[1.4rem] text-charcoal mb-3">
                  {tour.accommodation}
                </h3>
                <p className="text-[0.95rem] text-gray-500 leading-[1.7] font-light">
                  {tour.accommodationDetails}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-beige">
              <div>
                <p className="section-label">What's Included</p>
                <ul className="space-y-3">
                  {tour.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9rem] text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-label">Not Included</p>
                <ul className="space-y-3">
                  {tour.excluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9rem] text-gray-600"
                    >
                      <XCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Reviews section (renders existing review data) */}
            {tour.reviews.length > 0 && (
              <div>
                <p className="section-label">Traveler Reviews</p>
                <h2 className="section-title mb-8">
                  What Our <em>Guests Say</em>
                </h2>
                <div className="space-y-6">
                  {tour.reviews.map((review, i) => (
                    <div
                      key={i}
                      className="bg-beige/40 rounded-sm p-8 border border-beige/60"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                          style={{ backgroundColor: review.color }}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal text-[0.95rem]">
                            {review.name}
                          </p>
                          <p className="text-gray-500 text-[0.8rem]">
                            {review.location}
                          </p>
                        </div>
                        <div className="ml-auto text-orange text-[0.9rem]">
                          {"★".repeat(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-[0.95rem] leading-[1.7] font-light italic">
                        &ldquo;{review.comment}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* ── FAQ Section */}
            <TourFAQ tour={tour} />
          </div>

          <aside className="sticky top-28">
            <BookingWidget tourTitle={tour.title} price={tour.price} />
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <div className="section-pad bg-beige/30">
          <div className="max-w-7xl mx-auto">
            <p className="section-label">You May Also Like</p>
            <h2 className="section-title mb-12">
              Similar <em>Experiences</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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