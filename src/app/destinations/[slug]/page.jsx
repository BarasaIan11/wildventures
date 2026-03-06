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

// FIX: params is a Promise
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  return { title: dest?.name || "Destination" };
}

// FIX: Component is async
export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) notFound();
  const tours = getToursByDest(dest.slug);

  return (
    <>
      {/* ── IMPROVED Hero */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          className="object-cover animate-hero-zoom"
          priority
        />

        {/* IMAGE FIX: Directional gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto pt-24">
          <nav className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6">
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
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight">
            {dest.flag} {dest.name}
          </h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 max-w-7xl mx-auto">
          {/* Main Content (Logic preserved) */}
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
                  <Calendar className="w-4 h-4 text-orange" /> Best Time to
                  Visit
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

            {/* Rest of content sections... */}
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
