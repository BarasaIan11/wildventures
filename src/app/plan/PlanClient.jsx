"use client";
// src/app/plan/PlanClient.jsx
// Extracted from page.jsx so the server wrapper can export metadata.
// All form logic is identical — only the file was split.
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SuccessToast from "@/components/shared/SuccessToast";
import { Calendar, Users, DollarSign, Heart, Send } from "lucide-react";

export default function PlanClient() {
  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const {
        firstName, lastName, email, phone,
        startDate, duration, travelers, budget,
        destinations, interests, message,
      } = data;

      const refId = Math.random().toString(36).substring(2, 8).toUpperCase();

      let text = `*New Safari Inquiry — Zafronix Safaris*\n`;
      text += `Ref: #${refId}\n`;
      text += `*Name:* ${firstName} ${lastName}\n`;
      text += `*Email:* ${email}\n`;
      if (phone) text += `*Phone:* ${phone}\n`;
      text += `\n*Trip Details*\n`;
      text += `*Travel Date:* ${startDate}\n`;
      if (duration) text += `*Duration:* ${duration}\n`;
      if (travelers) text += `*Travelers:* ${travelers}\n`;
      if (budget) text += `*Budget (per person):* ${budget}\n`;
      if (destinations?.length > 0)
        text += `*Destinations:* ${destinations.join(", ")}\n`;
      if (interests?.length > 0)
        text += `*Interests:* ${interests.join(", ")}\n`;
      if (message) text += `\n*Additional Notes:*\n${message}\n`;
      text += `Submitted via Zafronix Safaris website.`;

      if (!phoneNumber) {
        setSubmitError(
          "WhatsApp is currently unavailable. Please try again later."
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
      setSubmitError("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full bg-ivory/50 border border-gray-100 rounded-sm px-5 py-4 text-[1rem]
    text-charcoal focus:outline-none focus:border-orange focus:bg-white transition-all duration-300 placeholder:text-gray-300`;
  const labelClass = `block text-[0.65rem] tracking-[0.2em] uppercase text-orange font-bold mb-2`;
  const errorClass = "text-red-500 text-[0.75rem] mt-1";

  return (
    <>
      <SuccessToast
        visible={showToast}
        title="WhatsApp Draft Opened"
        message="Your inquiry details are pre-filled in WhatsApp. Just tap Send to submit to our team."
        duration={5000}
        onClose={() => setShowToast(false)}
      />

      <main className="bg-ivory">
        {/* ── Hero */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-charcoal">
          <Image
            src="/images/hero/plan-hero.png"
            alt="Plan your tailor-made Kenya or Tanzania safari with Zafronix Safaris"
            fill
            priority
            sizes="100vw"
            className="object-cover animate-hero-zoom opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-6"
            >
              <a href="/" className="hover:text-beige transition-colors">
                Home
              </a>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-beige">Plan Your Safari</span>
            </nav>

            <p className="section-label light">Bespoke Journeys</p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1] max-w-2xl">
              Design Your <br />
              <em className="italic text-beige">Dream Safari</em>
            </h1>
            <p className="text-white/70 mt-6 text-[1.1rem] font-light max-w-md leading-relaxed">
              Every traveler is unique. Tell us your vision, and we will bring
              the magic of East Africa to life.
            </p>
          </div>
        </div>

        {/* ── Form */}
        <section className="pb-28 px-[5%] -mt-16 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-2xl rounded-sm p-8 md:p-16 border border-gray-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                {/* Personal info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      {...register("firstName", { required: true })}
                      placeholder="Jane"
                      className={inputClass}
                    />
                    {errors.firstName && (
                      <p className={errorClass}>Required</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                      {...register("lastName", { required: true })}
                      placeholder="Smith"
                      className={inputClass}
                    />
                    {errors.lastName && (
                      <p className={errorClass}>Required</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      type="email"
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className={errorClass}>Valid email required</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Phone / WhatsApp</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+1 234 567 8900"
                      className={inputClass}
                    />
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Trip details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> Travel Dates
                      </span>
                    </label>
                    <input
                      {...register("startDate", { required: true })}
                      type="date"
                      className={inputClass}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.startDate && (
                      <p className={errorClass}>Required</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Trip Duration</label>
                    <select {...register("duration")} className={inputClass}>
                      {[
                        "3–5 days",
                        "6–8 days",
                        "9–12 days",
                        "13–16 days",
                        "17+ days",
                      ].map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3 h-3" /> Travelers
                      </span>
                    </label>
                    <select {...register("travelers")} className={inputClass}>
                      {["1", "2", "3–4", "5–8", "9–12", "13+"].map((n) => (
                        <option key={n}>
                          {n} {n === "1" ? "Traveler" : "Travelers"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="w-3 h-3" /> Budget (per person)
                      </span>
                    </label>
                    <select {...register("budget")} className={inputClass}>
                      {[
                        "Under $1,500",
                        "$1,500 – $3,000",
                        "$3,000 – $5,000",
                        "$5,000 – $10,000",
                        "$10,000+",
                      ].map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Destinations */}
                <div>
                  <label className={labelClass}>
                    Preferred Destinations (select all that interest you)
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
                    {[
                      "Kenya",
                      "Tanzania",
                      "Rwanda",
                      "Uganda",
                      "Zanzibar (Beach Extension)",
                      "Open to Suggestions",
                    ].map((d) => (
                      <label
                        key={d}
                        className="flex items-center gap-2 p-3 border border-gray-200 rounded-sm cursor-pointer hover:border-green transition-colors text-[0.88rem]"
                      >
                        <input
                          type="checkbox"
                          {...register("destinations")}
                          value={d}
                          className="accent-green w-4 h-4"
                        />
                        {d}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3 h-3" /> Travel Interests
                    </span>
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
                    {[
                      "Big Five Game Drives",
                      "Gorilla Trekking",
                      "Bird Watching",
                      "Photography",
                      "Honeymoon/Romance",
                      "Family-Friendly",
                      "Cultural Experiences",
                      "Beach Extension",
                      "Luxury Lodges",
                      "Budget Camping",
                    ].map((i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 p-3 border border-gray-200 rounded-sm cursor-pointer hover:border-green transition-colors text-[0.88rem]"
                      >
                        <input
                          type="checkbox"
                          {...register("interests")}
                          value={i}
                          className="accent-green w-4 h-4"
                        />
                        {i}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>
                    Tell Us More About Your Dream Safari
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Any special occasions, mobility considerations, dietary requirements, specific wildlife you'd love to see..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send My Safari Inquiry"}
                </button>

                {submitError && (
                  <p className="text-red-500 text-center text-sm">
                    {submitError}
                  </p>
                )}

                <p className="text-center text-[0.78rem] text-gray-400">
                  We'll respond within 24 hours · No commitment required
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}