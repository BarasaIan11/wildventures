import RevealWrapper from '@/components/shared/RevealWrapper'

const stats = [
  { num: '3,200+', label: 'Happy Travelers' },
  { num: '48+',    label: 'Safari Packages' },
  { num: '12',     label: 'Destinations' },
  { num: '4.9★',   label: 'Average Rating' },
]

export default function StatsBar() {
  return (
    <div className="bg-green py-11 px-[5%]">
      <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(({ num, label }, i) => (
          <RevealWrapper key={label} delay={i * 0.1}>
            <p className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-beige leading-none mb-1.5">
              {num.includes('★')
                ? <>{num.replace('★','')}<span className="text-orange">★</span></>
                : num.includes('+')
                ? <>{num.replace('+','')}<span className="text-orange">+</span></>
                : num
              }
            </p>
            <p className="text-[0.72rem] tracking-[0.12em] uppercase text-white/55">{label}</p>
          </RevealWrapper>
        ))}
      </div>
    </div>
  )
}
