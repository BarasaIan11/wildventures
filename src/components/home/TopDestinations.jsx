import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { destinations } from "@/data/destinations";

export default function TopDestinations() {
  // We use the first 4 destinations
  const [kenya, tanzania, rwanda, uganda] = destinations;

  return (
    <section className="section-pad bg-ivory">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14 max-w-7xl mx-auto">
        <div>
          <RevealWrapper>
            <p className="section-label">Where to Go</p>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              Our East African
              <br />
              <em>Destinations</em>
            </h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={0.2}>
          <Link href="/destinations" className="link-arrow">
            View All Destinations →
          </Link>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <RevealWrapper>
          <DestCard dest={kenya} />
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <DestCard dest={tanzania} />
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <DestCard dest={rwanda} />
        </RevealWrapper>
        <RevealWrapper delay={0.3}>
          <DestCard dest={uganda} />
        </RevealWrapper>
      </div>

      <RevealWrapper delay={0.3}>
        <p className="text-center text-[0.75rem] text-gray-400 tracking-[0.2em] uppercase mt-12">
          Specialising exclusively in East Africa — Kenya · Tanzania · Rwanda ·
          Uganda
        </p>
      </RevealWrapper>
    </section>
  );
}

function DestCard({ dest }) {
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className="group block relative rounded-sm overflow-hidden bg-charcoal aspect-[3/4.5] sm:aspect-[3/4]"
    >
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-orange text-[0.65rem] tracking-[0.2em] uppercase font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {dest.tagline}
        </p>
        <h3 className="font-serif font-light text-white text-[1.6rem] leading-tight mb-2">
          <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">
            {dest.flag}
          </span>
          {dest.name}
        </h3>

        <div className="overflow-hidden h-0 group-hover:h-5 transition-all duration-500 ease-in-out">
          <p className="text-white/60 text-[0.75rem] flex items-center gap-2 uppercase tracking-widest">
            {dest.tourCount} Packages
          </p>
        </div>
      </div>

      {/* Floating Arrow for luxury feel */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M4 10h12M16 10l-5-5M16 10l-5 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
