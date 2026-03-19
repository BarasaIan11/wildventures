import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { getMainDestinations } from "@/data/destinations";

export default function TopDestinations() {
  const featured = getMainDestinations();

  return (
    <section className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
          <div>
            <RevealWrapper>
              <p className="section-label">Where to Go</p>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h2 className="section-title">
                Our East African<br />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((dest, i) => (
            <RevealWrapper key={dest.slug} delay={i * 0.1}>
              <DestCard dest={dest} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestCard({ dest }) {
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className="group block relative rounded-sm overflow-hidden bg-charcoal aspect-[3/4]"
    >
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Premium Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-orange text-[0.65rem] tracking-[0.25em] uppercase font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {dest.tagline}
        </p>
        <h3 className="font-serif font-light text-white text-[1.8rem] leading-tight mb-2">
          <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">
            {dest.flag}
          </span>
          {dest.name}
        </h3>
        <div className="overflow-hidden h-0 group-hover:h-6 transition-all duration-500 ease-in-out">
          <p className="text-white/60 text-[0.8rem] flex items-center gap-2 uppercase tracking-widest">
            <span className="w-4 h-px bg-orange" />
            {dest.tourCount} signature packages
          </p>
        </div>
      </div>

      {/* Floating Action Icon */}
      <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}