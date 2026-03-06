import Image from "next/image";
import BookingCTA from "@/components/home/BookingCTA";
import { testimonials } from "@/data/testimonials";

export const metadata = { title: "Traveler Reviews | WildVentures" };

function Avatar({ initials, color, size = 44 }) {
  return (
    <div
    aria-hidden="true"
      className="rounded-full flex items-center justify-center flex-shrink-0 border-2 border-beige"
      style={{ width: size, height: size, backgroundColor: color }}
    >
      <span className="text-white font-medium text-[0.75rem] tracking-wide select-none">
        {initials}
      </span>
    </div>
  );
}

function StarRating({ n = 5, size = "normal" }) {
  return (
    <p
      className={`text-orange tracking-[3px] ${size === "large" ? "text-xl" : "text-sm"}`}
    >
      {"★".repeat(n)}
    </p>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/reviews-hero.png"
          alt="Happy travelers on safari"
          fill
          priority
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <p className="section-label light">Traveler Stories</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1]">
            Real People, <br />
            Real <em className="italic text-beige">Adventures</em>
          </h1>
          <p className="text-white/80 mt-6 text-[1.05rem] font-light max-w-md leading-relaxed">
            The best part of our job is hearing about the moments that stayed
            with you long after the dust of the savanna settled.
          </p>
        </div>
      </div>

      <section className="section-pad pt-20">
        {/* Summary stats  */}
        <div className="bg-green rounded-sm p-8 md:p-10 mb-14 text-center md:text-left shadow-card">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:border-r border-white/20 md:pr-10 flex-shrink-0">
              <p className="font-serif text-[4rem] text-white font-light leading-none">
                4.9
              </p>
              <StarRating n={5} size="large" />
              <p className="text-white/60 text-[0.8rem] mt-1 uppercase tracking-wider">
                out of 5 stars
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { num: testimonials.length.toString(), label: "Verified Reviews" },
                { num: "98%", label: "Would Recommend" },
                { num: "15+", label: "Years of Excellence" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-serif text-[2.2rem] text-beige font-light leading-none">
                    {num}
                  </p>
                  <p className="text-white/55 text-[0.78rem] tracking-wide uppercase mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-sm p-8 transition-transform duration-300 hover:-translate-y-1 ${t.featured ? "bg-green text-white" : "bg-white shadow-card"}`}
            >
              <p
                className={`font-serif text-[3.5rem] leading-[0.7] mb-4 ${t.featured ? "text-beige/30" : "text-beige"}`}
              >
                "
              </p>
              <p
                className={`font-serif italic text-[1.05rem] leading-[1.8] mb-6 ${t.featured ? "text-beige" : "text-charcoal"}`}
              >
                {t.text}
              </p>
              <StarRating n={t.rating} />
              <div className="flex items-center gap-3 mt-4">
                <Avatar initials={t.initials} color={t.color} />
                <div>
                  <p
                    className={`font-medium text-[0.95rem] ${t.featured ? "text-white" : "text-charcoal"}`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[0.8rem] ${t.featured ? "text-white/60" : "text-gray-400"}`}
                  >
                    {t.location}
                  </p>
                  <p
                    className={`text-[0.75rem] font-medium tracking-wide uppercase mt-0.5 ${t.featured ? "text-orange" : "text-orange"}`}
                  >
                    {t.trip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 border-t border-beige pt-12 text-center">
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-green font-semibold mb-8">
            Verified on trusted platforms
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
            {[
              "TripAdvisor",
              "Google Reviews",
              "Safari Bookings",
              "Trustpilot",
            ].map((p) => (
              <p
                key={p}
                className="font-serif italic text-[1.4rem] text-charcoal"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10">
        <BookingCTA />
      </div>
    </>
  );
}
