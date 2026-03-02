import Image from "next/image";
import BookingCTA from "@/components/home/BookingCTA";
import { testimonials } from "@/data/testimonials";

export const metadata = { title: "Traveler Reviews" };

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
  const totalReviews = 347;
  const avgRating = 4.9;

  return (
    <>
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1800&q=80"
          alt="Happy travelers"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 px-[5%] pb-10 pt-24">
          <p className="section-label light">Traveler Stories</p>
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Real People, Real <em className="italic">Adventures</em>
          </h1>
        </div>
      </div>

      <section className="section-pad">
        {/* Summary stats */}
        <div className="bg-green rounded-sm p-8 md:p-10 mb-14 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:border-r border-white/20 md:pr-10 flex-shrink-0">
              <p className="font-serif text-[4rem] text-white font-light leading-none">
                {avgRating}
              </p>
              <StarRating n={5} size="large" />
              <p className="text-white/60 text-[0.8rem] mt-1">out of 5 stars</p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                {
                  num: totalReviews.toLocaleString(),
                  label: "Verified Reviews",
                },
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

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-sm p-7 ${t.featured ? "bg-green" : "bg-white shadow-card"}`}
            >
              <p
                className={`font-serif text-[3.5rem] leading-[0.7] mb-4 ${t.featured ? "text-white/20" : "text-beige"}`}
              >
                &quot;
              </p>
              <p
                className={`font-serif italic text-[1rem] leading-[1.8] mb-5 ${t.featured ? "text-beige" : "text-charcoal"}`}
              >
                {t.text}
              </p>
              <StarRating n={t.rating} />
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border-2 border-beige"
                />
                <div>
                  <p
                    className={`font-medium text-[0.9rem] ${t.featured ? "text-white" : "text-charcoal"}`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[0.78rem] ${t.featured ? "text-white/55" : "text-gray-400"}`}
                  >
                    {t.location}
                  </p>
                  <p
                    className={`text-[0.75rem] ${t.featured ? "text-orange" : "text-orange/80"}`}
                  >
                    {t.trip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 bg-beige/50 rounded-sm p-8 text-center">
          <p className="text-[0.75rem] tracking-[0.15em] uppercase text-green font-medium mb-6">
            Verified on trusted platforms
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            {[
              "TripAdvisor",
              "Google Reviews",
              "Safari Bookings",
              "Trustpilot",
            ].map((p) => (
              <p key={p} className="font-medium text-[1.1rem]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
