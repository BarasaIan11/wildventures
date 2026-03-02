import Image from 'next/image'
import Link from 'next/link'

export default function DestinationCard({ dest, large = false }) {
  return (
    <Link href={`/destinations/${dest.slug}`}
      className="group block relative rounded-sm overflow-hidden cursor-pointer">
      <Image
        src={dest.image}
        alt={dest.name}
        width={large ? 800 : 500}
        height={large ? 500 : 300}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]
                    ${large ? 'min-h-[340px]' : 'min-h-[220px]'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent
                      group-hover:from-green/75 transition-all duration-400" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white/70 text-[0.72rem] tracking-[0.1em] uppercase mb-1">{dest.tagline}</p>
        <h3 className={`font-serif font-light text-white ${large ? 'text-[1.8rem]' : 'text-[1.3rem]'}`}>
          {dest.flag} {dest.name}
        </h3>
        <p className="text-white/60 text-[0.75rem] mt-1">{dest.tourCount} packages available</p>
      </div>
    </Link>
  )
}
