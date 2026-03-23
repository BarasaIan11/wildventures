'use client'
import { useState } from 'react'
import { Calendar, Users, User, Mail, Send, Sparkles } from 'lucide-react'
import SuccessToast from './SuccessToast'

export default function BookingWidget({ tourTitle = '' }) {
  const emptyForm = { date: '', adults: '2', children: '0', name: '', email: '' }
  const [form, setForm] = useState(emptyForm)
  const [showToast, setShowToast] = useState(false)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const { name, email, date, adults, children } = form;
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
    if (!phoneNumber) {
      console.error("NEXT_PUBLIC_WHATSAPP_NUMBER is not configured");
      return;
    }

    const adultsNum = adults === "10+" ? "10+" : parseInt(adults);
    const childrenNum = children === "10+" ? "10+" : parseInt(children);
    const totalPax = (adults === "10+" || children === "10+")
      ? `${adultsNum} + ${childrenNum}`
      : parseInt(adults) + parseInt(children);
    const refId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const timestamp = new Date().toLocaleString("en-KE", { dateStyle: "medium", timeStyle: "short" });

    let text = `*SAFARI INQUIRY — ZAFRONIX SAFARIS*\n`;
    text += `*Ref:* #${refId}\n`;
    text += `*Date:* ${timestamp}\n\n`;

    text += `*INTERESTED IN:*\n`;
    text += `${tourTitle}\n\n`;

    text += `*CLIENT DETAILS*\n`;
    text += `*Name:* ${name}\n`;
    if (email) text += `*Email:* ${email}\n`;
    text += `\n`;

    text += `*TRIP DETAILS*\n`;
    text += `*Date:* ${date}\n`;
    text += `*Guests:* ${totalPax} Total (${adultsNum} Adults, ${childrenNum} Children)\n\n`;

    text += `_Sent via Zafronix Safaris official website_`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setForm(emptyForm);
    setShowToast(true);
  }

  return (
    <>
      <SuccessToast
        visible={showToast}
        title="Inquiry Drafted!"
        message="The form has been reset. Please complete the send action in WhatsApp."
        duration={5000}
        onClose={() => setShowToast(false)}
      />

      <div className="bg-white rounded-sm shadow-2xl overflow-hidden lg:sticky lg:top-28 z-10 border border-gray-100">
        {/* HEADER */}
        <div className="bg-green px-8 py-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-orange" />
            <p className="text-beige/60 text-[0.7rem] tracking-[0.3em] uppercase font-bold text-orange">Tailor-Made Travel</p>
          </div>
          <h3 className="font-serif text-3xl text-white font-light leading-tight mb-6">
            Inquire for Rates <br />& <span className="italic text-beige">Availability</span>
          </h3>
          <div className="pt-6 border-t border-white/10">
            <p className="text-[0.95rem] text-white/70 leading-relaxed font-light italic">
              Our safaris are individually tailored. We provide transparent pricing based on your specific travel dates and group requirements.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="p-8 space-y-8">
          {/* Travel Date */}
          <div className="space-y-1">
            <label className="text-[0.6rem] tracking-[0.2em] uppercase text-green font-bold flex items-center gap-2">
              <Calendar size={12} className="text-orange" /> Target Travel Date
            </label>
            <input type="date" name="date" value={form.date} onChange={handle} required className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-orange font-serif text-lg bg-transparent" />
          </div>

          {/* GUESTS: Adults & Children */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-green font-bold flex items-center gap-2">
                <User size={12} className="text-orange" /> Adults
              </label>
              <select name="adults" value={form.adults} onChange={handle} className="w-full border-b border-gray-100 py-3 focus:outline-none font-serif text-lg appearance-none bg-transparent">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-green font-bold flex items-center gap-2">
                <Users size={12} className="text-orange" /> Children
              </label>
              <select name="children" value={form.children} onChange={handle} className="w-full border-b border-gray-100 py-3 focus:outline-none font-serif text-lg appearance-none bg-transparent">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <label className="text-[0.6rem] tracking-[0.2em] uppercase text-green font-bold">Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handle} required placeholder="Name" className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-orange font-serif text-lg bg-transparent" />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-[0.6rem] tracking-[0.2em] uppercase text-green font-bold">Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handle} required placeholder="you@email.com" className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-orange font-serif text-lg bg-transparent" />
          </div>

          <button type="submit" className="btn btn-primary w-full py-6 shadow-xl group flex items-center justify-center gap-4">
            <span className="tracking-widest uppercase">Request Custom Quote</span>
            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <p className="text-center text-[0.65rem] text-gray-400 font-bold uppercase tracking-[0.2em]">
            Guaranteed Response within 24 hours
          </p>
        </form>
      </div>
    </>
  )
}