'use client'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'

export default function RevealWrapper({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={clsx('reveal', className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
