import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { Star } from "lucide-react";

const platforms = [
  {
    name: "TripAdvisor",
    title: "TripAdvisor Experiences",
    desc: "Read the stories of our WildVentures travelers on TripAdvisor and get inspired for your own unforgettable safari.",
    rating: "4.9/5",
    logo: "https://www.tripadvisor.com/img/cdsi/langs/en/tripadvisor_logo_transp_500x125-44413-1.png",
    link: "#", // Replace with your link
  },
  {
    name: "Google Reviews",
    title: "Google Experiences",
    desc: "Discover what our travelers have to say about their safari with WildVentures. Let their stories inspire your next adventure.",
    rating: "5.0/5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    link: "#", // Replace with your link
  },
  {
    name: "Safari Bookings",
    title: "Safari Bookings Stories",
    desc: "Explore reviews from our travelers on SafariBookings and see why WildVentures is a top choice for safari enthusiasts.",
    rating: "5.0/5",
    logo: "https://www.safaribookings.com/img/logo/logo.svg",
    link: "#", // Replace with your link
  }
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-beige">
      <div className="max-w-7xl mx-auto">

        {/* --- Header --- */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <RevealWrapper>
              <div className="flex items-center gap-3 mb-4">
                <p className="section-label ">Guest Feedback</p>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h2 className="section-title text-green-dark">
                Trusted by Travelers <br />
                <span className="italic font-normal text-green">Around the Globe</span>
              </h2>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={0.2}>
            <Link href="/blogs" className="link-arrow">
              Explore Our Blog →
            </Link>
          </RevealWrapper>
        </div>

        {/* --- Platform Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((p, i) => (
            <RevealWrapper key={p.name} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-500">

                <h3 className="font-serif text-[1.8rem] text-charcoal mb-4 group-hover:text-green transition-colors">
                  {p.title}
                </h3>

                <p className="text-[0.95rem] text-gray-500 font-light leading-relaxed mb-10 flex-grow">
                  {p.desc}
                </p>
                <div className="pt-8 border-t border-gray-50 mt-auto">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="h-6 relative">
                        <img src={p.logo} alt={p.name} className="h-full object-contain" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[0.9rem] font-bold text-charcoal">{p.rating}</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill="#C47A2C" color="#C47A2C" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      className="text-[0.75rem] font-bold uppercase tracking-widest text-orange flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read all reviews <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}