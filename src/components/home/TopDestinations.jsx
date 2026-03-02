import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/shared/RevealWrapper'
import { getFeaturedDestinations } from '@/data/destinations'

export default function TopDestinations() {
  const destinations = getFeaturedDestinations()
  return (
    <section className="section-pad bg-ivory">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <div>
          <RevealWrapper><p className="section-label">Where to Go</p></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">Top <em>Destinations</em><br />We Love</h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={0.2}>
          <Link href="/destinations" className="link-arrow">Explore All →</Link>
        </RevealWrapper>
      </div>

      {/*
        Grid layout:
        ┌──────────────┬──────┬──────┐
        │              │  2   │  3   │
        │      1       ├──────┼──────┤
        │  (span 2r)   │  4   │  5   │
        └──────────────┴──────┴──────┘
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-3">
        {destinations.map((dest, i) => (
          <RevealWrapper
            key={dest.id}
            delay={i * 0.08}
            className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
          >
            <Link href={`/destinations/${dest.slug}`} className="group block relative rounded-sm overflow-hidden h-full">
              <Image
                src={dest.image}
                alt={dest.name}
                width={i === 0 ? 800 : 500}
                height={i === 0 ? 520 : 250}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]
                  ${i === 0 ? 'min-h-[360px] md:min-h-[460px]' : 'min-h-[200px] md:min-h-[220px]'}`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent
                              group-hover:from-green/75 group-hover:via-green/20 transition-all duration-400" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className={`font-serif font-light text-white mb-0.5 ${i===0?'text-[2rem]':'text-[1.3rem]'}`}>
                  {dest.name}
                </h3>
                <p className="text-[0.75rem] text-white/65 tracking-wide">{dest.tourCount} Safari Packages</p>
              </div>
              {/* Arrow */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 border border-white/30
                              flex items-center justify-center text-white text-sm
                              opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                              transition-all duration-300">
                →
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
