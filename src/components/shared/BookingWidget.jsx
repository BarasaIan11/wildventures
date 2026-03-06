'use client'
import { useState } from 'react'
import { Calendar, Users, Mail } from 'lucide-react'

export default function BookingWidget({ tourTitle = '', price = 0 }) {
  const [form, setForm] = useState({ date: '', travelers: '2', name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const total = price * parseInt(form.travelers || 1)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    
    const { name, email, date, travelers } = form;
    
    let text = `Hello Wild Ventures! I would like to book a safari.\n\n`;
    if (tourTitle) text += `Tour: ${tourTitle}\n`;
    text += `Name: ${name}\n`;
    text += `Email: ${email}\n`;
    text += `Travel Date: ${date}\n`;
    text += `Travelers: ${travelers}\n`;
    if (price > 0) text += `Estimated Total: $${total.toLocaleString()}\n`;

    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/254780166113?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="bg-white rounded-sm shadow-card-hover p-7 text-center">
      <div className="text-4xl mb-3">✅</div>
      <h3 className="font-serif text-xl text-green mb-2">Request Sent!</h3>
      <p className="text-sm text-gray-500">We'll contact you within 24 hours to confirm your booking.</p>
    </div>
  )

  return (
    <div className="bg-white rounded-sm shadow-card-hover overflow-hidden lg:sticky lg:top-24 z-10">
      {/* Header */}
      <div className="bg-green px-6 py-5">
        <p className="text-white/70 text-[0.75rem] tracking-[0.1em] uppercase mb-1">Starting from</p>
        <p className="font-serif text-3xl text-white font-light">
          ${price.toLocaleString()} <span className="text-base text-white/60">/ per person</span>
        </p>
      </div>

      <form onSubmit={submit} className="p-6 space-y-4">
        {/* Tour name (read-only display) */}
        {tourTitle && (
          <div className="bg-beige/50 rounded-sm px-4 py-3">
            <p className="text-[0.7rem] text-green tracking-widest uppercase mb-1">Tour</p>
            <p className="text-[0.88rem] text-charcoal font-medium leading-tight">{tourTitle}</p>
          </div>
        )}

        {/* Date */}
        <div>
          <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-green font-medium mb-1.5">
            Travel Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handle}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-sm text-[0.9rem]
                         focus:outline-none focus:border-green transition-colors"
            />
          </div>
        </div>

        {/* Travelers */}
        <div>
          <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-green font-medium mb-1.5">
            Number of Travelers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              name="travelers"
              value={form.travelers}
              onChange={handle}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-sm text-[0.9rem]
                         focus:outline-none focus:border-green transition-colors appearance-none bg-white"
            >
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n} {n===1?'Traveler':'Travelers'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-green font-medium mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handle}
            required
            placeholder="Full name"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-sm text-[0.9rem]
                       focus:outline-none focus:border-green transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-green font-medium mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handle}
              required
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-sm text-[0.9rem]
                         focus:outline-none focus:border-green transition-colors"
            />
          </div>
        </div>

        {/* Total */}
        {price > 0 && (
          <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
            <span className="text-[0.82rem] text-gray-500">Estimated Total</span>
            <span className="font-serif text-xl text-green">${total.toLocaleString()}</span>
          </div>
        )}

        <button type="submit" className="btn btn-primary w-full text-center">
          Book This Safari
        </button>

        <p className="text-center text-[0.75rem] text-gray-400 leading-relaxed">
          Free cancellation · No payment required now<br />
          Our team will confirm within 24 hours
        </p>
      </form>
    </div>
  )
}
