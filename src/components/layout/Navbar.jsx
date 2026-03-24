"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/plan", label: "Plan Your Trip" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      triggerRef.current = document.activeElement;

      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle focus trap and escape key
  const handleKeyDown = (e) => {
    if (!mobileOpen) return;

    if (e.key === "Escape") {
      setMobileOpen(false);
      return;
    }

    if (e.key === "Tab") {
      const focusableElements = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift + Tab
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      }
      // Tab
      else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };


  return (
    <>
      {/* ── Desktop Navbar */}
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-[5%] transition-all duration-500",
          scrolled
            ? "py-3.5 bg-ivory/97 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "py-5 bg-gradient-to-b from-black/65 via-black/25 to-transparent",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "flex items-center gap-2 transition-colors duration-300",
            scrolled ? "text-green" : "text-white",
          )}
        >
          <img src="/logo.png" alt="Zafronix Safaris Logo" className="h-16 md:h-20 w-auto object-contain" />
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
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        onKeyDown={handleKeyDown}
        className={clsx(
          "fixed inset-0 z-[1000] bg-green flex flex-col items-center justify-start overflow-y-auto px-10 pt-24 pb-12",
          "transition-all duration-700 ease-in-out",
          mobileOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url("/images/hero/hero-main.png")',
            backgroundSize: "cover",
          }}
        />

        <button
          ref={closeButtonRef}
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-orange rounded-sm"
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
              className="font-serif text-[2.2rem] font-light text-white hover:text-beige focus:outline-none focus-visible:text-beige focus-visible:ring-2 focus-visible:ring-orange rounded-sm transition-colors"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/tours"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary mt-8 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green"
          >
            Book Your Safari
          </Link>
        </nav>

        {/* Mobile Socials */}
        <div className="mt-auto pt-12 flex flex-col items-center gap-4 text-white/40">
          <span className="text-[0.7rem] tracking-[0.3em] uppercase">
            Follow the Journey
          </span>
          <div className="flex gap-6">
            <a href="https://instagram.com/zafronix_safari" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={() => setMobileOpen(false)} className="hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-orange rounded-full transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577677294064&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" onClick={() => setMobileOpen(false)} className="hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-orange rounded-full transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/zafronixsafaris" target="_blank" rel="noopener noreferrer" aria-label="YouTube" onClick={() => setMobileOpen(false)} className="hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-orange rounded-full transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
