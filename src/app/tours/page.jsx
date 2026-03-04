import { Suspense } from "react";
import Image from "next/image";
import TourCard from "@/components/tours/TourCard";
import TourFilters from "@/components/tours/TourFilters";
import BookingCTA from "@/components/home/BookingCTA";
import { tours } from "@/data/tours";

export const metadata = { title: "Safari Tours" };

function ToursContent({ destination, style, duration }) {
  let filtered = [...tours];
  if (destination)
    filtered = filtered.filter((t) => t.destinationSlugs.includes(destination));
  if (style) filtered = filtered.filter((t) => t.style.toLowerCase() === style);
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

export default async function ToursPage({ searchParams }) {
  const params = await searchParams;
  const { destination, style, duration } = params;
  return (
    <>
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/tours-hero.png"
          alt="Safari tours"
          fill
          priority
          className="object-cover animate-hero-zoom"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <p className="section-label light">Our Safari Collection</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1]">
            Find Your Perfect <em className="italic text-beige">Safari</em>
          </h1>
          <p className="text-white/80 mt-4 text-[1rem] max-w-md leading-relaxed">
            From the Great Migration to gorilla trekking. Explore our handpicked
            expeditions across East Africa.
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
