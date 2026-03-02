import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const tourLinks = [
  {
    href: "/tours/great-migration-serengeti-masai-mara",
    label: "Great Migration Safari",
  },
  {
    href: "/tours/ngorongoro-serengeti-luxury",
    label: "Ngorongoro & Serengeti",
  },
  {
    href: "/tours/amboseli-masai-mara-classic",
    label: "Amboseli & Masai Mara",
  },
  { href: "/tours/rwanda-gorilla-trekking", label: "Gorilla Trekking Rwanda" },
  { href: "/tours/uganda-primates-pearl-of-africa", label: "Uganda Primates" },
  { href: "/tours/east-africa-grand-loop", label: "East Africa Grand Loop" },
  { href: "/tours", label: "View All Tours →" },
];
const destLinks = ["Kenya", "Tanzania", "Rwanda", "Uganda"];
const companyLinks = [
  { href: "/plan", label: "Plan Your Trip" },
  { href: "/reviews", label: "Traveler Reviews" },
  { href: "/contact", label: "Contact Us" },
  { href: "#", label: "About WildVentures" },
  { href: "#", label: "Sustainability" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60">
      <div className="px-[5%] pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-[1.9rem] text-white mb-3 font-light">
              WildVentures
            </p>
            <p className="text-[0.87rem] leading-[1.75] mb-2">
              Crafting extraordinary safari experiences across East Africa since
              2009.
            </p>
            <p className="text-[0.78rem] text-orange tracking-wide mb-5">
              Kenya · Tanzania · Rwanda · Uganda
            </p>
            <div className="flex gap-2.5">
              {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[0.75rem] text-white/60 hover:border-orange hover:text-white hover:bg-orange transition-all duration-300"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Tours */}
          <div>
            <p className="text-white text-[0.82rem] tracking-[0.08em] uppercase font-medium mb-4">
              Popular Tours
            </p>
            <ul className="space-y-2.5">
              {tourLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.87rem] text-white/50 hover:text-orange transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations + Company */}
          <div>
            <p className="text-white text-[0.82rem] tracking-[0.08em] uppercase font-medium mb-4">
              Destinations
            </p>
            <ul className="space-y-2.5 mb-7">
              {destLinks.map((d) => (
                <li key={d}>
                  <Link
                    href={`/destinations/${d.toLowerCase()}`}
                    className="text-[0.87rem] text-white/50 hover:text-orange transition-colors"
                  >
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white text-[0.82rem] tracking-[0.08em] uppercase font-medium mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[0.87rem] text-white/50 hover:text-orange transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-[0.82rem] tracking-[0.08em] uppercase font-medium mb-4">
              Get In Touch
            </p>
            <div className="space-y-3.5">
              {[
                {
                  Icon: MapPin,
                  text: "Westlands Business Park,\nNairobi, Kenya",
                },
                { Icon: Phone, text: "+254 700 123 456" },
                { Icon: Mail, text: "hello@wildventures.co" },
                { Icon: Clock, text: "Mon–Sat, 8am – 6pm EAT" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex gap-3 items-start">
                  <Icon className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                  <span className="text-[0.87rem] leading-[1.5] whitespace-pre-line">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/254700123456"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/30
                         text-[#25D366] text-[0.82rem] font-medium px-4 py-2.5 rounded-sm w-fit
                         hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <span className="text-base">💬</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-[5%] py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[0.78rem] text-white/30">
          © {new Date().getFullYear()} WildVentures. All rights reserved.
        </p>
        <div className="flex gap-5 text-[0.78rem]">
          {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/30 hover:text-orange transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
