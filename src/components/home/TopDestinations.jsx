import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { destinations } from "@/data/destinations";

export default function TopDestinations() {
  const [kenya, tanzania, rwanda, uganda] = destinations;

  return (
    <section className="section-pad bg-ivory">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
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
            Explore All →
          </Link>
        </RevealWrapper>
      </div>

      {/*
        Layout:
        ┌──────────────┬──────────────┐
        │    Kenya     │   Tanzania   │  ← both large, span 2 rows each side
        │  (featured)  │  (featured)  │
        ├──────┬───────┴──────────────┘
        │Rwanda│  Uganda              │  ← smaller bottom row
        └──────┴──────────────────────┘
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Kenya — large, spans 2 rows on lg */}
        <RevealWrapper className="lg:col-span-2 lg:row-span-2">
          <DestCard dest={kenya} tall />
        </RevealWrapper>

        {/* Tanzania — large, spans 2 rows on lg */}
        <RevealWrapper delay={0.1} className="lg:col-span-2 lg:row-span-2">
          <DestCard dest={tanzania} tall />
        </RevealWrapper>

        {/* Rwanda */}
        <RevealWrapper delay={0.2} className="lg:col-span-2">
          <DestCard dest={rwanda} />
        </RevealWrapper>

        {/* Uganda */}
        <RevealWrapper delay={0.3} className="lg:col-span-2">
          <DestCard dest={uganda} />
        </RevealWrapper>
      </div>

      {/* Bottom tagline */}
      <RevealWrapper delay={0.3}>
        <p className="text-center text-[0.82rem] text-gray-400 tracking-wide mt-8">
          Specialising exclusively in East Africa — Kenya · Tanzania · Rwanda ·
          Uganda
        </p>
      </RevealWrapper>
    </section>
  );
}

function DestCard({ dest, tall = false }) {
  // Use a relative wrapper so the Image can fill and maintain cover
  // Remove explicit width/height to avoid Next.js's intrinsic size
  // which was causing the grey gap when the container grew larger than
  // the calculated aspect ratio. Instead we control the aspect ratio
  // with Tailwind's `aspect-` utilities and let the image `fill`.
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className="group block relative rounded-sm overflow-hidden h-full"
    >
      {/* container for aspect ratio */}
      <div
        className={`relative w-full h-full transition-transform duration-700 group-hover:scale-[1.05]
            ${tall ? "aspect-[800/520] min-h-[280px] md:min-h-[360px]" : "aspect-[600/280] min-h-[200px] md:min-h-[230px]"}`}
      >
        <Image src={dest.image} alt={dest.name} fill className="object-cover" />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent
                      group-hover:from-green/80 group-hover:via-green/20 transition-all duration-500"
      />
      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-orange text-[0.7rem] tracking-[0.12em] uppercase mb-1">
          {dest.tagline}
        </p>
        <h3
          className={`font-serif font-light text-white mb-1 ${tall ? "text-[1.9rem]" : "text-[1.4rem]"}`}
        >
          {dest.flag} {dest.name}
        </h3>
        <p className="text-white/60 text-[0.75rem]">
          {dest.tourCount} packages available
        </p>
      </div>
      {/* Hover arrow */}
      <div
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 border border-white/30
                      flex items-center justify-center text-white
                      opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300"
      >
        →
      </div>
    </Link>
  );
}
