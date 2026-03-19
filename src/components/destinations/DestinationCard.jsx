import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ dest, large = false }) {
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className={`group block relative rounded-sm overflow-hidden cursor-pointer bg-charcoal
        ${large ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[3/4]"}`}
    >
      {/* 
          FIX: Using 'fill' instead of fixed width/height. 
          The parent container now controls the size via aspect-ratio. 
      */}
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        sizes={large ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
      />

      {/* 
          IMAGE TREATMENT:
          A sophisticated 'scrim' (gradient) that stays dark at the bottom 
          for text, but keeps the animals/landscape bright at the top.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle green tint on hover to give that 'Zafronix Safaris' brand feel */}
      <div className="absolute inset-0 bg-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-beige font-medium">
            {dest.tagline}
          </span>
        </div>

        <h3
          className={`font-serif font-light text-white leading-tight ${large ? "text-[2rem] md:text-[3rem]" : "text-[1.5rem]"}`}
        >
          <span className="opacity-80 grayscale group-hover:grayscale-0 transition-all mr-2">
            {dest.flag}
          </span>
          {dest.name}
        </h3>

        <div className="overflow-hidden h-0 group-hover:h-6 transition-all duration-500 ease-in-out">
          <p className="text-white/70 text-[0.8rem] mt-2 flex items-center gap-2">
            <span className="w-4 h-px bg-orange" />
            {dest.tourCount} signature packages
          </p>
        </div>
      </div>
    </Link>
  );
}
