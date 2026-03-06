// src/components/home/SearchBar.jsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, MapPin, Calendar, Compass, ChevronDown } from "lucide-react";

const DESTINATIONS = ["Kenya", "Tanzania", "Rwanda", "Uganda"];
const STYLES = ["Luxury", "Mid-Range", "Family", "Honeymoon"];

export default function SearchBar() {
  const router = useRouter();
  const [dest, setDest] = useState("");
  const [dur, setDur] = useState("");
  const [style, setStyle] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (dest) params.set("destination", dest);
    if (dur) params.set("duration", dur);
    if (style) params.set("style", style);
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <div className="relative z-30 w-full px-[5%] -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100">
          {/* Destination */}
          <div className="flex-1 px-8 py-6 border-b lg:border-b-0 lg:border-r border-gray-100 group">
            <label className="text-[0.65rem] text-orange tracking-[0.2em] uppercase font-bold mb-2 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Destination
            </label>
            <div className="relative">
              <select
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                className="appearance-none border-none outline-none font-serif italic text-[1.15rem] text-charcoal bg-transparent w-full cursor-pointer pr-8"
              >
                <option value="">All Regions</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d.toLowerCase()}>
                    {d}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
            </div>
          </div>

          {/* Duration */}
          <div className="flex-1 px-8 py-7 border-r border-gray-100 group hover:bg-ivory/30 transition-colors">
            <label className="text-[0.65rem] text-orange tracking-[0.2em] uppercase font-bold mb-2 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" /> Duration
            </label>
            <div className="relative">
              <select
                value={dur}
                onChange={(e) => setDur(e.target.value)}
                className="appearance-none border-none outline-none font-serif italic text-[1.15rem] text-charcoal bg-transparent w-full cursor-pointer pr-8"
              >
                <option value="">Any Length</option>
                <option value="short">Short (3–5 Days)</option>
                <option value="medium">Medium (6–8 Days)</option>
                <option value="long">Long (9–14 Days)</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
            </div>
          </div>

          {/* Style */}
          <div className="flex-1 px-8 py-7 border-r border-gray-100 group hover:bg-ivory/30 transition-colors">
            <label className="text-[0.65rem] text-orange tracking-[0.2em] uppercase font-bold mb-2 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" /> Travel Style
            </label>
            <div className="relative">
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="appearance-none border-none outline-none font-serif italic text-[1.15rem] text-charcoal bg-transparent w-full cursor-pointer pr-8"
              >
                <option value="">Any Style</option>
                {STYLES.map((s) => (
                  <option key={s} value={s.toLowerCase()}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
            </div>
          </div>

          {/* Search Button - Increased authoritativeness */}
          <button
            onClick={handleSearch}
            className="bg-green text-white px-14 py-8 md:py-0 font-medium text-[0.9rem] tracking-[0.25em] uppercase flex items-center justify-center gap-3 hover:bg-green-dark transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
