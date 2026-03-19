"use client";
// ─────────────────────────────────────────────────────────────────────────────
// src/components/ui/Button.jsx
// Reusable button component with Zafronix Safaris brand variants
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import { clsx } from "clsx";

const variants = {
  primary:
    "bg-orange text-white hover:bg-orange-dark hover:-translate-y-0.5 hover:shadow-orange",
  "outline-white":
    "border border-white/60 text-white hover:border-white hover:bg-white/10 hover:-translate-y-0.5 backdrop-blur-sm",
  "outline-green":
    "border border-green text-green hover:bg-green hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-orange border-b border-transparent hover:border-orange pb-0.5",
  secondary:
    "bg-green text-white hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-green",
};

const sizes = {
  sm:  "px-5 py-2.5 text-xs tracking-[0.08em]",
  md:  "px-9 py-4 text-sm tracking-[0.08em]",
  lg:  "px-12 py-5 text-base tracking-[0.08em]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}) {
  const base = clsx(
    "inline-block font-medium uppercase rounded-sm cursor-pointer",
    "transition-all duration-300 font-sans",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
