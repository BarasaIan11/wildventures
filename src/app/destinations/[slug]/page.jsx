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
export async function generateMetadata({ params }) {
  const dest = getDestinationBySlug(params.slug);
  return { title: dest?.name || "Destination" };
}

export default function DestinationDetailPage({ params }) {
  const dest = getDestinationBySlug(params.slug);
  if (!dest) notFound();
  const tours = getToursByDest(dest.slug);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          className="object-cover brightness-55"
          priority
        />
        <div className="relative z-10 px-[5%] pb-10 pt-24">
          <p className="text-white/55 text-[0.8rem] mb-2">
            <Link
              href="/destinations"
              className="hover:text-orange transition-colors"
            >
              Destinations
            </Link>
            <span className="mx-2">·</span>
            {dest.name}
          </p>
          <p className="text-orange text-[0.75rem] tracking-[0.15em] uppercase mb-2">
            {dest.tagline}
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight">
            {dest.flag} {dest.name}
          </h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Main */}
          <div className="space-y-10">
            <div>
              <p className="section-label">About {dest.name}</p>
              <p className="text-[1.05rem] text-gray-600 leading-[1.85]">
                {dest.description}
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-beige/40 rounded-sm p-5">
                <div className="flex items-center gap-2 text-green font-medium mb-2">
                  <Calendar className="w-4 h-4" /> Best Time to Visit
                </div>
                <p className="text-[0.9rem] text-gray-600">{dest.bestTime}</p>
              </div>
              <div className="bg-beige/40 rounded-sm p-5">
                <div className="flex items-center gap-2 text-green font-medium mb-2">
                  <Thermometer className="w-4 h-4" /> Climate
                </div>
                <p className="text-[0.9rem] text-gray-600">{dest.climate}</p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <p className="section-label">Must-See Highlights</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-[0.9rem] text-gray-600"
                  >
                    <span className="text-orange mt-0.5">✦</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wildlife */}
            <div>
              <p className="section-label">Wildlife You May See</p>
              <div className="flex flex-wrap gap-2">
                {dest.wildlife.map((w) => (
                  <span
                    key={w}
                    className="bg-beige text-green text-[0.82rem] px-4 py-2 rounded-sm font-medium"
                  >
                    🐾 {w}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: CTA */}
          <div className="space-y-5">
            <div className="bg-green rounded-sm p-7 text-white">
              <p className="font-serif text-[1.4rem] mb-3">
                Ready to visit {dest.name}?
              </p>
              <p className="text-white/65 text-[0.88rem] leading-relaxed mb-5">
                Our specialists know {dest.name} intimately. Let us craft your
                perfect itinerary.
              </p>
              <Link href="/plan" className="btn btn-primary block text-center">
                Plan My Trip
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline-white block text-center mt-3"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Tours in this destination */}
        {tours.length > 0 && (
          <div className="mt-16">
            <p className="section-label">{dest.name} Safaris</p>
            <h2 className="section-title mb-10">
              Recommended <em>Tours</em> in {dest.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
