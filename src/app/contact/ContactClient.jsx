"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SuccessToast from "@/components/shared/SuccessToast";
import RevealWrapper from "@/components/shared/RevealWrapper";

export default function ContactClient() {
  const phoneNumber = "254722319565";
  const formattedPhone = phoneNumber
    ? `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9)}`
    : "+254 722 319 565";

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
      const timestamp = new Date().toLocaleString("en-KE", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      let text = `*CONTACT INQUIRY — ZAFRONIX SAFARIS*\n`;

      text += `*Ref:* #${refId}\n`;
      text += `*Date:* ${timestamp}\n\n`;

      text += `*SENDER INFORMATION*\n`;
      text += `*Name:* ${name}\n`;
      text += `*Email:* ${email}\n`;
      text += `*Subject:* ${subject || "General Inquiry"}\n\n`;

      text += `*MESSAGE CONTENT*\n`;
      text += `${message}\n\n`;

      text += `_Sent via Zafronix Safaris official website_`;

      const encodedMessage = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      reset();
      setShowToast(true);

    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full border border-gray-200 rounded-sm px-4 py-3 text-[0.9rem]
    text-charcoal focus:outline-none focus:border-orange transition-colors duration-200 bg-white`;
  const labelClass = `block text-[0.65rem] tracking-[0.15em] uppercase text-green font-bold mb-1.5`;

  const contactInfo = [
    {
      Icon: MapPin,
      label: "Visit Us",
      value: "Hamza House Along Jogoo Road, Nairobi, Kenya",
      href: "https://maps.google.com/?q=Hamza+House+Jogoo+Road+Nairobi",
    },
    { Icon: Phone, label: "Call Us", value: formattedPhone, href: phoneNumber ? `tel:+${phoneNumber}` : null },
    { Icon: Mail, label: "Email Us", value: "info@zafronixsafari.com", href: "mailto:info@zafronixsafari.com" },
    {
      Icon: Clock,
      label: "Office Hours",
      value: "Mon – Sat: 8:00am – 6:00pm EAT",
      href: null,
    },
  ];

  return (
    <>
      <SuccessToast
        visible={showToast}
        title="Message Drafted!"
        message="The form has been reset. Please complete the submission in WhatsApp."
        duration={5000}
        onClose={() => setShowToast(false)}
      />

      <div className="relative h-[65vh] min-h-[520px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/hero/contact-hero.png"
          alt="Zafronix Safaris Contact"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto">
          <RevealWrapper>
            <p className="section-label light">Get In Touch</p>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.1] max-w-3xl">
              Let's Plan Your <br />
              <em className="italic text-beige">Safari</em>
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="text-white/80 mt-6 text-[1.1rem] font-light max-w-md leading-relaxed">
              Our experts are on hand to help you craft an unforgettable journey
              through East Africa. Reach out and let's start the conversation.
            </p>
          </RevealWrapper>
        </div>
      </div>

      <section className="section-pad bg-ivory/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="space-y-10">
            <div>
              <p className="section-label">Contact Information</p>
              <h2 className="font-serif text-4xl text-green-dark mb-6">We're Here to Help</h2>
              <p className="text-gray-500 leading-relaxed font-light">
                Our team is ready to assist you with bespoke itineraries, booking inquiries, or general questions about East African travel.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ Icon, label, value, href }) => {
                const Content = (
                  <div className="flex gap-5 items-start group cursor-pointer">
                    <div className="w-12 h-12 rounded-sm bg-white border border-beige flex items-center justify-center shrink-0 group-hover:bg-green group-hover:border-green transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-orange font-bold mb-1">{label}</p>
                      <p className="text-[1rem] text-charcoal font-medium group-hover:text-green transition-colors">{value}</p>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={label} href={href} target={label === "Visit Us" ? "_blank" : undefined} rel="noopener noreferrer" className="block no-underline">
                    {Content}
                  </a>
                ) : (
                  <div key={label}>{Content}</div>
                );
              })}
            </div>

            <div className="rounded-sm overflow-hidden h-[300px] shadow-lg border border-beige relative group">
              <iframe
                title="Zafronix Safaris Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.183972172425!2d36.856334955419904!3d-1.2970756999999922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13004b9d7bf9%3A0xae93ab2ff5310a1!2sTHE%20HAMZA!5e0!3m2!1sen!2ske!4v1774261273499!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 border border-gray-50 h-fit">
            <div className="mb-10">
              <p className="section-label">Send A Message</p>
              <h3 className="font-serif text-3xl text-green-dark">How Can We Help?</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input {...register("name", { required: true })} placeholder="Full Name" className={inputClass} />
                  {errors.name && <p className="text-red-400 text-[0.7rem] mt-1">Required</p>}
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" placeholder="email@address.com" className={inputClass} />
                  {errors.email && <p className="text-red-400 text-[0.7rem] mt-1">Valid email required</p>}
                </div>
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <select {...register("subject")} className={inputClass + " appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22/%3E%3C/svg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"}>
                  <option>General Inquiry</option>
                  <option>Tour Booking</option>
                  <option>Custom Itinerary</option>
                  <option>Pricing Question</option>
                  <option>Partnership Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea {...register("message", { required: true })} rows={6} placeholder="How can our specialists assist you today?" className={`${inputClass} resize-none`} />
                {errors.message && <p className="text-red-400 text-[0.7rem] mt-1">Required</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-5 shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
              >
                <Send size={18} />
                <span className="tracking-widest uppercase">{isSubmitting ? "Processing..." : "Send via WhatsApp"}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}