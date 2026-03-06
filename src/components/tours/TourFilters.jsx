"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const DESTINATIONS = ["Kenya", "Tanzania", "Rwanda", "Uganda"];
const STYLES = ["Luxury", "Mid-Range", "Family", "Honeymoon"];

export default function TourFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const [dest, setDest] = useState(params.get("destination") || "");
  const [style, setStyle] = useState(params.get("style") || "");
  const [dur, setDur] = useState(params.get("duration") || "");

  const apply = () => {
    const p = new URLSearchParams();
    if (dest) p.set("destination", dest);
    if (style) p.set("style", style);
    if (dur) p.set("duration", dur);
    router.push(`/tours?${p.toString()}`);
  };
  const reset = () => {
    setDest("");
    setStyle("");
    setDur("");
    router.push("/tours");
  };

  const selectClass = `w-full border border-gray-200 rounded-sm px-3 py-2.5 text-[0.9rem]
    text-charcoal bg-white focus:outline-none focus:border-green transition-colors appearance-none cursor-pointer`;
  const labelClass =
    "block text-[0.7rem] tracking-[0.12em] uppercase text-green font-medium mb-1.5";

  return (
    <div className="bg-white rounded-sm shadow-card p-6 lg:sticky lg:top-24 z-10">
      <h3 className="font-serif text-[1.2rem] text-charcoal mb-5">
        Filter Safaris
      </h3>

      <div className="space-y-4">
        <div>
          <label className={labelClass}>Destination</label>
          <select
            className={selectClass}
            value={dest}
            onChange={(e) => setDest(e.target.value)}
          >
            <option value="">All Countries</option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d.toLowerCase()}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
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

        <div>
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
      </div>

      <button
        onClick={apply}
        className="btn btn-primary w-full text-center mt-5"
      >
        Apply Filters
      </button>
      <button
        onClick={reset}
        className="w-full text-center text-[0.8rem] text-gray-400 hover:text-orange mt-3 transition-colors"
      >
        Clear All
      </button>
    </div>
  );
}
