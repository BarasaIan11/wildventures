"use client";
// ─────────────────────────────────────────────────────────────────────────────
// src/components/shared/RevealScript.jsx
// Injects the IntersectionObserver that powers .reveal scroll animations
// Include once per page at the bottom of the page component
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from "react";

export default function RevealScript() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
