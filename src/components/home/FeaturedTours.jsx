import Link from "next/link";
import TourCard from "@/components/tours/TourCard";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { getFeaturedTours } from "@/data/tours";

export default function FeaturedTours() {
  const tours = getFeaturedTours().slice(0, 3); // Take the top 3 for a perfect row

  return (
    <section className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header - Aligned to the max-width container */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
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

        {/* 
          FIXED GRID: 
          Consistent 3-column layout. No more 'Tetris' look. 
          Every safari gets equal importance.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <RevealWrapper key={tour.id} delay={i * 0.1}>
              <TourCard tour={tour} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
