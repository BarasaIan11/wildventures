import Link from "next/link";
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

const tourLinks = [
  {
    href: "/tours/great-migration-serengeti-masai-mara",
    label: "Great Migration",
  },
  {
    href: "/tours/ngorongoro-serengeti-luxury",
    label: "Ngorongoro & Serengeti",
  },
  { href: "/tours/rwanda-gorilla-trekking", label: "Gorilla Trekking" },
  { href: "/tours/east-africa-grand-loop", label: "East Africa Grand Loop" },
];

const companyLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/blogs", label: "Safari Blogs" },
  { href: "/plan", label: "Custom Safaris" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const signatureTours = tours.slice(0, 4);

  return (
    <footer className="bg-charcoal text-white/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-[5%] pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* 1. Brand Signature */}
          <div className="space-y-6">
            <p className="font-serif text-[2rem] text-white font-light tracking-tight leading-none">
              WildVentures
            </p>
            <p className="text-[0.9rem] leading-relaxed font-light">
              We specialize in life-changing journeys across the landscapes of
              East Africa. Crafted for those who seek the extraordinary.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com/wildventures" },
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com/wildventures" },
                { Icon: Youtube, label: "YouTube", href: "https://youtube.com/wildventures" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-orange hover:text-orange focus:outline-none focus-visible:border-orange focus-visible:text-orange focus-visible:ring-2 focus-visible:ring-orange transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Signature Experiences */}
          <div>
            <p className="text-beige text-[0.7rem] tracking-[0.25em] uppercase font-bold mb-8">
              Signature Experiences
            </p>
            <ul className="space-y-4">
              {signatureTours.map((tour) => (
                <li key={tour.slug}>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="text-[0.88rem] hover:text-white transition-colors flex items-center group"
                  >
                    {tour.title}
                    <ArrowUpRight
                      size={14}
                      className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/tours"
                  className="text-[0.75rem] text-orange uppercase tracking-widest font-bold hover:underline"
                >
                  View All Safaris
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Discover More */}
          <div>
            <p className="text-beige text-[0.7rem] tracking-[0.25em] uppercase font-bold mb-8">
              Discover More
            </p>
            <ul className="space-y-4">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[0.88rem] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div>
            <p className="text-beige text-[0.7rem] tracking-[0.25em] uppercase font-bold mb-8">
              Get In Touch
            </p>
            <div className="space-y-5">
              {[
                { Icon: MapPin, text: "Nairobi, Kenya" },
                { Icon: Phone, text: "+254 780 166 113" },
                { Icon: Mail, text: "hello@wildventures.co" },
                { Icon: Clock, text: "Mon–Sat, 8am – 6pm EAT" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex gap-4 items-start">
                  <Icon className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[0.88rem] leading-tight font-light">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/254780166113"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white text-[0.75rem] tracking-widest uppercase font-bold py-4 px-6 rounded-sm hover:bg-orange hover:border-orange transition-all duration-500"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-[5%] py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-[0.75rem] opacity-40">
              © {new Date().getFullYear()} WildVentures Safari Co.
            </p>
            <p className="text-[0.7rem] opacity-20 hidden md:block">|</p>
            <p className="text-[0.75rem] opacity-40">
              Designed by{" "}
              <span className="text-white/60">Innovition Solutions</span>
            </p>
          </div>

          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <span
                key={l}
                aria-disabled="true"
                className="text-[0.75rem] opacity-40 uppercase tracking-widest cursor-not-allowed"
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
