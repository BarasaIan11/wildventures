import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users } from "lucide-react";

export default function TourCard({ tour }) {
  const {
    slug,
    badge,
    badgeStyle,
    title,
    destination,
    duration,
    image,
    summary,
  } = tour;

  return (
    <Link
      href={`/tours/${slug}`}
      className="group block bg-white rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] backdrop-blur-md border border-white/20 text-white rounded-sm shadow-sm ${badgeStyle === "green" ? "bg-green/80" : "bg-orange/80"
                }`}
            >
              {badge}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      </div>

      {/* Body */}
      <div className="p-7 text-center">
        <div className="flex items-center justify-center gap-4 mb-4 text-[0.7rem] uppercase tracking-widest text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-orange" /> {destination}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-200" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-orange" /> {duration}
          </span>
        </div>

        <h3 className="font-serif text-[1.45rem] text-charcoal leading-tight mb-3 group-hover:text-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[0.9rem] text-gray-500 leading-relaxed line-clamp-2 mb-6 font-light">
          {summary}
        </p>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-50 flex justify-center">
          <div className="flex items-center gap-3 text-[0.8rem] font-bold uppercase tracking-[0.25em] text-orange group-hover:gap-5 transition-all">
            <span>View Journey</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
