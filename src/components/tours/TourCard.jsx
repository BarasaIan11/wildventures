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
    maxGroup,
    price,
    image,
    summary,
  } = tour;

  return (
    <Link
      href={`/tours/${slug}`}
      className="group block bg-white rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100/50"
    >
      {/* 
          IMAGE FIX: 
          Standardized to aspect-[4/3]. This ensures that your 
          Serengeti landscapes and Gorilla portraits both look great.
      */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Glassmorphism Badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] backdrop-blur-md border border-white/20 text-white rounded-sm shadow-sm ${
                badgeStyle === "green" ? "bg-green/80" : "bg-orange/80"
              }`}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Subtle Bottom Gradient for the Image alone */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      </div>

      {/* Body Content */}
      <div className="p-7">
        {/* Meta Info with refined spacing */}
        <div className="flex items-center gap-4 mb-4 text-[0.7rem] uppercase tracking-widest text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-orange" /> {destination}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-200" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-orange" /> {duration}
          </span>
        </div>

        {/* Title - Clean Serif */}
        <h3 className="font-serif text-[1.45rem] text-charcoal leading-tight mb-3 group-hover:text-green transition-colors duration-300">
          {title}
        </h3>

        {/* Summary - Better line-height for luxury feel */}
        <p className="text-[0.9rem] text-gray-500 leading-relaxed line-clamp-2 mb-6 font-light">
          {summary}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-end pt-5 border-t border-gray-50">
          <div>
            <p className="text-[0.65rem] text-gray-400 uppercase tracking-widest mb-0.5">
              Price from
            </p>
            <p className="font-serif text-[1.3rem] text-charcoal leading-none">
              ${price.toLocaleString()}
              <span className="text-[0.75rem] font-sans text-gray-400 ml-1 font-normal">
                /pp
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-widest text-orange">
            <span className="group-hover:mr-1 transition-all">Details</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M4 10h12M16 10l-5-5M16 10l-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
