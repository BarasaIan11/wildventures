import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata = {
  title: "About Us — Our Story, Mission & Values",
  description:
    "WildVentures was born from a deep love of East Africa. Learn our story, our people, and our commitment to conservation.",
};

const milestones = [
  {
    year: "2009",
    title: "The Beginning",
    desc: "James Mwangi leads his first private safari out of Nairobi with a single Land Cruiser and an unshakeable belief that travel done right can change people — and protect wildlife.",
  },
  {
    year: "2013",
    title: "Tanzania Opens",
    desc: "WildVentures expands into Tanzania, establishing partnerships with the finest camps in the Serengeti and Ngorongoro. Our first gorilla trek into Rwanda follows that same year.",
  },
  {
    year: "2017",
    title: "Conservation Fund Launched",
    desc: "We formalise our commitment by launching the WildVentures Conservation Fund — pledging 3% of every booking to community ranger programmes and anti-poaching initiatives.",
  },
  {
    year: "2020",
    title: "Pearl of Africa",
    desc: "Uganda joins our portfolio. Despite the challenges of that year, we use the quiet time to deepen community relationships in Bwindi and Kibale — emerging stronger.",
  },
  {
    year: "2024",
    title: "A New Chapter",
    desc: "Over 3,200 guests from 60 countries. 15 years. The same guides. The same love for this land. We are just getting started.",
  },
];

const values = [
  {
    icon: "🌿",
    title: "Conservation First",
    desc: "Every safari we run directly funds ranger salaries, anti-poaching patrols, and wildlife corridors. The animals you come to see are protected — in part — by your visit.",
  },
  {
    icon: "🤝",
    title: "Community at the Heart",
    desc: "We hire locally, source locally, and ensure tourism money stays in the communities surrounding the parks. When local people benefit from wildlife, they protect it.",
  },
  {
    icon: "✦",
    title: "Uncompromising Quality",
    desc: "We personally inspect every lodge, vet every guide, and test every route. We will never recommend something we have not experienced ourselves.",
  },
  {
    icon: "🧭",
    title: "Deep Local Knowledge",
    desc: "Our guides are not just trained — they grew up here. They know the secret waterholes, the trees leopards prefer, the hour when the cheetah hunts. That is the difference.",
  },
  {
    icon: "♻️",
    title: "Responsible Travel",
    desc: "Low-impact camping, carbon offset partnerships, single-use plastic bans at all our camps. We believe the next generation deserves the same Africa we fell in love with.",
  },
  {
    icon: "💛",
    title: "Lifelong Relationships",
    desc: "More than 40% of our guests return within three years. We are not a booking platform — we are your safari family, for life.",
  },
];

const team = [
  {
    name: "James Mwangi",
    role: "Founder & Lead Naturalist",
    tag: "🇰🇪 Nairobi, Kenya",
    initials: "JM",
    color: "bg-green",
    bio: "Born in the shadow of Mount Kenya, James has spent 20 years guiding across East Africa. His encyclopaedic knowledge of animal behaviour has made him one of the region's most respected naturalists.",
  },
  {
    name: "Amina Hassan",
    role: "Head of Safari Operations",
    tag: "🇹🇿 Arusha, Tanzania",
    initials: "AH",
    color: "bg-orange",
    bio: 'Amina has orchestrated thousands of seamless safaris across Tanzania and Kenya. Her obsessive attention to detail is why guests say every WildVentures trip "just works".',
  },
  {
    name: "Emmanuel Kagabo",
    role: "Rwanda & Uganda Specialist",
    tag: "🇷🇼 Kigali, Rwanda",
    initials: "EK",
    color: "bg-charcoal",
    bio: "Emmanuel grew up near Volcanoes National Park and tracked his first gorilla family at 14. Today he leads our primate experiences with unmatched intimacy and expertise.",
  },
  {
    name: "Grace Nakimuli",
    role: "Guest Experience Manager",
    tag: "🇺🇬 Kampala, Uganda",
    initials: "GN",
    color: "bg-green-dark",
    bio: "Grace ensures every guest feels personally looked after — from the first enquiry email to the farewell transfer. Her warmth is the soul of the WildVentures experience.",
  },
];

const conservation = [
  { num: "3%", label: "of every booking donated to conservation" },
  { num: "120+", label: "community rangers co-funded annually" },
  { num: "4", label: "anti-poaching partnerships active" },
  { num: "$280K", label: "contributed to wildlife programmes since 2017" },
];

const partners = [
  "Kenya Wildlife Service",
  "Tanzania National Parks",
  "Rwanda Development Board",
  "Uganda Wildlife Authority",
  "African Wildlife Foundation",
  "Big Life Foundation",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO */}
      <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/about-hero.png"
          alt="WildVentures safari guide in the bush"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="relative z-10 px-[5%] pb-14 pt-24 max-w-4xl">
          <RevealWrapper>
            <p className="section-label light">Our Story</p>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light text-white leading-[1.05] mb-5">
              We Live for the
              <br />
              <em className="italic text-beige">Moment of Encounter</em>
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="text-white/70 text-[1rem] leading-relaxed max-w-xl">
              WildVentures was not built in a boardroom. It was built around
              campfires, beneath acacia trees, on the edge of the Mara River —
              by people who believe East Africa is the greatest place on earth.
            </p>
          </RevealWrapper>
        </div>
      </div>

      {/* ── FOUNDING STORY */}
      <section className="section-pad bg-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <RevealWrapper className="relative h-[500px]">
            <Image
              src="/images/about/story-main.png"
              alt="East African safari landscape"
              width={560}
              height={400}
              className="absolute top-0 right-0 w-[82%] h-[75%] object-cover rounded-sm"
            />
            <Image
              src="/images/about/story-accent.png"
              alt="Wildebeest migration"
              width={340}
              height={280}
              className="absolute bottom-0 left-0 w-[55%] h-[48%] object-cover rounded-sm
                         border-[6px] border-ivory shadow-card-hover"
            />
            <div
              className="absolute bottom-[44%] right-[-10px] lg:right-[-30px]
                            bg-orange text-white px-5 py-4 text-center rounded-sm
                            shadow-orange hidden sm:block"
            >
              <p className="font-serif text-[2rem] font-semibold leading-none">
                15+
              </p>
              <p className="text-[0.7rem] tracking-wide opacity-90 mt-1">
                Years in
                <br />
                the Wild
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <p className="section-label">How It All Started</p>
            <h2 className="section-title">
              Born From a Love of
              <br />
              <em>This Land</em>
            </h2>
            <div className="space-y-4 text-[0.95rem] text-gray-500 leading-[1.85]">
              <p>
                In 2009, James Mwangi — a young guide from Nyeri, Kenya — packed
                everything he owned into a second-hand Land Cruiser and drove to
                the Masai Mara with one guest: a retired schoolteacher from
                Edinburgh who had dreamed of Africa her whole life.
              </p>
              <p>
                She cried at her first river crossing. James knew, watching her,
                that this was not just a job. This was the most important thing
                he would ever do.
              </p>
              <p>
                Fifteen years later, WildVentures has taken over 3,200 people
                from 60 countries into East Africa's greatest wild places. The
                Land Cruiser has been replaced by a fleet. The team has grown.
                But every safari still begins the same way — with a guide who
                genuinely loves the land, and a guest about to have their life
                changed.
              </p>
            </div>
            <Link href="/tours" className="btn btn-primary mt-8 inline-block">
              Start Your Story
            </Link>
          </RevealWrapper>
        </div>
      </section>

      {/* ── MISSION */}
      <section className="bg-green py-20 px-[5%] text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(196,122,44,0.12) 0%, transparent 65%)",
          }}
        />
        <RevealWrapper className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label light justify-center">Our Mission</p>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-light text-white leading-[1.3] mb-6">
            "To connect people with the wild heart of East Africa — and in doing
            so, inspire a generation of conservationists."
          </h2>
          <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-xl mx-auto">
            Every safari we run is built on three pillars: an extraordinary
            experience for the guest, a fair livelihood for the local community,
            and a measurable contribution to wildlife conservation. If we cannot
            deliver all three, we do not run the trip.
          </p>
        </RevealWrapper>
      </section>

      {/* ── TIMELINE */}
      <section className="section-pad bg-ivory">
        <div className="max-w-4xl mx-auto">
          <RevealWrapper className="text-center mb-16">
            <p className="section-label justify-center">Our Journey</p>
            <h2 className="section-title">
              Fifteen Years in the
              <br />
              <em>Making</em>
            </h2>
          </RevealWrapper>
          <div className="relative">
            <div
              className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-beige-dark
                            md:-translate-x-px hidden sm:block"
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <RevealWrapper key={m.year} delay={i * 0.1}>
                  <div
                    className={`flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div
                      className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                    >
                      <span
                        className="inline-block bg-beige text-green text-[0.7rem] tracking-[0.15em]
                                       uppercase font-medium px-3 py-1 rounded-sm mb-3"
                      >
                        {m.year}
                      </span>
                      <h3 className="font-serif text-[1.3rem] text-charcoal mb-2">
                        {m.title}
                      </h3>
                      <p className="text-[0.9rem] text-gray-500 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                    <div className="hidden md:flex w-14 flex-shrink-0 justify-center items-start pt-1">
                      <div className="w-4 h-4 rounded-full bg-orange border-4 border-ivory shadow-[0_0_0_2px_#C47A2C]" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES */}
      <section className="section-pad bg-beige/50">
        <RevealWrapper className="text-center mb-14">
          <p className="section-label justify-center">What We Stand For</p>
          <h2 className="section-title">
            Our Values Are Not
            <br />
            <em>Negotiable</em>
          </h2>
          <p className="section-sub mx-auto text-center mt-2">
            These are not marketing words. They are the principles we apply to
            every decision, every booking, and every morning we drive into the
            bush.
          </p>
        </RevealWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <RevealWrapper key={v.title} delay={(i % 3) * 0.1}>
              <div
                className="bg-white rounded-sm p-7 h-full hover:-translate-y-1
                              hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-beige flex items-center justify-center text-xl mb-5">
                  {v.icon}
                </div>
                <h3 className="font-serif text-[1.15rem] text-charcoal mb-3">
                  {v.title}
                </h3>
                <p className="text-[0.88rem] text-gray-500 leading-[1.75]">
                  {v.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── CONSERVATION */}
      <section className="section-pad bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/conservation.png"
            alt="Conservation"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealWrapper>
              <p className="section-label light">Conservation Impact</p>
              <h2 className="section-title white">
                Every Booking
                <br />
                <em>Protects the Wild</em>
              </h2>
              <div className="space-y-4 text-[0.93rem] text-white/60 leading-[1.85] mb-8">
                <p>
                  We established the WildVentures Conservation Fund in 2017 with
                  a simple, non-negotiable pledge: 3% of every booking goes
                  directly to conservation and community projects in the parks
                  where we operate.
                </p>
                <p>
                  Not to a central charity. Not to an offsetting scheme.
                  Directly — to the rangers, the community schools, the wildlife
                  corridors, and the anti-poaching units that keep East Africa
                  wild.
                </p>
                <p>
                  We publish our annual impact report every January. We believe
                  accountability is part of the commitment.
                </p>
              </div>
              <a href="#" className="btn btn-outline-white inline-block">
                Read Our Impact Report
              </a>
            </RevealWrapper>
            <RevealWrapper delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {conservation.map(({ num, label }) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded-sm p-6
                                             hover:bg-white/10 transition-colors duration-300"
                  >
                    <p className="font-serif text-[2.4rem] text-orange font-light leading-none mb-2">
                      {num}
                    </p>
                    <p className="text-[0.8rem] text-white/55 leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[0.7rem] tracking-[0.15em] uppercase text-white/35 mb-4">
                  Conservation Partners
                </p>
                <div className="flex flex-wrap gap-2">
                  {partners.map((p) => (
                    <span
                      key={p}
                      className="text-[0.78rem] text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── TEAM */}
      <section className="section-pad bg-ivory">
        <RevealWrapper className="text-center mb-14">
          <p className="section-label justify-center">The People Behind It</p>
          <h2 className="section-title">
            Meet the
            <br />
            <em>WildVentures Team</em>
          </h2>
          <p className="section-sub mx-auto text-center mt-2">
            Born and raised across East Africa, our team brings together decades
            of bush experience, deep cultural knowledge, and an infectious love
            for this land.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <RevealWrapper key={member.name} delay={i * 0.1}>
              <div
                className="group bg-white rounded-sm overflow-hidden shadow-card
                              hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"
              >
                {/* Avatar — initials placeholder until real photos added */}
                <div
                  className={`aspect-[3/4] ${member.color} flex items-center justify-center
                                  relative overflow-hidden`}
                >
                  <span className="font-serif text-[4rem] text-white/30 select-none">
                    {member.initials}
                  </span>
                  {/* subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* country flag bottom */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-white/60 text-[0.72rem] tracking-widest uppercase">
                      {member.tag}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-serif text-[1.1rem] text-charcoal mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-[0.75rem] text-green font-medium tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-[0.83rem] text-gray-400 leading-[1.7]">
                    {member.bio}
                  </p>
                  {/* Photo placeholder note */}
                  <p className="text-[0.7rem] text-orange/60 mt-3 italic">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── CREDENTIALS */}
      <section className="section-pad bg-beige/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealWrapper>
            <p className="section-label">Why Trust WildVentures</p>
            <h2 className="section-title">
              A Company Built on
              <br />
              <em>Reputation</em>
            </h2>
            <p className="section-sub mb-8">
              We have never spent a shilling on advertising. Every guest we have
              ever had came through a recommendation, a review, or a return
              visit. That is the only metric that matters to us.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "🏆",
                  text: "Rated #1 Safari Operator in East Africa — TripAdvisor 2023",
                },
                {
                  icon: "✅",
                  text: "Fully licensed by Kenya Tourism Board & Tanzania Tourist Board",
                },
                {
                  icon: "🌍",
                  text: "Member — African Safari Operators Association",
                },
                {
                  icon: "💚",
                  text: "Certified Eco-Tourism operator — ESOK (Ecotourism Society of Kenya)",
                },
                {
                  icon: "⭐",
                  text: "4.9 / 5 average rating across 347 verified reviews",
                },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
                  <p className="text-[0.9rem] text-gray-600 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <div className="relative">
              <Image
                src="/images/about/trust.png"
                alt="Safari in East Africa"
                width={600}
                height={440}
                className="w-full object-cover rounded-sm shadow-card-hover"
              />
              <div
                className="absolute -bottom-6 -left-6 bg-green text-white p-7
                              max-w-[280px] rounded-sm shadow-[0_16px_48px_rgba(0,0,0,0.2)]
                              hidden md:block"
              >
                <p className="font-serif text-[0.95rem] italic leading-relaxed text-beige mb-4">
                  "We don't sell holidays. We deliver moments people carry for
                  the rest of their lives."
                </p>
                <p className="text-[0.75rem] text-white/60">
                  — James Mwangi, Founder
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
