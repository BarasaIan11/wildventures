import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-green-dark">
      {/* 1. Background Image - Full Opacity for Vibrancy */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/story-main.png"
          alt="Lions in the Serengeti at sunset"
          fill
          priority
          // FIX: object-bottom ensures the lions stay in frame on wide screens
          className="object-cover object-bottom animate-hero-zoom transition-transform duration-[10s]"
          sizes="100vw"
        />
      </div>

      {/* 2. Intelligent Overlay - Not a flat black blanket */}
      {/* This gradient protects the top (Navbar) and bottom (Lions/Text) but leaves the center sun bright */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

      {/* 3. The "Sun Glow" - Enhances the existing sunset light */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,145,0,0.15) 0%, transparent 50%)",
        }}
      />

      {/* 4. Content */}
      <div className="relative z-10 text-center px-6 max-w-[900px] mt-12">
        {/* Eyebrow with more "Air" */}
        <div
          className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <span className="block w-10 h-px bg-orange/60" />
          <p className="text-beige text-[0.75rem] tracking-[0.4em] uppercase font-medium">
            East Africa's Premier Safari Company
          </p>
          <span className="block w-10 h-px bg-orange/60" />
        </div>

        {/* Headline - "Wild Beauty" as a true focal point */}
        <h1
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] font-light text-white leading-[1] tracking-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Experience Africa's
          <br />
          <span className="italic font-normal text-beige block mt-2">
            Wild Beauty
          </span>
        </h1>

        {/* Subheadline - Widened slightly for better luxury feel */}
        <p
          className="text-white/90 text-[clamp(1rem,1.5vw,1.15rem)] font-light max-w-[550px] mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          Curated safari experiences crafted for those who seek the
          extraordinary — where every sunrise reveals a new story.
        </p>
      </div>

      {/* 6. Creative Addition: Scroll Hint (Uwanda Style) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white to-white/0" />
      </div>
    </section>
  );
}
