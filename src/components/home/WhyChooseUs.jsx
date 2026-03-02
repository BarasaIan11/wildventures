import Image from 'next/image'
import RevealWrapper from '@/components/shared/RevealWrapper'

const features = [
  { icon: '🧭', title: 'Expert Local Guides', desc: "Born and raised in the wild — naturalists, trackers, and storytellers who bring Africa's bush to life." },
  { icon: '✦',  title: 'Fully Tailored Itineraries', desc: 'No two safaris are the same. We design yours around your pace, interests, and dream experiences.' },
  { icon: '🌿', title: 'Sustainable & Responsible Travel', desc: 'We partner with eco-certified lodges and community conservation projects — your adventure gives back.' },
  { icon: '🛡', title: 'End-to-End Support', desc: 'From visa advice to airport transfers, we are with you every step of the journey.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-green">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Image stack */}
        <RevealWrapper className="relative h-[420px] md:h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=700&q=80"
            alt="Expert safari guide"
            width={560} height={440}
            className="absolute top-0 right-0 w-4/5 h-4/5 object-cover rounded-sm"
          />
          <Image
            src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=400&q=80"
            alt="Luxury tented camp"
            width={320} height={280}
            className="absolute bottom-0 left-0 w-[52%] h-[52%] object-cover rounded-sm
                       border-[6px] border-green shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
          />
          {/* Years badge */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4
                          bg-orange text-white px-5 py-4 text-center rounded-sm
                          shadow-[0_8px_24px_rgba(196,122,44,0.4)]
                          hidden lg:block">
            <p className="font-serif text-[1.8rem] font-semibold leading-none">15+</p>
            <p className="text-[0.7rem] tracking-[0.08em] mt-1 opacity-90 leading-tight">Years of<br />Excellence</p>
          </div>
        </RevealWrapper>

        {/* Content */}
        <RevealWrapper delay={0.15}>
          <p className="section-label light">Why WildVentures</p>
          <h2 className="section-title white">
            Crafted with <em>Care,</em><br />Delivered with Passion
          </h2>
          <p className="section-sub !text-white/60 mb-8">
            We go beyond booking tours. Every journey is personally designed to connect
            you with Africa's most breathtaking moments.
          </p>

          <div className="space-y-5">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20
                                flex items-center justify-center text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-white font-medium mb-1">{title}</p>
                  <p className="text-[0.85rem] text-white/55 leading-[1.65]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
