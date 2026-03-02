import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users } from 'lucide-react'
import clsx from 'clsx'

export default function TourCard({ tour, featured = false }) {
  const { slug, badge, badgeStyle, title, destination, duration, maxGroup, price, image, summary } = tour

  return (
    <Link href={`/tours/${slug}`} className={clsx('card group block', featured && 'md:col-span-2')}>
      {/* Image */}
      <div className="overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          width={featured ? 900 : 700}
          height={featured ? 480 : 380}
          className={clsx(
            'w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]',
            featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          )}
        />
        {/* Badge */}
        {badge && (
          <span className={clsx(
            'absolute top-3.5 left-3.5 badge',
            badgeStyle === 'green' ? 'badge-green' : 'badge-orange'
          )}>
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-2.5">
          <span className="flex items-center gap-1 text-[0.75rem] text-gray-400">
            <MapPin className="w-3 h-3" /> {destination}
          </span>
          <span className="flex items-center gap-1 text-[0.75rem] text-gray-400">
            <Clock className="w-3 h-3" /> {duration}
          </span>
          <span className="flex items-center gap-1 text-[0.75rem] text-gray-400">
            <Users className="w-3 h-3" /> Max {maxGroup}
          </span>
        </div>

        {/* Title */}
        <h3 className={clsx(
          'font-serif font-light text-charcoal leading-[1.25] mb-2',
          featured ? 'text-[1.65rem]' : 'text-[1.35rem]'
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-[0.87rem] text-gray-500 leading-[1.65] mb-5 line-clamp-2">{summary}</p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <span className="font-serif text-[1.2rem] text-green">${price.toLocaleString()}</span>
            <span className="text-[0.75rem] text-gray-400 ml-1">/ per person</span>
          </div>
          <span className="text-[0.77rem] tracking-[0.08em] uppercase text-orange font-medium
                           flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
            View Itinerary <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
