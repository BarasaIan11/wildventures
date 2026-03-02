'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

export default function ItineraryAccordion({ itinerary }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-2">
      {itinerary.map((item, i) => (
        <div key={i} className="border border-gray-100 rounded-sm overflow-hidden">
          <button
            className={clsx(
              'w-full flex items-center justify-between px-6 py-4 text-left transition-colors',
              open === i ? 'bg-green text-white' : 'bg-white hover:bg-beige/40'
            )}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="flex items-center gap-4">
              <span className={clsx(
                'text-[0.7rem] tracking-[0.1em] uppercase font-medium px-2.5 py-1 rounded-sm',
                open === i ? 'bg-white/20 text-white' : 'bg-beige text-green'
              )}>
                Day {item.day}
              </span>
              <span className={clsx('font-medium text-[0.95rem]', open === i ? 'text-white' : 'text-charcoal')}>
                {item.title}
              </span>
            </div>
            <ChevronDown className={clsx(
              'w-5 h-5 flex-shrink-0 transition-transform duration-300',
              open === i ? 'rotate-180 text-white' : 'text-gray-400'
            )} />
          </button>

          {open === i && (
            <div className="px-6 py-5 bg-white border-t border-gray-100">
              <p className="text-[0.9rem] text-gray-500 leading-[1.75]">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
