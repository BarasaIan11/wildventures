'use client'
import { useState } from 'react'
import { Calendar, Users, Mail, Info, Send, Sparkles } from 'lucide-react'
import SuccessToast from './SuccessToast'

export default function BookingWidget({ tourTitle = '' }) {
  const emptyForm = { date: '', travelers: '2', name: '', email: '' }
  const [form, setForm] = useState(emptyForm)
  const [showToast, setShowToast] = useState(false)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const { name, email, date, travelers } = form;
    const phoneNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";
    if (!phoneNumber) return;

    let text = `Hello Zafronix Safaris! I am looking for a custom quote for:\n\n`;
    text += `Adventure: ${tourTitle}\n`;
    text += `Name: ${name}\n`;
    text += `Proposed Date: ${date}\n`;
    text += `Travelers: ${travelers}\n`;
    text += `\nPlease let me know the seasonal rates for this itinerary.`;

    const popup = window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (!popup || popup.closed || typeof popup.closed === "undefined") return;
    setShowToast(true)
  }

  return (
    <>
      <SuccessToast
        visible={showToast}
        title="Inquiry Received!"
        message="A specialist will provide a custom quote within 24 hours."
        duration={5000}
        onClose={() => { setShowToast(false); setForm(emptyForm); }}
      />

      <div className="bg-white rounded-sm shadow-2xl overflow-hidden lg:sticky lg:top-28 z-10 border border-gray-100">
        {/* HEADER */}
        <div className="bg-green px-8 py-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-orange" />
            <p className="text-beige/60 text-[0.65rem] tracking-[0.4em] uppercase font-bold">Tailor-Made Travel</p>
          </div>
          <h3 className="font-serif text-3xl text-white font-light leading-tight mb-6">
            Request Your <br /><span className="italic text-beige">Private Quote</span>
          </h3>
          <div className="pt-6 border-t border-white/10">
            <p className="text-[0.95rem] text-white/70 leading-relaxed font-light italic">
              Our safaris are individually tailored to your preferences.
              We provide transparent, all-inclusive pricing based on your
              specific travel dates and group requirements.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="p-8 space-y-8">
          <div className="space-y-1">
            <label htmlFor="travel-date" className="text-[0.65rem] tracking-[0.2em] uppercase text-green font-bold flex items-center gap-2">
              <Calendar size={12} className="text-orange" /> Target Travel Date
            </label>
            <input id="travel-date" type="date" name="date" value={form.date} onChange={handle} required className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-orange font-serif italic text-lg" />
          </div>

          <div className="space-y-1">
            <label htmlFor="traveler-count" className="text-[0.65rem] tracking-[0.2em] uppercase text-green font-bold flex items-center gap-2">
              <Users size={12} className="text-orange" /> Number of Guests
            </label>
            <select id="traveler-count" name="travelers" value={form.travelers} onChange={handle} className="w-full border-b border-gray-100 py-3 focus:outline-none font-serif italic text-lg appearance-none bg-transparent">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="full-name" className="text-[0.65rem] tracking-[0.2em] uppercase text-green font-bold">Full Name</label>
            <input id="full-name" type="text" name="name" value={form.name} onChange={handle} required placeholder="Name" className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-orange font-serif italic text-lg" />
          </div>

          <button type="submit" className="btn btn-primary w-full py-6 shadow-xl group flex items-center justify-center gap-4">
            <span className="tracking-widest">Inquire Now</span>
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