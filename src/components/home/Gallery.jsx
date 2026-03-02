import Image from 'next/image'
import RevealWrapper from '@/components/shared/RevealWrapper'

const images = [
  { src:'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80', alt:'Elephants at sunset', tall:true },
  { src:'https://images.unsplash.com/photo-1518715308788-3005759c61c3?w=600&q=80', alt:'Lion pride' },
  { src:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', alt:'Savanna at dusk' },
  { src:'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=700&q=80', alt:'Giraffe portrait', tall:true },
  { src:'https://images.unsplash.com/photo-1571988840298-3b5301d5109b?w=600&q=80', alt:'Zebra herd' },
  { src:'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=600&q=80', alt:'Mountain gorilla' },
]

export default function Gallery() {
  return (
    <section className="bg-charcoal py-20">
      <div className="px-[5%] mb-10">
        <RevealWrapper>
          <p className="section-label">Moments in the Wild</p>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-title white">A Glimpse of What <em>Awaits</em></h2>
        </RevealWrapper>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {images.map((img, i) => (
          <RevealWrapper
            key={i}
            delay={i * 0.07}
            className={img.tall ? 'md:row-span-2' : ''}
          >
            <div className="group relative overflow-hidden h-full cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.tall ? 580 : 280}
                className={`w-full object-cover transition-all duration-700
                            group-hover:scale-[1.06] group-hover:brightness-110
                            ${img.tall ? 'min-h-[300px] md:min-h-[460px]' : 'min-h-[180px] md:min-h-[220px]'}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-green/30 transition-all duration-400
                              flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                                 transition-all duration-300">⊕</span>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
