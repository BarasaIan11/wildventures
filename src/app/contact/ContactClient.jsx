"use client";
// src/app/contact/ContactClient.jsx
// ─────────────────────────────────────────────────────────────
// This is the client-side contact form, extracted from page.jsx
// so that page.jsx can remain a Server Component and export metadata.
// No logic has changed — only the file was split.
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SuccessToast from "@/components/shared/SuccessToast";

export default function ContactClient() {
  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";
  const formattedPhone = phoneNumber
    ? `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`
    : "Contact via email";
  const hasWhatsApp = phoneNumber.length > 0;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const { name, email, subject, message } = data;
      const refId = Math.random().toString(36).substring(2, 8).toUpperCase();

      let text = `*CONTACT MESSAGE — Zafronix Safaris*\n`;
      text += `Ref: *#${refId}*\n\n`;
      text += `*SENDER DETAILS*\n`;
      text += ` Name: ${name}\n`;
      text += ` Email: ${email}\n`;
      text += ` Subject: ${subject || "General Inquiry"}\n`;
      if (message) {
        text += `\n*Message:*\n`;
        text += `${message
          .split("\n")
          .map((l) => `│ ${l}`)
          .join("\n")}\n`;
      }
      text += `_Submitted: ${new Date().toLocaleString("en-KE", {
        dateStyle: "medium",
        timeStyle: "short",
      })}_\n`;
      text += `_Via Zafronix Safaris website_`;

      if (!phoneNumber) {
        setSubmitError(
          "WhatsApp is currently unavailable. Please contact us by email."
        );
        return;
      }

      const encodedMessage = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!popup || popup.closed || typeof popup.closed === "undefined") {
        setSubmitError("Popup blocked. Please allow popups and try again.");
        return;
      }
      setShowToast(true);
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full border border-gray-200 rounded-sm px-4 py-3 text-[0.9rem]
    text-charcoal focus:outline-none focus:border-green transition-colors duration-200`;
  const labelClass = `block text-[0.7rem] tracking-[0.12em] uppercase text-green font-medium mb-1.5`;

  const contactInfo = [
    {
      Icon: MapPin,
      label: "Visit Us",
      value: "Westlands Business Park, Nairobi, Kenya",
    },
    { Icon: Phone, label: "Call Us", value: formattedPhone },
    { Icon: Mail, label: "Email Us", value: "info@zafronixsafaris.com" },
    {
      Icon: Clock,
      label: "Office Hours",
      value: "Mon – Sat: 8:00am – 6:00pm EAT",
    },
  ];

  return (
    <>
      <SuccessToast
        visible={showToast}
        title="WhatsApp Draft Opened"
        message="Your message is pre-filled in WhatsApp. Tap Send there to deliver it to our team."
        duration={5000}
        onClose={() => setShowToast(false)}
      />

      {/* ── Hero */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/contact-hero.png"
          alt="African elephants in the wild — Zafronix Safaris contact page"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6"
          >
            <a href="/" className="hover:text-beige transition-colors">
              Home
            </a>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-beige">Contact</span>
          </nav>

          <p className="section-label light">Get In Touch</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1]">
            Let's Plan Your <br />
            <em className="italic text-beige">Safari</em>
          </h1>
          <p className="text-white/80 mt-6 text-[1.05rem] font-light max-w-md leading-relaxed">
            Our experts are on hand to help you craft an unforgettable journey
            through East Africa. Reach out and let's start the conversation.
          </p>
        </div>
      </div>

      {/* ── Content */}
      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <p className="section-label">Contact Information</p>
            <h2 className="section-title">
              We're Here to <em>Help</em>
            </h2>
            <p className="section-sub mb-10">
              Whether you have a question about a tour, want to customise an
              itinerary, or are ready to book — our team is ready.
            </p>

            <div className="space-y-5 mb-10">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-beige flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-green" />
                  </div>
                  <div>
                    <p className="text-[0.72rem] tracking-[0.1em] uppercase text-orange font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-[0.92rem] text-charcoal">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp highlight */}
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm p-5 hover:bg-[#25D366]/20 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-xl flex-shrink-0">
                💬
              </div>
              <div>
                <p className="font-medium text-charcoal">Chat on WhatsApp</p>
                <p className="text-[0.82rem] text-gray-500">
                  Usually replies within minutes
                </p>
              </div>
              <span className="ml-auto text-[#25D366] font-medium text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Map placeholder */}
            <div className="mt-8 rounded-sm overflow-hidden h-[200px] bg-beige/60 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green mx-auto mb-2" />
                <p className="text-[0.85rem] text-green font-medium">
                  Westlands Business Park
                </p>
                <p className="text-[0.78rem] text-gray-400">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-white shadow-card rounded-sm p-8">
              <p className="section-label">Send a Message</p>
              <h3 className="section-title mb-7">
                How Can We <em>Help?</em>
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[0.78rem] mt-1">
                        Required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      type="email"
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[0.78rem] mt-1">
                        Valid email required
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Subject</label>
                  <select {...register("subject")} className={inputClass}>
                    {[
                      "General Inquiry",
                      "Tour Booking",
                      "Custom Itinerary",
                      "Pricing Question",
                      "Other",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-[0.78rem] mt-1">
                      Required
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitError && (
                  <p className="text-red-500 text-center text-sm mt-3">
                    {submitError}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}