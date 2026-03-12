import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { getMainDestinations } from "@/data/destinations";

export default function TopDestinations() {
  // getMainDestinations() returns only featured: true — Kenya, Tanzania, Zanzibar
  const featured = getMainDestinations();

  // Kenya and Tanzania get large cards, Zanzibar gets a wide banner card
  const [kenya, tanzania, zanzibar] = featured;

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

      {/* 
        Layout: Kenya + Tanzania + Zanzibar side by side (large), 
        */}
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Row 1: Kenya + Tanzania + Zanzibar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RevealWrapper>
            <DestCard dest={kenya} tall />
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <DestCard dest={tanzania} tall />
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <DestCard dest={zanzibar} tall />
          </RevealWrapper>
        </div>

      </div>
    </section>
  );
}

// ── Tall portrait card (Kenya, Tanzania,Zanzibar)
function DestCard({ dest, tall }) {
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className={`group block relative rounded-sm overflow-hidden bg-charcoal ${
        tall ? "aspect-[3/4]" : "aspect-[3/4]"
      }`}
    >
      <Image
        src={dest.image}
        alt={`${dest.name} safari — ${dest.tagline}`}
        fill
        className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

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

      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 10h12M16 10l-5-5M16 10l-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}
