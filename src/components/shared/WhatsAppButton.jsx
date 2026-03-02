'use client'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700123456'}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-7 right-7 z-[998] w-14 h-14 rounded-full bg-[#25D366]
                 flex items-center justify-center text-white text-2xl
                 shadow-[0_6px_24px_rgba(37,211,102,0.4)]
                 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(37,211,102,0.5)]
                 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      💬
      {hovered && (
        <span className="absolute right-[calc(100%+12px)] bg-charcoal text-white text-[0.78rem]
                         px-3 py-2 rounded-sm whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      )}
    </a>
  )
}
