"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Calendar, Users, DollarSign, Heart, Send } from "lucide-react";

export default function PlanPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  const inputClass = `w-full border border-gray-200 rounded-sm px-4 py-3 text-[0.9rem]
    text-charcoal focus:outline-none focus:border-green transition-colors duration-200`;
  const labelClass = `block text-[0.7rem] tracking-[0.12em] uppercase text-green font-medium mb-1.5`;
  const errorClass = `text-red-400 text-[0.78rem] mt-1`;

  if (submitted)
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory px-5">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🦁</div>
          <h2 className="font-serif text-3xl text-green mb-4">
            Safari Inquiry Received!
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Thank you for reaching out. One of our safari specialists will
            contact you within 24 hours to start crafting your perfect African
            adventure.
          </p>
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/plan-hero.png"
          alt="Plan your safari"
          fill
          priority
          className="object-cover animate-hero-zoom"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <p className="section-label light">Custom Safari Planner</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1] max-w-2xl">
            Tell Us Your <br />
            <em className="italic text-beige">Dream Safari</em>
          </h1>
          <p className="text-white/80 mt-6 text-[1.05rem] font-light max-w-md leading-relaxed">
            Your journey should be as unique as you are. Share your vision with
            us, and we'll bring the magic of Africa to life.
          </p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-sm shadow-card p-8 md:p-12 -mt-20 relative z-20">
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-10 border-l-2 border-orange/30 pl-6">
              Fill in the form below and our safari specialists will design a
              completely personalised itinerary just for you — no obligation, no
              pressure.
            </p>

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
                  {errors.firstName && <p className={errorClass}>Required</p>}
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    {...register("lastName", { required: true })}
                    placeholder="Smith"
                    className={inputClass}
                  />
                  {errors.lastName && <p className={errorClass}>Required</p>}
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
                  {errors.startDate && <p className={errorClass}>Required</p>}
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
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
                className="btn btn-primary w-full flex items-center justify-center gap-2.5"
              >
                <Send className="w-4 h-4" />
                Send My Safari Inquiry
              </button>

              <p className="text-center text-[0.78rem] text-gray-400">
                We'll respond within 24 hours · No commitment required
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
