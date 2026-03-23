import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B3A2D", // Your green brand colour — shows in mobile browser chrome
};


// GLOBAL SITE METADATA
// Every page inherits these. Individual pages override with
// their own metadata export — the template handles the title.

export const metadata = {
  // Title template: page titles become "Page Name | Zafronix Safaris"
  title: {
    default: "Zafronix Safaris — Kenya & Tanzania Safari Specialists",
    template: "%s | Zafronix Safaris",
  },

  // Default meta description 
  description:
    "Zafronix Safaris crafts tailor-made Kenya, Tanzania & Zanzibar safari experiences for international travellers. Expert guides, luxury camps & unforgettable wildlife encounters since 2023.",

  // Keywords 
  keywords: [
    "Kenya safari",
    "Tanzania safari",
    "Zanzibar beach safari",
    "East Africa safari packages",
    "Masai Mara safari",
    "Serengeti safari",
    "luxury safari Kenya",
    "family safari Kenya Tanzania",
    "Great Migration safari",
    "Zafronix Safaris safari",
    "safari company Nairobi",
    "best safari company East Africa",
  ],

  // ── Canonical base URL
  // Prevents duplicate content issues across http/https/www variants
  metadataBase: new URL("https://zafronixsafari.com"),
  alternates: {
    canonical: "/",
  },

  // ── Robots — tell Google to index everything
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large", // Allow large image previews in Google Search
      "max-snippet": -1,            // Allow full-length text snippets
      "max-video-preview": -1,
    },
  },

  // ── Open Graph — controls how links look when shared on
  // WhatsApp, Facebook, LinkedIn, iMessage etc.
  // International clients sharing your site with friends
  // will see a rich preview with image + description
  openGraph: {
    title: "Zafronix Safaris — Kenya & Tanzania Safari Specialists",
    description:
      "Tailor-made Kenya, Tanzania & Zanzibar safaris crafted for international travellers. Expert guides, luxury camps & life-changing wildlife encounters.",
    url: "https://zafronixsafari.com",
    siteName: "Zafronix Safaris And Travels Limited.",
    images: [
      {
        url: "/images/hero/story-main.png", // metadataBase prepends the domain
        width: 1200,
        height: 630,
        alt: "Lions at sunset in the Serengeti — Zafronix Safaris Safari",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // ── Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Zafronix Safaris — Kenya & Tanzania Safari Specialists",
    description:
      "Tailor-made Kenya, Tanzania & Zanzibar safaris for international travellers. Life-changing wildlife encounters since 2023.",
    images: ["/images/hero/story-main.png"],
    site: "@ZafronixSafaris",
    creator: "@ZafronixSafaris",
  },

  // ── Favicons & app icons
  // Place these files in your /public folder
  icons: {
    icon: [
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
        color: "#1B3A2D",
      },
    ],
  },

  // ── Web app manifest (for "Add to Home Screen" on mobile)
  manifest: "/manifest.json",

  // ── Google Search Console verification
  // IMPORTANT: Replace this placeholder with your real token from:
  // search.google.com/search-console → Add Property → HTML tag method
  // Copy only the content="..." value, paste it below
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },

  // ── Additional meta tags
  other: {
    // Tells browsers this is a travel/safari business
    "application-name": "Zafronix Safaris",
    // Prevents phone number auto-detection reformatting your content
    "format-detection": "telephone=no",
    // Geographic targeting — helps local East Africa searches
    "geo.region": "KE",
    "geo.placename": "Nairobi",
    "geo.position": "-1.2921;36.8219",
    "ICBM": "-1.2921, 36.8219",
  },
};


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
  );
}