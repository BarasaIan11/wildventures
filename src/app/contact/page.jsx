"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
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

  const contactInfo = [
    {
      Icon: MapPin,
      label: "Visit Us",
      value: "Westlands Business Park, Nairobi, Kenya",
    },
    { Icon: Phone, label: "Call Us", value: "+254 700 123 456" },
    { Icon: Mail, label: "Email Us", value: "hello@wildventures.co" },
    {
      Icon: Clock,
      label: "Office Hours",
      value: "Mon – Sat: 8:00am – 6:00pm EAT",
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=1800&q=80"
          alt="Contact WildVentures"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 px-[5%] pb-10 pt-24">
          <p className="section-label light">Get In Touch</p>
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-white">
            Let&apos;s Plan Your <em className="italic">Safari</em>
          </h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <p className="section-label">Contact Information</p>
            <h2 className="section-title">
              We&apos;re Here to <em>Help</em>
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
              href="https://wa.me/254700123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm p-5
                         hover:bg-[#25D366]/20 transition-colors duration-300 group"
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
            {submitted ? (
              <div className="bg-green rounded-sm p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif text-2xl text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Thank you for reaching out. We&apos;ll be in touch within 24
                  hours.
                </p>
              </div>
            ) : (
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
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
