'use client'
import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import clsx from 'clsx'

export default function ItineraryAccordion({ itinerary }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-4">
      {itinerary.map((item, i) => (
        <div key={i} className="border border-gray-100 rounded-sm overflow-hidden bg-white shadow-sm transition-all duration-300">
          <button
            className={clsx(
              'w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-500',
              open === i ? 'bg-green text-white' : 'bg-white hover:bg-ivory'
            )}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="flex items-center gap-5">
              <div className={clsx(
                'flex flex-col items-center justify-center w-12 h-12 rounded-sm border transition-colors',
                open === i ? 'bg-white/10 border-white/20' : 'bg-beige/30 border-beige'
              )}>
                <span className="text-[0.6rem] uppercase tracking-tighter opacity-60">Day</span>
                <span className="text-lg font-serif leading-none">{item.day}</span>
              </div>
              <span className={clsx('font-serif text-[1.2rem] tracking-tight', open === i ? 'text-white' : 'text-charcoal')}>
                {item.title}
              </span>
            </div>
            <ChevronDown className={clsx(
              'w-5 h-5 flex-shrink-0 transition-transform duration-500',
              open === i ? 'rotate-180 text-white' : 'text-gray-300'
            )} />
          </button>

          <div className={clsx(
            "grid transition-all duration-500 ease-in-out",
            open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}>
            <div className="overflow-hidden">
              <div className="px-8 py-8 md:px-20 border-t border-gray-50 bg-ivory/10">
                <p className="text-[1.05rem] text-gray-600 leading-[1.8] font-light">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-orange font-bold">
                  <MapPin size={12} />
                  <span>Key Location Highlighted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}