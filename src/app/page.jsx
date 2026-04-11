import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/home/SearchBar";
import StatsBar from "@/components/home/StatsBar";
import FeaturedTours from "@/components/home/FeaturedTours";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TopDestinations from "@/components/home/TopDestinations";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import BookingCTA from "@/components/home/BookingCTA";

// SEO METADATA
// The layout.jsx title.default already covers the homepage title,
// but we override here with a more keyword-rich version.
export const metadata = {
  title: "Kenya & Tanzania Safari Tours — East Africa's Safari Specialists",
  description:
    "Tailor-made Kenya, Tanzania & Zanzibar safari holidays for international travellers. Masai Mara, Serengeti, Ngorongoro & more. Expert guides, luxury camps.",
  alternates: {
    canonical: "https://zafronixsafari.com",
  },
  openGraph: {
    title: "Kenya & Tanzania Safari Tours",
    description:
      "Tailor-made Kenya, Tanzania & Zanzibar safari holidays. Masai Mara, Serengeti, Ngorongoro & more. Expert guides, luxury camps.",
    url: "https://zafronixsafari.com",
  },
};

const phoneNumber = "254722319565";

// JSON-LD — WebSite schema enables Google Sitelinks search box
// This can show a search bar directly in Google results
function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://zafronixsafari.com/#website",
        url: "https://zafronixsafari.com",
        name: "Zafronix Safaris And Travels Limited.",
        description:
          "East Africa's premier safari company. Tailor-made Kenya, Tanzania & Zanzibar safari experiences since 2023.",
        publisher: { "@id": "https://zafronixsafari.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://zafronixsafari.com/tours?destination={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "TravelAgency",
        "@id": "https://zafronixsafari.com/#organization",
        name: "Zafronix Safaris And Travels Limited.",
        url: "https://zafronixsafari.com",
        logo: {
          "@type": "ImageObject",
          url: "https://zafronixsafari.com/logo.png",
          width: 200,
          height: 60,
        },
        image: "https://zafronixsafari.com/images/hero/story-main.png",
        description:
          "Zafronix Safaris is East Africa's premier safari company, specialising in tailor-made Kenya, Tanzania and Zanzibar safari experiences since 2023.",
        foundingDate: "2023",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hamza House Along Jogoo Road",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        telephone: `+${phoneNumber}`,
        email: "info@zafronixsafari.com",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        priceRange: "$$$",
        currenciesAccepted: "USD",
        areaServed: ["Kenya", "Tanzania", "Zanzibar", "Rwanda", "Uganda"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "3200",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [`https://wa.me/${phoneNumber}`],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


export default function HomePage() {
  return (
    <>
      <HomeSchema />
      <HeroSection />
      <SearchBar />
      {/* <StatsBar /> */}
      <FeaturedTours />
      <WhyChooseUs />
      <TopDestinations />
      <Testimonials />
      <Gallery />
      <BookingCTA />
    </>
  );
}