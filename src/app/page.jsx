import HeroSection      from '@/components/home/HeroSection'
import SearchBar        from '@/components/home/SearchBar'
import StatsBar         from '@/components/home/StatsBar'
import FeaturedTours    from '@/components/home/FeaturedTours'
import WhyChooseUs      from '@/components/home/WhyChooseUs'
import TopDestinations  from '@/components/home/TopDestinations'
import Testimonials     from '@/components/home/Testimonials'
import Gallery          from '@/components/home/Gallery'
import BookingCTA       from '@/components/home/BookingCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <StatsBar />
      <FeaturedTours />
      <WhyChooseUs />
      <TopDestinations />
      <Testimonials />
      <Gallery />
      <BookingCTA />
    </>
  )
}
