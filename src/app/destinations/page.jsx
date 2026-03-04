import Image from "next/image";
import DestinationCard from "@/components/destinations/DestinationCard";
import BookingCTA from "@/components/home/BookingCTA";
import { destinations } from "@/data/destinations";

export const metadata = { title: "Destinations | WildVentures" };

export default function DestinationsPage() {
  const [first, ...rest] = destinations;
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/destinations-hero.png"
          alt="African destinations"
          fill
          priority
          className="object-cover animate-hero-zoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <p className="section-label light">Explore Africa</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1] max-w-3xl">
            Discover Legendary <br />
            <em className="italic text-beige">Destinations</em>
          </h1>

          <p className="text-white/80 mt-6 text-[1.05rem] font-light max-w-md leading-relaxed">
            From the endless plains of the Serengeti to the mist-covered peaks
            of Rwanda. Discover the soul of East Africa.
          </p>
        </div>
      </div>

      <section className="section-pad">
        {/* Featured large */}
        <div className="mb-4">
          <DestinationCard dest={first} large />
        </div>
        {/* Grid of rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((d) => (
            <DestinationCard key={d.id} dest={d} />
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
