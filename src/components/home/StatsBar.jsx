// src/components/home/StatsBar.jsx
import RevealWrapper from "@/components/shared/RevealWrapper";

const stats = [
  { num: "3,200", label: "Happy Travelers", suffix: "+" },
  { num: "48", label: "Safari Packages", suffix: "+" },
  { num: "12", label: "Destinations", suffix: "" },
  { num: "4.9", label: "Average Rating", suffix: "★" },
];

export default function StatsBar() {
  return (
    /* We use 'pt-24' to give the overlapping SearchBar space, and 'pb-24' for richness */
    <div className="bg-green pt-24 pb-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-[5%]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">
          {stats.map(({ num, label, suffix }, i) => (
            <RevealWrapper
              key={label}
              delay={i * 0.1}
              className={`flex flex-col items-center ${
                i !== stats.length - 1 ? "lg:border-r border-white/10" : ""
              }`}
            >
              <div className="text-center px-4">
                <div className="flex items-baseline justify-center mb-2">
                  <p className="font-serif text-[clamp(2.5rem,5vw,3.8rem)] text-white font-light leading-none tracking-tight">
                    {num}
                  </p>
                  <span className="text-orange text-2xl ml-1 font-bold">
                    {suffix}
                  </span>
                </div>
                <p className="text-[0.72rem] tracking-[0.25em] uppercase text-beige font-semibold opacity-90">
                  {label}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
