import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { getFeatured, getRegular } from "@/data/testimonials";

function Avatar({ initials, color, size = 44 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0 border-2 border-beige"
      style={{ width: size, height: size, backgroundColor: color }}
    >
      <span className="text-white font-medium text-[0.75rem] tracking-wide select-none">
        {initials}
      </span>
    </div>
  );
}

function StarRating({ n = 5 }) {
  return (
    <p className="text-orange tracking-[3px] text-[0.85rem] mb-4">
      {"★".repeat(n)}
    </p>
  );
}

function TestimonialCard({ t, featured = false }) {
  return (
    <div
      className={`rounded-sm p-8 h-full relative ${
        featured
          ? "bg-green"
          : "bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
      }`}
    >
      <p
        className={`font-serif text-[4.5rem] leading-[0.7] mb-4 ${featured ? "text-white/20" : "text-beige"}`}
      >
        "
      </p>
      <p
        className={`font-serif italic text-[1.05rem] leading-[1.75] mb-5 ${featured ? "text-beige" : "text-charcoal"}`}
      >
        {t.text}
      </p>
      <StarRating n={t.rating} />
      <div className="flex items-center gap-3">
        <Avatar initials={t.initials} color={t.color} />
        <div>
          <p
            className={`font-medium text-[0.9rem] ${featured ? "text-white" : "text-charcoal"}`}
          >
            {t.name}
          </p>
          <p
            className={`text-[0.78rem] ${featured ? "text-white/55" : "text-gray-400"}`}
          >
            {t.trip}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const feat = getFeatured();
 const regular = getRegular();
  const shown = feat
    ? [regular[0], feat, regular[1]].filter(Boolean)
    : regular.slice(0, 3);

  return (
    <section className="section-pad bg-beige">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <div>
          <RevealWrapper>
            <p className="section-label">Real Stories</p>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              Words From Our
              <br />
              <em>Travelers</em>
            </h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={0.2}>
          <Link href="/reviews" className="link-arrow">
            Read All Reviews →
          </Link>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {shown.map((t, i) => (
          <RevealWrapper key={t.id} delay={i * 0.12}>
            <TestimonialCard t={t} featured={t.featured} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
