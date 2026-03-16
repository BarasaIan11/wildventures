import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import BookingCTA from "@/components/home/BookingCTA";
import { 
  Leaf, ShieldCheck, Compass, Heart, Award, 
  Map, Sun, Users, Plane, Car, Sparkles 
} from "lucide-react";

export const metadata = {
  title: "About Zafronix Safaris — East Africa's Premier Safari Operator",
  description: "Bespoke and luxurious safari experiences. Discover how we combine modern comfort with the wild beauty of Africa.",
};

const services = [
  {
    icon: Map,
    title: "Wildlife Safaris",
    desc: "Bespoke expeditions across Kenya, Tanzania, Uganda, and beyond, led by expert naturalists.",
  },
  {
    icon: Sparkles,
    title: "Luxury & Honeymoons",
    desc: "Private, intimate journeys designed for comfort and timeless romance in the heart of the wild.",
  },
  {
    icon: Sun,
    title: "Beach Holidays",
    desc: "Coastal escapes to Zanzibar, Diani, and the Seychelles—where the savanna meets the sea.",
  },
  {
    icon: Users,
    title: "Group & Corporate Travel",
    desc: "Seamlessly orchestrated team-building retreats and large group expeditions with local expertise.",
  },
  {
    icon: Plane,
    title: "Flight & Hotel Bookings",
    desc: "Hassle-free reservations at the most exclusive lodges and international flight coordination.",
  },
  {
    icon: Car,
    title: "Transfers & Visa Assistance",
    desc: "End-to-end support including private airport transfers and comprehensive visa guidance.",
  },
];

const philosophy = [
  {
    icon: Compass,
    title: "Deep Local Roots",
    desc: "We don't just operate in East Africa; we belong here. Our expertise is built on decades of navigating these plains, ensuring you see the wild through the eyes of those who call it home.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Standards",
    desc: "From the location of our camps to the knowledge of our guides, we maintain a level of quality that is non-negotiable. If it isn't extraordinary, it isn't WildVentures.",
  },
  {
    icon: Heart,
    title: "Bespoke Connection",
    desc: "We believe the best journeys are personal. We craft every itinerary from a blank page, tailored to your individual spirit and sense of adventure.",
  },
  {
    icon: Leaf,
    title: "A Conscious Legacy",
    desc: "The wild is our heritage. We fund the front-line protection of wildlife and support local community growth through every booking we take.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ── 1. HERO SECTION */}
      <div className="relative h-[75vh] min-h-[600px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/about-hero.png"
          alt="Zafronix Safaris Heritage"
          fill
          priority
          className="object-cover scale-105 animate-hero-zoom opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <RevealWrapper>
              <p className="section-label light">Our Story</p>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] font-light text-white leading-[1.05] mb-6">
                Experience Africa <br />
                <span className="italic font-normal text-beige">Beyond Travel</span>
              </h1>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p className="text-white/80 text-[1.1rem] leading-relaxed max-w-xl font-light">
                A premier boutique operator offering bespoke and luxurious safari experiences. 
                Where innovation meets timeless adventure.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* ── 2. OUR STORY (Professional Narrative) */}
      <section className="section-pad bg-ivory/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealWrapper className="relative aspect-[4/5] lg:aspect-auto lg:h-[650px]">
            <Image
              src="/images/about/story-main.png"
              alt="The WildVentures experience"
              fill
              className="object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green p-10 text-white shadow-card hidden xl:block border border-white/10">
               <p className="font-serif text-5xl mb-1 italic">15+</p>
               <p className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-beige opacity-80">Years of Excellence</p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <p className="section-label">Our Story</p>
            <h2 className="font-serif text-[3.5rem] text-green-dark leading-[1.1] mb-10">
              Born from a Love of <br /><span className="italic font-normal">This Vast Land</span>
            </h2>
            <div className="space-y-8 text-[1.1rem] text-gray-500 leading-relaxed font-light">
              <p>
                WildVentures is a premier, Kenya-based operator offering bespoke and luxurious safari and travel experiences across the continent. Our journey began over fifteen years ago with a simple belief: that travel, when done right, can transform the soul.
              </p>
              <p>
                Today, we lead the industry where innovation meets timeless adventure. We specialize in combining modern comforts and professional expertise with the raw, untamed beauty of the African bush. From the first river crossing to the final sunset, every detail is orchestrated to ensure your journey is seamless.
              </p>
              <p className="border-l-2 border-orange/30 pl-8 italic text-charcoal">
                We don't just show you Africa; we curate a profound connection to the land, its people, and its wildlife.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── 3. OUR SERVICES (New Section from Flyer) */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper className="mb-20">
            <p className="section-label">Our Expertise</p>
            <h2 className="font-serif text-[3rem] text-green-dark">Premier Travel Services</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <RevealWrapper key={service.title} delay={i * 0.1}>
                  <div className="group">
                    <div className="w-12 h-12 rounded-sm bg-ivory flex items-center justify-center mb-6 group-hover:bg-orange transition-all duration-500">
                      <Icon size={22} className="text-green group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-[1.5rem] text-charcoal mb-4">{service.title}</h3>
                    <p className="text-[0.95rem] text-gray-500 leading-relaxed font-light">{service.desc}</p>
                  </div>
                </RevealWrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. THE PHILOSOPHY (Minimalist) */}
      <section className="section-pad bg-ivory/20 border-t border-beige/40">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper className="mb-20">
            <p className="section-label">The WildVentures Difference</p>
            <h2 className="font-serif text-[3rem] text-green-dark">What We Stand For</h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {philosophy.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealWrapper key={item.title} delay={i * 0.1}>
                  <div className="flex gap-8 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full border border-beige flex items-center justify-center group-hover:bg-green group-hover:border-green transition-all duration-500">
                        <Icon size={24} className="text-orange group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-[1.6rem] text-charcoal mb-3 group-hover:text-green transition-colors">{item.title}</h3>
                      <p className="text-[1rem] text-gray-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </RevealWrapper>
              )
            })}
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}