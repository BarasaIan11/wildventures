import Link from "next/link";
import Image from "next/image";
import RevealWrapper from "@/components/shared/RevealWrapper";

export default function BookingCTA() {
  return (
    <section className="relative py-32 px-[5%] bg-green text-center overflow-hidden">
      {/* 1. Subtle Texture Overlay (Safariopedia Style) */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <Image
          src="/images/hero/elephant.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />
      </div>

      {/* 2. Sophisticated Lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 90% 10%, rgba(196,122,44,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(0,0,0,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <RevealWrapper>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-beige/30" />
            <p className="text-beige/80 text-[0.7rem] tracking-[0.3em] uppercase font-medium">
              Start Your Journey
            </p>
            <span className="w-8 h-px bg-beige/30" />
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1] mb-8">
            Your African Adventure <br />
            <span className="italic font-normal text-beige block mt-2">
              Begins Here
            </span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-white/70 text-[1.1rem] font-light mx-auto mb-12 max-w-[580px] leading-relaxed">
            Our safari specialists are ready to craft a journey as unique as you
            are. Tell us your dream, and we'll handle every detail.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/plan"
              className="btn btn-primary min-w-[220px] py-5 shadow-2xl"
            >
              Plan My Safari
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-white min-w-[220px] py-5 backdrop-blur-sm bg-white/5"
            >
              Talk to an Expert
            </Link>
          </div>
        </RevealWrapper>
      </div>

      {/* 3. Minimalist Decoration (Uwanda Style) */}
      <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-48 h-48 border border-white/5 rounded-full pointer-events-none" />
    </section>
  );
}
