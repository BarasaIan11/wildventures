export default function SectionHeader({ label, title, subtitle, light = false, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <p className={`section-label ${light ? 'light' : ''} ${center ? 'justify-center' : ''}`}>
          {center && <span className="w-6 h-px bg-orange block" />}
          {label}
        </p>
      )}
      <h2 className={`section-title ${light ? 'white' : ''}`}
        dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && (
        <p className={`section-sub ${light ? '!text-white/60' : ''} ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
