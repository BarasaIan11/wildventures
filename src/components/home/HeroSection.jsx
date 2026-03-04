import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#1a2e22]">
        <Image
          src="/images/hero/hero-main.png"
          alt="African elephants at golden hour"
          fill
          priority
          className="object-cover opacity-60 animate-hero-zoom"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — stronger at top so navbar reads clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

      {/* Atmospheric warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 55%, rgba(196,122,44,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Content — mt-20 clears the fixed navbar (80px) */}
      <div className="relative z-10 text-center px-5 max-w-[860px] mt-20">
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-3 mb-6"
          style={{ animation: "fadeUp 0.8s 0.2s both" }}
        >
          <span className="block w-8 h-px bg-orange flex-shrink-0" />
          <p className="text-beige/90 text-[0.72rem] tracking-[0.2em] uppercase whitespace-nowrap">
            East Africa's Premier Safari Company
          </p>
          <span className="block w-8 h-px bg-orange flex-shrink-0" />
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-[clamp(2.8rem,7.5vw,6rem)] font-light text-white leading-[1.05] tracking-tight mb-6"
          style={{ animation: "fadeUp 0.8s 0.4s both" }}
        >
          Experience Africa's
          <br />
          <em className="italic text-beige">Wild Beauty</em>
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/80 text-[clamp(0.92rem,2vw,1.1rem)] font-light max-w-[500px] mx-auto leading-[1.75] mb-10"
          style={{ animation: "fadeUp 0.8s 0.6s both" }}
        >
          Curated safari experiences crafted for those who seek the
          extraordinary — where every sunrise reveals a new story.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{ animation: "fadeUp 0.8s 0.8s both" }}
        >
          <Link href="/tours" className="btn btn-primary">
            Book Your Safari
          </Link>
          <Link href="/tours" className="btn btn-outline-white">
            Explore Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
