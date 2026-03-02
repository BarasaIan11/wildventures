import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/shared/RevealWrapper'
import { testimonials } from '@/data/testimonials'

function StarRating({ n = 5 }) {
  return <p className="text-orange tracking-[3px] text-[0.85rem] mb-4">{'★'.repeat(n)}</p>
}

function TestimonialCard({ t, featured = false }) {
  return (
    <div className={`rounded-sm p-8 relative ${featured ? 'bg-green' : 'bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300'}`}>
      {/* Decorative quote */}
      <p className={`font-serif text-[4.5rem] leading-[0.7] mb-4 ${featured ? 'text-white/20' : 'text-beige'}`}>"</p>
      <p className={`font-serif italic text-[1.05rem] leading-[1.75] mb-5 ${featured ? 'text-beige' : 'text-charcoal'}`}>
        {t.text}
      </p>
      <StarRating n={t.rating} />
      <div className="flex items-center gap-3">
        <Image src={t.avatar} alt={t.name} width={44} height={44}
          className="w-11 h-11 rounded-full object-cover border-2 border-beige" />
        <div>
          <p className={`font-medium text-[0.9rem] ${featured ? 'text-white' : 'text-charcoal'}`}>{t.name}</p>
          <p className={`text-[0.78rem] ${featured ? 'text-white/55' : 'text-gray-400'}`}>{t.trip}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [feat, ...rest] = testimonials
  const shown = [rest[0], feat, rest[1]]  // order: regular, featured, regular

  return (
    <section className="section-pad bg-beige">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <div>
          <RevealWrapper><p className="section-label">Real Stories</p></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">Words From Our<br /><em>Travelers</em></h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={0.2}>
          <Link href="/reviews" className="link-arrow">Read All Reviews →</Link>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {shown.map((t, i) => (
          <RevealWrapper key={t.id} delay={i * 0.12}>
            <TestimonialCard t={t} featured={t.featured} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
