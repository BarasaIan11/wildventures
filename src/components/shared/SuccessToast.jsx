'use client'
import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

/**
 * SuccessToast
 * Animated overlay popup that auto-dismisses after `duration` ms.
 * Calls `onClose` when it finishes so the parent can reset the form.
 *
 * Props:
 *  - visible   {boolean}  whether the toast is shown
 *  - title     {string}   headline text
 *  - message   {string}   body text
 *  - duration  {number}   ms before auto-close (default 4000)
 *  - onClose   {fn}       called when the toast finishes
 */
export default function SuccessToast({
  visible,
  title = 'Sent!',
  message = "We'll be in touch soon.",
  duration = 4000,
  onClose,
}) {
  const [progress, setProgress] = useState(100)
  const [show, setShow]         = useState(false)

  // Animate in on mount
  useEffect(() => {
    if (visible) {
      setProgress(100)
      setShow(true)

      // Shrink the progress bar
      const tick = 50
      const steps = duration / tick
      let step = 0
      const interval = setInterval(() => {
        step++
        setProgress(Math.max(0, 100 - (step / steps) * 100))
      }, tick)

      // Auto-close
      const timer = setTimeout(() => {
        setShow(false)
        setTimeout(() => onClose?.(), 300) // wait for fade-out
      }, duration)

      return () => {
        clearInterval(interval)
        clearTimeout(timer)
      }
    } else {
      setShow(false)
    }
  }, [visible, duration, onClose])

  if (!visible) return null

  return (
    // Backdrop
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center px-5 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
      style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0,0,0,0.45)' }}
      onClick={() => { setShow(false); setTimeout(() => onClose?.(), 300) }}
    >
      {/* Card */}
      <div
        className={`relative bg-white rounded-sm shadow-2xl max-w-sm w-full overflow-hidden
          transition-all duration-300 ${show ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1.5 bg-green w-full" />

        <div className="px-8 py-10 text-center">
          {/* Icon */}
          <div className="flex items-center justify-center mb-5">
            <span className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-green" strokeWidth={1.5} />
            </span>
          </div>

          <h3 className="font-serif text-2xl text-green mb-2">{title}</h3>
          <p className="text-gray-500 text-[0.9rem] leading-relaxed">{message}</p>

          <p className="mt-5 text-[0.75rem] text-gray-300">
            This window will close automatically…
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-orange transition-all"
            style={{ width: `${progress}%`, transitionDuration: '50ms' }}
          />
        </div>
      </div>
    </div>
  )
}
