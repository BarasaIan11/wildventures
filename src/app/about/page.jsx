import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import BookingCTA from "@/components/home/BookingCTA";
import { Leaf, Users, ShieldCheck, Compass, Globe, Heart } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "About WildVentures — East Africa's Premier Safari Company",
  description:
    "WildVentures has guided 3,200+ travellers from 60 countries across Kenya, Tanzania & Zanzibar since 2009. Meet our team, our story & our conservation mission.",
  keywords: [
    "about WildVentures",
    "Kenya safari company",
    "East Africa safari operator",
    "responsible safari company",
    "wildlife conservation safari",
    "Nairobi safari company",
    "best safari company Kenya Tanzania",
  ],
  alternates: {
    canonical: "https://wildventures.co.ke/about",
  },
  openGraph: {
    title: "About WildVentures — East Africa's Premier Safari Company",
    description:
      "Born from a love of East Africa. WildVentures has guided 3,200+ travellers from 60 countries since 2009. Learn our story, our team & our conservation commitment.",
    url: "https://wildventures.co.ke/about",
    siteName: "WildVentures Safari Co.",
    images: [
      {
        url: "https://wildventures.co.ke/images/hero/about-hero.png",
        width: 1200,
        height: 630,
        alt: "WildVentures safari guide in the East African bush",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WildVentures — East Africa's Premier Safari Company",
    description:
      "Born from a love of East Africa. 3,200+ travellers guided since 2009. Learn our story & conservation mission.",
    images: ["https://wildventures.co.ke/images/hero/about-hero.png"],
    site: "@WildVentures",
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD SCHEMA — TravelAgency + AboutPage
// ─────────────────────────────────────────────────────────────
function AboutSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://wildventures.co.ke",
        name: "WildVentures Safari Co.",
        url: "https://wildventures.co.ke",
        logo: "https://wildventures.co.ke/icons/logo.png",
        description:
          "WildVentures is East Africa's premier safari company, specialising in tailor-made Kenya, Tanzania and Zanzibar safari experiences since 2009.",
        foundingDate: "2009",
        founder: {
          "@type": "Person",
          name: "James Mwangi",
          jobTitle: "Founder & Lead Naturalist",
        },
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 15,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Westlands Business Park",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        telephone: "+254780166113",
        email: "hello@wildventures.co",
        priceRange: "$$$",
        areaServed: ["Kenya", "Tanzania", "Zanzibar", "Rwanda", "Uganda"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "3200",
          bestRating: "5",
        },
        sameAs: [
          "https://wa.me/254780166113",
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://wildventures.co.ke/about",
        url: "https://wildventures.co.ke/about",
        name: "About WildVentures — Our Story, Mission & Values",
        description:
          "Learn about WildVentures — East Africa's premier safari company. Our story, team, conservation fund and values.",
        isPartOf: { "@id": "https://wildventures.co.ke" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://wildventures.co.ke",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://wildventures.co.ke/about",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE DATA
// ─────────────────────────────────────────────────────────────
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
    icon: Leaf,
    title: "Conservation First",
    desc: "Every safari we run directly funds ranger salaries and wildlife corridors. The animals you see are protected by your visit.",
  },
  {
    icon: Users,
    title: "Community at the Heart",
    desc: "We hire and source locally, ensuring tourism money stays in the bush. When local people benefit from wildlife, they protect it.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    desc: "We personally inspect every lodge and test every route. We never recommend an experience we haven't lived ourselves.",
  },
  {
    icon: Compass,
    title: "Deep Local Knowledge",
    desc: "Our guides didn't just train here; they grew up here. They know the secret waterholes and the leopard's favorite trees.",
  },
  {
    icon: Globe,
    title: "Responsible Travel",
    desc: "From carbon offsets to plastic-free camps, we believe the next generation deserves the same Africa we fell in love with.",
  },
  {
    icon: Heart,
    title: "Lifelong Relationships",
    desc: "More than 40% of our guests return. We aren't a booking platform; we are your safari family for life.",
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

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* Inject JSON-LD schema */}
      <AboutSchema />

      {/* ── HERO */}
      <div className="relative h-[70vh] min-h-[520px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/about-hero.png"
          alt="WildVentures safari guide leading guests through the East African bush"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <RevealWrapper>
              <p className="section-label light">Our Story</p>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-[1.05] mb-6">
                We Live for the
                <br />
                <span className="italic font-normal text-beige">
                  Moment of Encounter
                </span>
              </h1>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p className="text-white/80 text-[1.1rem] leading-relaxed max-w-xl font-light">
                WildVentures was not built in a boardroom. It was built around
                campfires, beneath acacia trees, on the edge of the Mara River —
                by people who believe East Africa is the greatest place on
                earth.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* ── FOUNDING STORY */}
      <section className="section-pad bg-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <RevealWrapper className="relative h-[500px]">
            <Image
              src="/images/about/story-main.png"
              alt="East African safari landscape at golden hour"
              width={560}
              height={400}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute top-0 right-0 w-[82%] h-[75%] object-cover rounded-sm shadow-card"
            />
            <Image
              src="/images/about/story-accent.png"
              alt="Wildebeest migration crossing the Mara River"
              width={340}
              height={280}
              sizes="(max-width: 1024px) 55vw, 28vw"
              className="absolute bottom-0 left-0 w-[55%] h-[48%] object-cover rounded-sm border-[6px] border-ivory shadow-card-hover"
            />
            <div className="absolute bottom-[44%] right-[-10px] lg:right-[-30px] bg-orange text-white px-5 py-4 text-center rounded-sm shadow-orange hidden sm:block">
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
                the Maasai Mara with one guest: a retired schoolteacher from
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
      <section className="bg-green py-24 px-[5%] text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(196,122,44,0.12) 0%, transparent 65%)",
          }}
        />
        <RevealWrapper className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label light justify-center">Our Mission</p>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-light text-white leading-[1.3] mb-8">
            "To connect people with the wild heart of East Africa — and in doing
            so, inspire a generation of conservationists."
          </h2>
          <p className="text-white/60 text-[1rem] leading-relaxed max-w-xl mx-auto font-light">
            Every safari we run is built on three pillars: an extraordinary
            experience for the guest, a fair livelihood for the local community,
            and a measurable contribution to wildlife conservation.
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
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-beige-dark md:-translate-x-px hidden sm:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <RevealWrapper key={m.year} delay={i * 0.1}>
                  <div
                    className={`flex gap-6 md:gap-0 items-start ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        i % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12"
                      }`}
                    >
                      <span className="inline-block bg-beige text-green text-[0.7rem] tracking-[0.15em] uppercase font-medium px-3 py-1 rounded-sm mb-3">
                        {m.year}
                      </span>
                      <h3 className="font-serif text-[1.4rem] text-charcoal mb-2">
                        {m.title}
                      </h3>
                      <p className="text-[0.95rem] text-gray-500 leading-relaxed font-light">
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
      <section className="section-pad bg-beige/20 border-y border-beige/40">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-orange" />
              <p className="section-label !mb-0">Our Philosophy</p>
              <span className="w-8 h-px bg-orange" />
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-green-dark leading-tight mb-6">
              Our Values Are Not <br />
              <span className="italic font-normal text-green">Negotiable</span>
            </h2>
            <p className="text-gray-500 text-[1rem] leading-relaxed max-w-2xl mx-auto font-light">
              These are not marketing words. They are the principles we apply to
              every decision and every morning we drive into the bush.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <RevealWrapper key={v.title} delay={i * 0.1}>
                  <div className="group relative">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="w-12 h-12 rounded-sm bg-white flex items-center justify-center shadow-sm border border-beige group-hover:bg-green group-hover:border-green transition-all duration-500">
                        <Icon
                          size={22}
                          className="text-orange group-hover:text-white transition-colors"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-serif text-[1.4rem] text-charcoal leading-none group-hover:text-green transition-colors">
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-[0.92rem] text-gray-500 leading-relaxed font-light pl-0 md:pl-2">
                      {v.desc}
                    </p>
                    <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-orange/20 group-hover:bg-orange transition-all duration-500 hidden md:block" />
                  </div>
                </RevealWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONSERVATION */}
      <section className="section-pad bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/conservation.png"
            alt="Wildlife conservation in East Africa — rangers protecting the savanna"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealWrapper>
              <p className="section-label light">Conservation Impact</p>
              <h2 className="section-title white">
                Every Booking
                <br />
                <em className="text-green-light">Protects the Wild</em>
              </h2>
              <div className="space-y-4 text-[0.93rem] text-white/70 leading-[1.85] mb-8">
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
                  We are deeply committed to accountability. That's why we
                  meticulously track the impact of every safari, ensuring your
                  journey makes a real difference in the lives of local
                  communities and the preservation of wildlife.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {conservation.map(({ num, label }) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-colors duration-300"
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
        <RevealWrapper className="text-center mb-16">
          <p className="section-label justify-center">The People Behind It</p>
          <h2 className="section-title">
            Meet the
            <br />
            <em>WildVentures Team</em>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <RevealWrapper key={member.name} delay={i * 0.1}>
              <div className="group bg-white rounded-sm overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300">
                <div
                  className={`aspect-[3/4] ${member.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="font-serif text-[5rem] text-white/20 select-none">
                    {member.initials}
                  </span>
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <span className="text-white/40 text-[0.7rem] tracking-[0.2em] uppercase font-medium">
                      {member.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[1.2rem] text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[0.75rem] text-orange font-semibold tracking-wider uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-[0.88rem] text-gray-500 leading-[1.7] font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}