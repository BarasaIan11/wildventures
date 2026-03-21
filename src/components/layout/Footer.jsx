import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { tours } from "@/data/tours";

const companyLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/blogs", label: "Safari Blogs" },
  { href: "/plan", label: "Custom Safaris" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const signatureTours = tours.slice(0, 4);

  return (
    <footer className="relative bg-[#121212] text-white/50 overflow-hidden border-t border-white/5">

      {/* 1. CREATIVE BACKGROUND LAYER: The Savanna Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <Image
          src="/images/hero/destinations-hero.png"
          alt=""
          fill
          className="object-cover grayscale"
        />
      </div>

      {/* 2. CREATIVE LIGHTING: The Horizon Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-20 z-0"
        style={{
          background: "radial-gradient(circle at center top, rgba(196,122,44,0.3) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-[5%] pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* 1. Brand Signature */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Zafronix Safaris Logo"
                className="h-20 md:h-24 w-auto object-contain brightness-110 drop-shadow-2xl"
              />
            </div>
            <p className="text-[0.9rem] leading-relaxed font-light italic">
              "We specialize in life-changing journeys across the landscapes of
              East Africa. Crafted for those who seek the extraordinary."
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com/zafronixsafari" },
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com/zafronixsafari" },
                { Icon: Youtube, label: "YouTube", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange hover:border-orange hover:text-white transition-all duration-500 group"
                >
                  <Icon size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Signature Experiences */}
          <div className="pt-4">
            <p className="text-beige text-[0.7rem] tracking-[0.3em] uppercase font-bold mb-10 flex items-center gap-2">
              <span className="w-6 h-px bg-orange/40" /> Signature Journeys
            </p>
            <ul className="space-y-5">
              {signatureTours.map((tour) => (
                <li key={tour.slug}>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="text-[0.88rem] hover:text-white transition-colors flex items-center group font-light"
                  >
                    {tour.title}
                    <ArrowUpRight
                      size={14}
                      className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange"
                    />
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/tours"
                  className="text-[0.7rem] tracking-widest text-orange uppercase font-black hover:tracking-[0.15em] transition-all"
                >
                  Explore All Safaris →
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Discover More */}
          <div className="pt-4">
            <p className="text-beige text-[0.7rem] tracking-[0.3em] uppercase font-bold mb-10 flex items-center gap-2">
              <span className="w-6 h-px bg-orange/40" /> Discover More
            </p>
            <ul className="space-y-5">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[0.88rem] hover:text-white transition-colors font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div className="pt-4">
            <p className="text-beige text-[0.7rem] tracking-[0.3em] uppercase font-bold mb-10 flex items-center gap-2">
              <span className="w-6 h-px bg-orange/40" /> Get in touch
            </p>
            <div className="space-y-6">
              {[
                { Icon: MapPin, text: "Nairobi, Kenya" },
                { Icon: Phone, text: "+254 780 166 113" },
                { Icon: Mail, text: "info@zafronixsafari.com" },
                { Icon: Clock, text: "Mon–Sat, 8am – 6pm EAT" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-orange" />
                  </div>
                  <span className="text-[0.88rem] leading-tight font-light pt-1">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 border-t border-white/5 px-[5%] py-8 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-[0.7rem] tracking-wider opacity-30">
              © {new Date().getFullYear()} ZAFRONIX SAFARIS AND TRAVELS LTD.
            </p>
            <p className="opacity-10 hidden md:block">|</p>
            <p className="text-[0.7rem] tracking-wider opacity-30 uppercase">
              Designed by <span className="text-white/40">Innovition Solutions</span>
            </p>
          </div>

          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <span
                key={l}
                className="text-[0.65rem] opacity-30 uppercase tracking-[0.2em] hover:opacity-100 transition-opacity cursor-pointer"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}