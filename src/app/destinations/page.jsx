import Image from "next/image";
import DestinationCard from "@/components/destinations/DestinationCard";
import BookingCTA from "@/components/home/BookingCTA";
import { destinations } from "@/data/destinations";

export const metadata = { title: "Destinations | WildVentures" };

export default function DestinationsPage() {
  // We'll treat all 4 destinations as a premium collection
  const [kenya, tanzania, rwanda, uganda] = destinations;

  return (
    <main className="bg-ivory">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[65vh] min-h-[520px] flex items-center overflow-hidden bg-charcoal">
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

          <p className="text-white/80 mt-6 text-[1.1rem] font-light max-w-md leading-relaxed">
            From the endless plains of the Serengeti to the mist-covered peaks
            of Rwanda. Discover the soul of East Africa.
          </p>
        </div>
      </div>

      {/* --- DESTINATIONS GRID --- */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="section-label">The Collection</p>
          <h2 className="section-title italic text-green">Our Focus Regions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <DestinationCard dest={kenya} />
          <DestinationCard dest={tanzania} />
          <DestinationCard dest={rwanda} />
          <DestinationCard dest={uganda} />
        </div>

        <div className="mt-16 text-center">
          <p className="text-[0.8rem] text-gray-400 tracking-[0.2em] uppercase font-medium">
            Specializing Exclusively in East Africa
          </p>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
