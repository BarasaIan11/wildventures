import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: { default: "WildVentures — Experience Africa's Wild Beauty", template: '%s | WildVentures' },
  description: 'Curated safari experiences across East and Southern Africa. Luxury, mid-range and family safaris in Kenya, Tanzania, Rwanda, Uganda and more.',
  keywords: 'safari, Africa, Kenya, Tanzania, Rwanda, Uganda, wildlife, tour, adventure',
  openGraph: {
    title: "WildVentures — Experience Africa's Wild Beauty",
    description: 'Curated safari experiences across East and Southern Africa.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
