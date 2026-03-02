import Link from 'next/link'
import RevealWrapper from '@/components/shared/RevealWrapper'

export default function BookingCTA() {
  return (
    <section className="relative py-28 px-[5%] bg-green text-center overflow-hidden">
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(196,122,44,0.18) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 20% 30%, rgba(0,0,0,0.25) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-[640px] mx-auto">
        <RevealWrapper>
          <p className="section-label light justify-center">Start Your Journey</p>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-title white">
            Your African Adventure<br /><em>Begins Here</em>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="section-sub !text-white/65 mx-auto mb-10">
            Talk to our safari specialists today. Tell us your dream — we'll craft
            the experience of a lifetime, down to the last detail.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.3}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/plan" className="btn btn-primary">Plan My Safari</Link>
            <Link href="/contact" className="btn btn-outline-white">Talk to an Expert</Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
