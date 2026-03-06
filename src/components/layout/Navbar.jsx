"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/plan", label: "Plan Your Trip" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop Navbar */}
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-[5%] transition-all duration-500",
          scrolled
            ? // Scrolled: solid ivory background
              "py-3.5 bg-ivory/97 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : // Over hero: strong top gradient — creates a clear dark band behind the nav
              "py-5 bg-gradient-to-b from-black/65 via-black/25 to-transparent",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "font-serif text-[1.6rem] font-semibold tracking-wide transition-colors duration-300",
            scrolled ? "text-green" : "text-white",
          )}
        >
          WildVentures
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "text-[0.83rem] font-medium tracking-[0.07em] uppercase relative",
                  'after:content-[""] after:absolute after:bottom-[-3px] after:left-0',
                  "after:h-[1px] after:w-0 after:bg-orange after:transition-all after:duration-300",
                  "hover:after:w-full transition-colors duration-300",
                  scrolled ? "text-charcoal" : "text-white",
                )}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/tours"
              className="btn btn-primary text-[0.8rem] py-2.5 px-5"
            >
              Book Safari
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu
            className={clsx(
              "w-6 h-6 transition-colors",
              scrolled ? "text-charcoal" : "text-white",
            )}
          />
        </button>
      </nav>

      {/* ── Mobile Nav Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-[1000] bg-green flex flex-col items-center justify-center p-10",
          "transition-all duration-700 ease-in-out",
          mobileOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0", // Slide in effect
        )}
      >
        {/* Subtle background texture for mobile menu */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url("/images/hero/hero-main.png")',
              backgroundSize: "cover",
            }}
          />
        </div>

        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white"
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="relative z-10 flex flex-col items-center gap-8 text-center">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className="font-serif text-[2.2rem] font-light text-white hover:text-beige transition-colors"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/tours"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            Book Your Safari
          </Link>
        </nav>

        {/* Mobile Socials */}
        <div className="absolute bottom-12 flex gap-6 text-white/40">
          <span className="text-[0.7rem] tracking-[0.3em] uppercase">
            Follow the Journey
          </span>
        </div>
      </div>
    </>
  );
}
