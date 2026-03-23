"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SuccessToast from "@/components/shared/SuccessToast";
import { Calendar, Users, Heart, Send, User } from "lucide-react";
import RevealWrapper from "@/components/shared/RevealWrapper";

export default function PlanClient() {
  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      adults: "1",
      children: "0",
      message: ""
    }
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const {
        firstName, lastName, email, phone,
        startDate, adults, children,
        destinations, interests, message,
      } = data;

      const refId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const totalPax = parseInt(adults) + parseInt(children);
      const timestamp = new Date().toLocaleString("en-KE", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      // --- UPDATED PROFESSIONAL FORMATTING (Consistent with Contact Form) ---
      let whatsappText = `*SAFARI INQUIRY — ZAFRONIX SAFARIS*\n`;
      whatsappText += `*Ref:* #${refId}\n`;
      whatsappText += `*Date:* ${timestamp}\n\n`;

      // 1. Client Info
      whatsappText += `*CLIENT INFORMATION*\n`;
      whatsappText += `*Name:* ${firstName} ${lastName}\n`;
      whatsappText += `*Email:* ${email}\n`;
      if (phone) whatsappText += `*Phone:* ${phone}\n\n`;

      // 2. Trip Details
      whatsappText += `*TRIP DETAILS*\n`;
      whatsappText += `*Travel Date:* ${startDate}\n`;
      whatsappText += `*Travelers:* ${totalPax} Total (${adults} Adults, ${children} Children)\n`;

      if (destinations?.length > 0)
        whatsappText += `*Destinations:* ${destinations.join(", ")}\n`;

      if (interests?.length > 0)
        whatsappText += `*Interests:* ${interests.join(", ")}\n`;

      // 3. Vision & Notes
      if (message) {
        whatsappText += `\n*VISION & NOTES*\n`;
        whatsappText += `${message}\n`;
      }

      whatsappText += `_Sent via Zafronix Safaris official website_`;

      if (!phoneNumber) {
        setSubmitError("WhatsApp configuration is missing.");
        return;
      }

      // Open WhatsApp with the FULL professionally formatted message
      const encodedMessage = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      reset();
      setShowToast(true);

    } catch (error) {
      setSubmitError("Failed to open WhatsApp. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full bg-ivory/50 border border-gray-100 rounded-sm px-5 py-4 text-[1rem]
    text-charcoal focus:outline-none focus:border-orange focus:bg-white transition-all duration-300 placeholder:text-gray-300 appearance-none`;
  const labelClass = `block text-[0.65rem] tracking-[0.2em] uppercase text-orange font-bold mb-2`;
  const errorClass = "text-red-500 text-[0.75rem] mt-1";

  return (
    <>
      <SuccessToast
        visible={showToast}
        title="Inquiry Drafted!"
        message="The form has been reset. Please remember to tap 'Send' in WhatsApp to complete your submission."
        duration={6000}
        onClose={() => setShowToast(false)}
      />

      <main className="bg-ivory">
        {/* Hero Section */}
        <div className="relative h-[65vh] min-h-[550px] flex items-center overflow-hidden bg-charcoal">
          <Image
            src="/images/hero/plan-hero.png"
            alt="Plan your safari"
            fill
            priority
            className="object-cover animate-hero-zoom opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
            <RevealWrapper>
              <p className="section-label light">Bespoke Journeys</p>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1] max-w-2xl">
                Design Your <br />
                <em className="italic text-beige">Dream Safari</em>
              </h1>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p className="text-white/70 mt-6 text-[1.1rem] font-light max-w-md leading-relaxed">
                Every traveler is unique. Tell us your vision, and we will bring the magic of East Africa to life.
              </p>
            </RevealWrapper>
          </div>
        </div>

        {/* Form Section */}
        <section className="pb-28 px-[5%] mt-16 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-2xl rounded-sm p-8 md:p-16 border border-gray-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">

                {/* 1. Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input {...register("firstName", { required: true })} placeholder="Jane" className={inputClass} />
                    {errors.firstName && <p className={errorClass}>Required</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input {...register("lastName", { required: true })} placeholder="Smith" className={inputClass} />
                    {errors.lastName && <p className={errorClass}>Required</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" placeholder="jane@example.com" className={inputClass} />
                    {errors.email && <p className={errorClass}>Valid email required</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone / WhatsApp</label>
                    <input {...register("phone")} type="tel" placeholder="+1 234 567 8900" className={inputClass} />
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 2. Trip Details */}
                <div className="w-full">
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Preferred Travel Date</span>
                  </label>
                  <input {...register("startDate", { required: true })} type="date" className={inputClass} min={new Date().toISOString().split("T")[0]} />
                  {errors.startDate && <p className={errorClass}>Required</p>}
                </div>

                {/* 3. Travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}><User className="w-3 h-3" /> Adults (18+)</label>
                    <select {...register("adults")} className={inputClass}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((n) => (<option key={n} value={n}>{n}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}><Users className="w-3 h-3" /> Children</label>
                    <select {...register("children")} className={inputClass}>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((n) => (<option key={n} value={n}>{n}</option>))}
                    </select>
                  </div>
                </div>

                {/* 4. Destinations */}
                <div>
                  <label className={labelClass}>Preferred Destinations</label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
                    {["Kenya", "Tanzania", "Rwanda", "Uganda", "Zanzibar", "Open to Suggestions"].map((d) => (
                      <label key={d} className="flex items-center gap-2 p-3 border border-gray-100 rounded-sm cursor-pointer hover:border-orange transition-colors text-[0.88rem]">
                        <input type="checkbox" {...register("destinations")} value={d} className="accent-orange w-4 h-4" />
                        {d}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 5. Interests */}
                <div>
                  <label className={labelClass}><span className="flex items-center gap-1.5">Travel Interests</span></label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
                    {["Big Five", "Gorilla Trekking", "Photography", "Honeymoon", "Family-Friendly", "Luxury Lodges"].map((i) => (
                      <label key={i} className="flex items-center gap-2 p-3 border border-gray-100 rounded-sm cursor-pointer hover:border-orange transition-colors text-[0.88rem]">
                        <input type="checkbox" {...register("interests")} value={i} className="accent-orange w-4 h-4" />
                        {i}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 6. Message */}
                <div>
                  <label className={labelClass}>Tell Us More About Your Vision</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Celebrations, dietary needs, or specific wildlife you want to see..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2.5 disabled:opacity-70 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Opening WhatsApp..." : "Send My Safari Inquiry"}
                </button>

                {submitError && <p className="text-red-500 text-center text-sm">{submitError}</p>}
                <p className="text-center text-[0.78rem] text-gray-400 italic">
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