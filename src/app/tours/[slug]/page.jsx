import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users, CheckCircle, XCircle } from "lucide-react";
import ItineraryAccordion from "@/components/tours/ItineraryAccordion";
import BookingWidget from "@/components/shared/BookingWidget";
import TourCard from "@/components/tours/TourCard";
import { getTourBySlug, tours } from "@/data/tours";

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}
export async function generateMetadata({ params }) {
  const tour = getTourBySlug(params.slug);
  return { title: tour?.title || "Tour Not Found" };
}

export default function TourDetailPage({ params }) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const related = tours
    .filter(
      (t) =>
        t.slug !== tour.slug &&
        t.destinationSlugs.some((d) => tour.destinationSlugs.includes(d)),
    )
    .slice(0, 2);

  return (
    <>
      {/* ── Hero Gallery */}
      <div className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          className="object-cover brightness-60"
          priority
        />
        <div className="relative z-10 px-[5%] pb-10 pt-24 w-full">
          {/* Breadcrumb */}
          <p className="text-white/55 text-[0.8rem] mb-3">
            <Link href="/" className="hover:text-orange transition-colors">
              Home
            </Link>
            <span className="mx-2">·</span>
            <Link href="/tours" className="hover:text-orange transition-colors">
              Tours
            </Link>
            <span className="mx-2">·</span>
            <span className="text-white">{tour.title}</span>
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            {tour.badge && (
              <span
                className={
                  tour.badgeStyle === "green" ? "badge-green" : "badge-orange"
                }
              >
                {tour.badge}
              </span>
            )}
            <span className="badge bg-white/15 text-white">{tour.style}</span>
          </div>
          <h1 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-light text-white leading-tight max-w-3xl">
            {tour.title}
          </h1>
          <div className="flex flex-wrap gap-5 mt-4 text-white/75 text-[0.85rem]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {tour.destination}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              Max {tour.maxGroup} people
            </span>
          </div>
        </div>
      </div>

      {/* ── Main content + sticky sidebar */}
      <div className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          {/* Left column */}
          <div className="space-y-12">
            {/* Overview */}
            <div>
              <p className="section-label">Overview</p>
              <p className="text-[1.05rem] text-gray-600 leading-[1.8]">
                {tour.summary}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <p className="section-label">Highlights</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[0.9rem] text-gray-600"
                  >
                    <span className="text-orange mt-0.5">✦</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div>
              <p className="section-label">Day-by-Day Itinerary</p>
              <h2 className="section-title mb-6">
                Your Journey, <em>Day by Day</em>
              </h2>
              <ItineraryAccordion itinerary={tour.itinerary} />
            </div>

            {/* Wildlife */}
            <div>
              <p className="section-label">Wildlife Highlights</p>
              <div className="flex flex-wrap gap-2.5">
                {tour.wildlife.map((w) => (
                  <span
                    key={w}
                    className="bg-beige text-green text-[0.82rem] px-4 py-2 rounded-sm font-medium"
                  >
                    🐾 {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Accommodation */}
            <div>
              <p className="section-label">Accommodation</p>
              <div className="bg-beige/40 rounded-sm p-6">
                <h3 className="font-medium text-charcoal mb-2">
                  {tour.accommodation}
                </h3>
                <p className="text-[0.88rem] text-gray-500 leading-[1.7]">
                  {tour.accommodationDetails}
                </p>
              </div>
            </div>

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="section-label">What&apos;s Included</p>
                <ul className="space-y-2">
                  {tour.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.88rem] text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-label">Not Included</p>
                <ul className="space-y-2">
                  {tour.excluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.88rem] text-gray-600"
                    >
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            {tour.reviews.length > 0 && (
              <div>
                <p className="section-label">Guest Reviews</p>
                <div className="space-y-4">
                  {tour.reviews.map((r, i) => (
                    <div
                      key={i}
                      className="bg-white shadow-card rounded-sm p-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Image
                          src={r.avatar}
                          alt={r.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-[0.9rem]">{r.name}</p>
                          <p className="text-orange text-[0.8rem]">
                            {"★".repeat(r.rating)}
                          </p>
                        </div>
                      </div>
                      <p className="font-serif italic text-[0.95rem] text-gray-600 leading-relaxed">
                        &quot;{r.comment}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <div>
            <BookingWidget tourTitle={tour.title} price={tour.price} />
          </div>
        </div>
      </div>

      {/* Related tours */}
      {related.length > 0 && (
        <div className="section-pad bg-beige/40">
          <p className="section-label">You May Also Like</p>
          <h2 className="section-title mb-10">
            Similar <em>Experiences</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
