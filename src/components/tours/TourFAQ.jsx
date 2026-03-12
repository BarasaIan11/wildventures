"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// FAQ DATA — grouped by destination/topic
// Questions are what international tourists actually Google
// before booking a safari. Organised by destination slug
// so each tour shows relevant questions.
// ─────────────────────────────────────────────────────────────

const GENERAL_FAQS = [
  {
    q: "What is included in the tour price?",
    a: "All park and conservation fees, airport transfers, full-board meals during the safari, an expert naturalist guide, and a private 4x4 safari vehicle are included. International flights, travel insurance, personal spending, gratuities, and any optional extras (such as a hot air balloon ride) are not included.",
  },
  {
    q: "Do I need travel insurance for a safari?",
    a: "Yes — travel insurance is strongly recommended and considered essential for any East Africa safari. Your policy should cover medical evacuation, trip cancellation, and loss of belongings. We recommend purchasing insurance at the time of booking so cancellation cover applies immediately.",
  },
  {
    q: "What is the best time of year to go on safari?",
    a: "East Africa offers excellent wildlife viewing year-round. The dry seasons (June–October and January–February) offer the best general game viewing as animals gather around water sources and vegetation is lower. July–October is peak season for the Great Migration river crossings between Tanzania and Kenya. January–February is excellent for the calving season in the Serengeti.",
  },
  {
    q: "How do I get to Kenya or Tanzania?",
    a: "Kenya is served by Jomo Kenyatta International Airport (NBO) in Nairobi, with direct flights from London, Amsterdam, Dubai, Doha, and several other major hubs. Tanzania is served by Kilimanjaro International Airport (JRO) near Arusha and Julius Nyerere International Airport (DAR) in Dar es Salaam. We arrange all transfers once you arrive.",
  },
  {
    q: "How much spending money will I need?",
    a: "Since meals, transport, and activities are included, daily spending money is primarily for drinks beyond meals, souvenirs, laundry, and gratuities. We suggest budgeting $50–$100 USD per day for these extras. Most lodges and camps accept credit cards, and USD cash is widely accepted.",
  },
  {
    q: "Is it safe to go on safari in East Africa?",
    a: "Kenya and Tanzania are among the most visited tourist destinations in Africa and are considered safe for travellers. The safari areas themselves are well managed and our guides are experienced in wildlife safety. We stay informed of any local conditions and brief all guests thoroughly before departure. Standard travel precautions apply as with any international destination.",
  },
  {
    q: "What vaccinations do I need?",
    a: "We strongly recommend consulting a travel health clinic or GP at least 6–8 weeks before departure. Commonly recommended vaccinations for East Africa include Hepatitis A, Typhoid, and Yellow Fever (required if arriving from certain countries). Malaria prophylaxis is recommended for most safari areas. Requirements vary by nationality and itinerary.",
  },
  {
    q: "What should I pack for a safari?",
    a: "Key items include neutral-coloured lightweight clothing (khaki, olive, beige — avoid bright colours and white), a warm layer for early morning drives, sun hat, sunscreen, insect repellent, binoculars, and a good camera. Most camps offer laundry services on longer trips. We send a detailed packing list to all guests after booking.",
  },
  {
    q: "Can I customise this itinerary?",
    a: "Absolutely. All our tours can be fully tailored — we can adjust the duration, add or remove destinations, upgrade accommodation, include a Zanzibar beach extension, or build something entirely bespoke from scratch. Visit our Plan Your Safari page or contact us directly to discuss your ideal trip.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Bookings cancelled more than 60 days before departure receive a full refund minus a small administration fee. Cancellations between 30–60 days forfeit 50% of the total. Cancellations within 30 days are non-refundable. We strongly recommend travel insurance that covers cancellation. For full details, please contact us.",
  },
];

const KENYA_FAQS = [
  {
    q: "When is the best time to visit the Masai Mara?",
    a: "The Masai Mara is excellent year-round, but the most sought-after period is July to October when the Great Migration is in full flow and river crossings happen frequently. January to February is the 'green season' — fewer tourists, lush landscapes, and excellent big cat activity as prey is abundant. June offers the start of the dry season with very good game viewing.",
  },
  {
    q: "How many game drives are included per day?",
    a: "On most Kenya itineraries you will have at least two game drives per day — an early morning drive starting at dawn (when predators are most active) and an afternoon/evening drive. Full-day drives with a packed bush lunch are offered on key days. Night drives may be available in private conservancies outside the national reserves.",
  },
  {
    q: "What is a private conservancy and why is it better than the main reserve?",
    a: "Private conservancies are large, community-owned lands bordering the Masai Mara. They offer exclusive access with far fewer vehicles — sometimes you are the only vehicle at a sighting. Night drives, bush walks, and off-road driving (not permitted in the national reserve) are also allowed. Our luxury itineraries use these conservancies for a more intimate experience.",
  },
  {
    q: "Do I need a visa to visit Kenya?",
    a: "Most nationalities now require an Electronic Travel Authorisation (eTA) rather than a traditional visa to enter Kenya. This is applied for online before travel at etakenya.go.ke and costs $30 USD. We recommend applying at least 2 weeks before departure. Please check current requirements for your specific nationality.",
  },
];

const TANZANIA_FAQS = [
  {
    q: "When is the Great Migration in Tanzania?",
    a: "The wildebeest are in Tanzania's Serengeti for most of the year. The calving season in the southern Serengeti (Ndutu area) runs from January to March — arguably the most dramatic period with newborn wildebeest and intense predator activity. The herds move north through the central Serengeti from April to June, and reach the northern Mara River crossing zone from July onwards before moving into Kenya.",
  },
  {
    q: "What is the difference between the Serengeti and Ngorongoro Crater?",
    a: "The Serengeti is a vast 30,000 sq km ecosystem — open plains, kopje rock formations, and the stage for the Great Migration. The Ngorongoro Crater is an ancient collapsed volcano forming a natural enclosure of about 260 sq km. The crater has an extraordinary density of wildlife including some of Africa's last free-roaming black rhino. Both are very different experiences and ideally visited together.",
  },
  {
    q: "Do I need a visa for Tanzania?",
    a: "Most nationalities require a tourist visa for Tanzania, which can be obtained online through the Tanzania Immigration portal before travel (recommended) or on arrival. The cost is typically $50–$100 USD depending on nationality. East African Community members (including Kenyan and Ugandan citizens) do not require a visa. Please verify current requirements for your nationality.",
  },
  {
    q: "Can I combine Tanzania with Zanzibar?",
    a: "Yes — and we highly recommend it. Zanzibar is a 2-hour charter flight or 45-minute scheduled flight from the Serengeti/Arusha area. A 3–5 night Zanzibar beach extension after a Tanzania safari is one of the most popular combinations we offer. The contrast between dusty savanna and Indian Ocean turquoise is extraordinary. See our Zanzibar Beach & Safari Combo tour.",
  },
];

const ZANZIBAR_FAQS = [
  {
    q: "When is the best time to visit Zanzibar?",
    a: "Zanzibar has two dry seasons — June to October and December to February — both ideal for beach holidays with calm seas and sunny skies. The long rains (March–May) can make beach activities less enjoyable and some water sports operators close. July to September is peak season for humpback whale sightings offshore. Sea temperature is a warm 26–29°C year-round.",
  },
  {
    q: "What is there to do in Zanzibar beyond the beach?",
    a: "Stone Town, Zanzibar's ancient Arab trading capital, is a UNESCO World Heritage Site and one of East Africa's most fascinating urban environments — a labyrinth of carved wooden doorways, mosques, spice markets, and crumbling merchant palaces. Spice plantation tours, dolphin swimming at Kizimkazi, snorkelling and diving at Mnemba Atoll, traditional dhow cruises, and Prison Island giant tortoise visits are all popular activities.",
  },
  {
    q: "Which part of Zanzibar has the best beaches?",
    a: "Nungwi and Kendwa on the north coast have the best year-round swimming as the tide doesn't go out as far — ideal if you want to swim at any time of day. The east coast (Paje, Jambiani) has stunning white-sand beaches and is the best area for kite surfing. The south coast is quieter and more remote. We match guests to the right area based on their priorities.",
  },
];

const FAMILY_FAQS = [
  {
    q: "Is a safari suitable for young children?",
    a: "Yes, with the right planning. Most family-friendly camps and lodges welcome children of all ages and offer specially designed activities such as junior ranger programmes, bush walks tailored to young guests, and wildlife quizzes. Game drives are naturally engaging for children. We design family itineraries with age-appropriate activities, shorter drives, and family-suite accommodation.",
  },
  {
    q: "What is the minimum age for a safari?",
    a: "Most camps welcome children of all ages on private family safaris. For shared game drives in national reserves, some operators set a minimum age of 6 or 8 years. Gorilla trekking requires participants to be at least 15 years old. We will advise on any age restrictions relevant to your specific itinerary.",
  },
];

// ─────────────────────────────────────────────────────────────
// FAQ SELECTOR — picks relevant questions based on tour data
// ─────────────────────────────────────────────────────────────
function getFAQsForTour(tour) {
  let faqs = [...GENERAL_FAQS];

  // Add destination-specific FAQs
  if (tour.destinationSlugs.includes("kenya")) {
    faqs = [...faqs, ...KENYA_FAQS];
  }
  if (
    tour.destinationSlugs.includes("tanzania") ||
    tour.destinationSlugs.includes("zanzibar")
  ) {
    faqs = [...faqs, ...TANZANIA_FAQS];
  }
  if (tour.destinationSlugs.includes("zanzibar")) {
    faqs = [...faqs, ...ZANZIBAR_FAQS];
  }

  // Add family FAQs for family-style tours
  if (tour.style === "Family") {
    faqs = [...faqs, ...FAMILY_FAQS];
  }

  // Deduplicate by question text (in case of Kenya+Tanzania tours)
  const seen = new Set();
  return faqs.filter((f) => {
    if (seen.has(f.q)) return false;
    seen.add(f.q);
    return true;
  });
}

// ─────────────────────────────────────────────────────────────
// ACCORDION ITEM
// ─────────────────────────────────────────────────────────────
function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className="border-b border-beige/60 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex items-start gap-4">
          <span className="text-orange text-[0.75rem] font-bold tracking-widest mt-1 flex-shrink-0 w-5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-serif text-[1.05rem] text-charcoal group-hover:text-green transition-colors duration-200 leading-snug">
            {faq.q}
          </span>
        </span>
        <ChevronDown
          className={`w-5 h-5 text-orange flex-shrink-0 mt-0.5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer — animated expand */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[0.95rem] text-gray-500 leading-[1.85] font-light pl-9">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function TourFAQ({ tour }) {
  const faqs = getFAQsForTour(tour);
  // First item open by default — improves engagement & shows Google there's content
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section aria-label="Frequently Asked Questions">
      {/* FAQ Page JSON-LD schema — enables Google FAQ rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <p className="section-label">Before You Book</p>
      <h2 className="section-title mb-10">
        Frequently Asked <em>Questions</em>
      </h2>

      <div className="bg-white rounded-sm border border-beige/60 shadow-card px-8">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      {/* CTA below FAQ */}
      <div className="mt-8 bg-beige/40 rounded-sm p-6 border border-beige/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-serif text-[1.1rem] text-charcoal mb-1">
            Still have questions?
          </p>
          <p className="text-[0.88rem] text-gray-500 font-light">
            Our safari specialists are available Mon–Sat, 8am–6pm EAT.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-[0.85rem] py-3 px-5 whitespace-nowrap"
          >
            💬 WhatsApp Us
          </a>
          <a
            href="/contact"
            className="btn btn-outline text-[0.85rem] py-3 px-5 whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}