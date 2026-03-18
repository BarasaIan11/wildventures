'use client'
import { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import clsx from 'clsx'

export default function TourFAQ({ tour }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      q: `Best time of year for this ${tour.destination} safari?`,
      a: `Peak wildlife viewing in ${tour.destination} aligns with the dry season, however, each month offers unique highlights from the Great Migration to lush green landscapes. Our experts can advise on the specific window that suits your goals.`
    },
    {
      q: "Why are prices not listed?",
      a: "We specialize in bespoke travel. Factors like seasonal lodge rates, regional flight availability, and your specific group requirements mean a fixed price rarely reflects the true value of your custom journey. We provide accurate, transparent quotes within 24 hours of your inquiry."
    },
    {
      q: "Is this trip suitable for my fitness level?",
      a: tour.style === 'Luxury'
        ? "This is a low-impact luxury experience. You'll travel in custom 4x4 vehicles with minimal walking required, unless you choose to participate in a guided bush walk."
        : "This safari involves moderate activity. Most time is spent in vehicles, though some light walking and potentially long road days are part of the adventure."
    },
    {
      q: "Are the internal transfers included?",
      a: "Absolutely. All ground transportation, including airport meet-and-greets and private 4x4 safari travel with your dedicated guide, is fully included in the quote."
    }
  ]

  return (
    <section className="pt-24 border-t border-gray-100">
      {/* Header aligned with Homepage style */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-orange" />
          <p className="text-[0.7rem] tracking-[0.2em] uppercase font-bold text-orange">Essential Knowledge</p>
        </div>
        <h2 className="font-serif text-[2.6rem] text-green-dark leading-tight">Frequently Asked <br /><span className="italic font-normal">Questions</span></h2>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
        {faqData.map((item, i) => (
          <div key={i} className="border-b border-gray-100 py-8 group">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-start justify-between text-left"
            >
              <span className="font-serif text-[1.25rem] text-charcoal pr-6 group-hover:text-green transition-colors leading-snug">
                {item.q}
              </span>
              <div className="mt-1 flex-shrink-0">
                {openIndex === i ? (
                  <Minus size={20} className="text-orange" strokeWidth={1.5} />
                ) : (
                  <Plus size={20} className="text-beige-dark group-hover:text-orange transition-colors" strokeWidth={1.5} />
                )}
              </div>
            </button>

            <div className={clsx(
              "grid transition-all duration-500 ease-in-out",
              openIndex === i ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
            )}>
              <div className="overflow-hidden">
                <p className="text-[0.95rem] text-gray-500 leading-relaxed font-light pr-10">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONSULTATIVE FOOTER: Redesigned for Minimalism (Uwanda Style) */}
      <div className="mt-20 py-12 border-t border-beige/40 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex gap-6 max-w-xl">
          <div className="hidden md:block w-[1px] h-20 bg-orange/30 shrink-0" />
          <div>
            <h3 className="font-serif text-[1.5rem] text-green-dark mb-3">Still have questions?</h3>
            <p className="text-[0.95rem] text-gray-500 font-light leading-relaxed">
              Logistics, health requirements, or seasonal variations—our specialists have the answers you need to feel fully prepared.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end shrink-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-[0.8rem] tracking-[0.2em] uppercase font-bold text-orange hover:text-green-dark transition-all"
          >
            <span>Consult an Expert</span>
            <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="w-full h-px bg-orange/20 mt-2 group-hover:bg-green/20" />
        </div>
      </div>
    </section>
  )
}