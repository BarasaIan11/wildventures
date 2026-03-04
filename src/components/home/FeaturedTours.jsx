import Link from "next/link";
import TourCard from "@/components/tours/TourCard";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { getFeaturedTours } from "@/data/tours";

export default function FeaturedTours() {
  const tours = getFeaturedTours();
  return (
    <section className="section-pad bg-ivory">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <div>
          <RevealWrapper>
            <p className="section-label">Featured Safaris</p>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              Handpicked <em>Experiences</em>
              <br />
              For Every Traveler
            </h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={0.2}>
          <Link href="/tours" className="link-arrow">
            View All Tours →
          </Link>
        </RevealWrapper>
      </div>

      {/* Grid: first card spans 2 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, i) => (
          <RevealWrapper
            key={tour.id}
            delay={i * 0.1}
            className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
          >
            <TourCard tour={tour} featured={i === 0} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
