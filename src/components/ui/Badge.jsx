// ─────────────────────────────────────────────────────────────────────────────
// src/components/ui/Badge.jsx
// Tour / destination badge labels
// ─────────────────────────────────────────────────────────────────────────────

import { clsx } from "clsx";

const variants = {
  orange:  "bg-orange text-white",
  green:   "bg-green text-white",
  beige:   "bg-beige text-green",
  white:   "bg-white text-green",
  outline: "border border-orange text-orange bg-transparent",
};

export default function Badge({ children, variant = "orange", className }) {
  return (
    <span
      className={clsx(
        "inline-block text-[0.65rem] font-medium tracking-[0.1em] uppercase",
        "px-2.5 py-1 rounded-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
