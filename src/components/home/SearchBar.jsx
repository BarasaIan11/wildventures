"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

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

  const fieldClass = `
    flex-1 flex flex-col px-6 py-5 bg-white border-r border-gray-100
    cursor-pointer hover:bg-gray-50/80 transition-colors duration-200 min-w-[160px]
  `;
  const labelClass =
    "text-[0.65rem] text-green tracking-[0.12em] uppercase font-medium mb-1.5";
  const selectClass =
    "border-none outline-none font-sans text-[0.95rem] text-charcoal bg-transparent cursor-pointer w-full";

  return (
    <div className="bg-green px-[5%] py-8">
      <div
        className="flex items-stretch max-w-[940px] mx-auto
                      shadow-[0_12px_40px_rgba(0,0,0,0.18)] rounded-sm overflow-hidden"
      >
        <div className={fieldClass}>
          <label className={labelClass}>Destination</label>
          <select
            className={selectClass}
            value={dest}
            onChange={(e) => setDest(e.target.value)}
          >
            <option value="">All Destinations</option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d.toLowerCase()}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className={fieldClass}>
          <label className={labelClass}>Duration</label>
          <select
            className={selectClass}
            value={dur}
            onChange={(e) => setDur(e.target.value)}
          >
            <option value="">Any Duration</option>
            <option value="short">3–5 Days</option>
            <option value="medium">6–8 Days</option>
            <option value="long">9–14 Days</option>
          </select>
        </div>

        <div className={`${fieldClass} border-r-0`}>
          <label className={labelClass}>Travel Style</label>
          <select
            className={selectClass}
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="">Any Style</option>
            {STYLES.map((s) => (
              <option key={s} value={s.toLowerCase()}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="bg-orange text-white px-8 font-medium text-[0.85rem] tracking-[0.07em]
                     uppercase flex items-center gap-2.5 whitespace-nowrap flex-shrink-0
                     hover:bg-orange-dark transition-colors duration-300"
        >
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>
    </div>
  );
}
