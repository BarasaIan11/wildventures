import Image from "next/image";
import DestinationCard from "@/components/destinations/DestinationCard";
import BookingCTA from "@/components/home/BookingCTA";
import { destinations } from "@/data/destinations";

export const metadata = { title: "Destinations" };

export default function DestinationsPage() {
  const [first, ...rest] = destinations;
  return (
    <>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-main.png"
          alt="African destinations"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 px-[5%] pb-10 pt-24">
          <p className="section-label light">Explore Africa</p>
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Where Would You Like to <em className="italic">Go?</em>
          </h1>
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
