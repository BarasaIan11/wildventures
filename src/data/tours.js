export const tours = [
  {
    id: 1,
    slug: "great-migration-serengeti-masai-mara",
    badge: "Bestseller",
    badgeStyle: "green",
    title: "The Great Migration — Serengeti & Masai Mara",
    destination: "Kenya · Tanzania",
    destinationSlugs: ["kenya", "tanzania"],
    duration: "10 Days",
    maxGroup: 8,
    price: 3850,
    style: "Luxury",
    image: "/images/tours/migration.png",
    heroImage: "/images/tours/migration.png",
    gallery: [
      "/images/hero/hero-main.png",
      "/images/hero/about-hero.png",
      "/images/gallery/gallery-2.png",
      "/images/tours/family-safari.png",
    ],
    summary:
      "Witness one of nature's greatest spectacles as millions of wildebeest thunder across the Serengeti plains into Kenya's Masai Mara. An experience that will stay with you forever.",
    highlights: [
      "Great Migration river crossings",
      "Big Five game drives",
      "Masai village cultural visit",
      "Optional hot air balloon safari",
    ],
    wildlife: [
      "Wildebeest",
      "Lion",
      "Leopard",
      "Elephant",
      "Cape Buffalo",
      "Cheetah",
    ],
    accommodation: "Luxury tented camps & lodges",
    accommodationDetails:
      "Nights 1–2: Nairobi hotel. Nights 3–7: Serengeti luxury tented camp. Nights 8–10: Masai Mara private conservancy camp.",
    included: [
      "All park fees",
      "Airport transfers",
      "Full-board meals in bush",
      "Expert naturalist guide",
      "4x4 safari vehicle",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal spending",
      "Balloon safari (optional $450)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description:
          "Welcome at Jomo Kenyatta Airport. Transfer to your hotel. Evening welcome dinner and detailed safari briefing with your guide.",
      },
      {
        day: 2,
        title: "Fly to Serengeti",
        description:
          "Morning charter flight into the Serengeti. Afternoon game drive in the southern plains — lions, cheetahs, and vast herds of zebra.",
      },
      {
        day: 3,
        title: "Central Serengeti",
        description:
          "Full day exploring the Seronera area, the heart of the Serengeti. Known for its year-round resident lion prides and leopards in the fever trees.",
      },
      {
        day: 4,
        title: "Following the Herds",
        description:
          "Your guide tracks the wildebeest columns northward. Sundowner drinks on a kopje as the sun sets over the plains.",
      },
      {
        day: 5,
        title: "Balloon Safari Day",
        description:
          "Optional dawn hot air balloon over the Serengeti, followed by a champagne bush breakfast. Afternoon at leisure.",
      },
      {
        day: 6,
        title: "North to the Mara River",
        description:
          "Drive north to the Mara River zone. Set up position at the crossing points as the first herds begin to gather.",
      },
      {
        day: 7,
        title: "River Crossing Day",
        description:
          "Spend a full day at the Mara River. The tension builds — then pandemonium as thousands plunge into the croc-filled water.",
      },
      {
        day: 8,
        title: "Into the Masai Mara",
        description:
          "Cross into Kenya's Masai Mara. Afternoon game drive in the world-famous reserve.",
      },
      {
        day: 9,
        title: "Full Day in the Mara",
        description:
          "Dawn-to-dusk game drives. Optional Masai village visit in the afternoon. Bush dinner under the stars.",
      },
      {
        day: 10,
        title: "Departure Day",
        description:
          "Last morning game drive at sunrise. Fly back to Nairobi for connecting flights.",
      },
    ],
    reviews: [
      {
        name: "Sarah Mitchell",
        location: "London, UK",
        rating: 5,
        initials: "SM",
        color: "#2F4F3E",
        comment:
          "Witnessing the crossing was surreal. WildVentures positioned us perfectly — we were the only vehicle there. Pure magic.",
      },
      {
        name: "David Osei",
        location: "Accra, Ghana",
        rating: 5,
        initials: "DO",
        color: "#1E1E1E",
        comment:
          "The guides are extraordinary naturalists. Every detail was handled flawlessly. Worth every penny.",
      },
    ],
  },
  {
    id: 2,
    slug: "ngorongoro-serengeti-luxury",
    badge: "Exclusive",
    badgeStyle: "green",
    title: "Ngorongoro Crater & Serengeti Luxury Safari",
    destination: "Tanzania",
    destinationSlugs: ["tanzania"],
    duration: "8 Days",
    maxGroup: 6,
    price: 4200,
    style: "Luxury",
    image: "/images/tours/ngorongoro.png",
    heroImage: "/images/tours/ngorongoro.png",
    gallery: ["/images/destinations/tanzania.png"],
    summary:
      "Tanzania's crown jewels in one journey — descend into the ancient Ngorongoro Crater and roam the endless Serengeti plains in total luxury.",
    highlights: [
      "Full day on the crater floor",
      "Big Five in a single day",
      "Private conservancy access",
      "Champagne sundowners",
    ],
    wildlife: [
      "Black Rhino",
      "Lion",
      "Elephant",
      "Flamingo",
      "Leopard",
      "Hyena",
    ],
    accommodation: "Crater rim luxury lodges + Serengeti private camp",
    accommodationDetails:
      "Nights 1–2: Arusha boutique hotel. Nights 3–5: Ngorongoro Crater Rim Lodge. Nights 6–8: Serengeti private tented camp.",
    included: [
      "All park & conservation fees",
      "Private vehicle",
      "Full-board",
      "Expert guide",
      "Crater descent",
    ],
    excluded: ["International flights", "Travel insurance", "Gratuities"],
    itinerary: [
      {
        day: 1,
        title: "Arrive Arusha",
        description:
          "Welcome briefing and dinner at your Arusha boutique hotel.",
      },
      {
        day: 2,
        title: "Arusha to Ngorongoro",
        description:
          "Drive through the Great Rift Valley to the crater rim. Sunset drinks with views into the caldera.",
      },
      {
        day: 3,
        title: "Full Day in the Crater",
        description:
          "Descend into the crater at dawn. Black rhino, vast lion prides, huge elephant bulls, and flamingo-pink lakes.",
      },
      {
        day: 4,
        title: "Crater to Serengeti",
        description:
          "Morning crater game drive, then drive into the Serengeti. Afternoon game drive.",
      },
      {
        day: 5,
        title: "Deep Serengeti",
        description:
          "Into the private conservancy lands — away from crowds, into true wilderness.",
      },
      {
        day: 6,
        title: "Balloon Safari Option",
        description:
          "Optional dawn balloon flight. Full-day game drives chasing big cats.",
      },
      {
        day: 7,
        title: "Final Full Day",
        description:
          "Last full day in the Serengeti. Sundowner on a kopje, dinner under a million stars.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Charter flight to Kilimanjaro International Airport for onward connections.",
      },
    ],
    reviews: [],
  },
  {
    id: 3,
    slug: "amboseli-masai-mara-classic",
    badge: "Popular",
    badgeStyle: "orange",
    title: "Amboseli & Masai Mara Classic Kenya Safari",
    destination: "Kenya",
    destinationSlugs: ["kenya"],
    duration: "7 Days",
    maxGroup: 10,
    price: 1950,
    style: "Mid-Range",
    image: "/images/hero/contact-hero.png",
    heroImage: "/images/hero/contact-hero.png",
    gallery: ["/images/tours/family-safari.png"],
    summary:
      "Kenya's two crown jewels in one trip — elephants beneath Kilimanjaro in Amboseli, then the big cat paradise of the Masai Mara.",
    highlights: [
      "Elephant herds in Amboseli",
      "Kilimanjaro backdrop photography",
      "Big cat action in the Mara",
      "Masai cultural experience",
    ],
    wildlife: ["Elephant", "Lion", "Cheetah", "Giraffe", "Zebra", "Leopard"],
    accommodation: "Comfortable safari lodges & camps",
    accommodationDetails:
      "Nights 1–3: Amboseli lodge with Kilimanjaro views. Nights 4–7: Masai Mara tented camp.",
    included: [
      "All park fees",
      "Airport transfers",
      "Full-board meals",
      "English-speaking guide",
      "4x4 vehicle",
    ],
    excluded: ["International flights", "Travel insurance", "Laundry", "Tips"],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli",
        description:
          "Morning drive from Nairobi through Masai lands. Afternoon arrival and first game drive.",
      },
      {
        day: 2,
        title: "Amboseli Full Day",
        description:
          "Full day with the elephant herds — Kilimanjaro as your backdrop at dawn and dusk.",
      },
      {
        day: 3,
        title: "More Amboseli",
        description:
          "Swamp walks, birding, and seeking big cats in the acacia woodland.",
      },
      {
        day: 4,
        title: "Drive to Masai Mara",
        description:
          "Scenic drive through the Rift Valley to Kenya's most famous reserve.",
      },
      {
        day: 5,
        title: "Mara Game Drives",
        description:
          "Full day chasing lion prides, cheetah families, and enormous elephant herds.",
      },
      {
        day: 6,
        title: "Masai Village & Game Drive",
        description:
          "Dawn drive for cats on the hunt. Afternoon Masai manyatta cultural visit.",
      },
      {
        day: 7,
        title: "Return to Nairobi",
        description:
          "Last morning game drive, then drive back to Nairobi. Farewell lunch.",
      },
    ],
    reviews: [],
  },
  {
    id: 4,
    slug: "rwanda-gorilla-trekking",
    badge: "Luxury",
    badgeStyle: "orange",
    title: "Rwanda Gorilla Trekking Expedition",
    destination: "Rwanda",
    destinationSlugs: ["rwanda"],
    duration: "5 Days",
    maxGroup: 6,
    price: 2200,
    style: "Luxury",
    image: "/images/tours/gorilla.png",
    heroImage: "/images/tours/gorilla.png",
    gallery: ["/images/destinations/rwanda.png"],
    summary:
      "Come face to face with endangered mountain gorillas in the misty bamboo forests of Rwanda's Volcanoes National Park. A life-changing encounter.",
    highlights: [
      "Mountain gorilla trekking permit",
      "Golden monkey tracking",
      "Kigali city & genocide memorial",
      "Community cultural visit",
    ],
    wildlife: [
      "Mountain Gorilla",
      "Golden Monkey",
      "Forest Buffalo",
      "Olive Baboon",
      "Sunbird",
    ],
    accommodation: "Luxury forest lodges",
    accommodationDetails:
      "Night 1: Kigali boutique hotel. Nights 2–4: Bisate Lodge, Volcanoes NP. Night 5: Kigali.",
    included: [
      "Gorilla trekking permit",
      "All park fees",
      "Airport transfers",
      "Full-board",
      "Expert guide",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Kigali",
        description:
          "Airport pickup, Kigali city tour and the powerful Kigali Genocide Memorial. Welcome dinner.",
      },
      {
        day: 2,
        title: "Transfer to Volcanoes NP",
        description:
          "Morning drive through Rwanda's thousand hills to Ruhengeri. Afternoon briefing for the gorilla trek.",
      },
      {
        day: 3,
        title: "Gorilla Trekking Day",
        description:
          "Trek into the Virunga forests guided by expert trackers. Spend one magical hour with a habituated gorilla family.",
      },
      {
        day: 4,
        title: "Golden Monkey & Culture",
        description:
          "Morning golden monkey tracking in the bamboo forests. Afternoon community cooperative visit.",
      },
      {
        day: 5,
        title: "Return to Kigali",
        description:
          "Morning at leisure, then transfer to Kigali for onward international flights.",
      },
    ],
    reviews: [
      {
        name: "Aisha Kamara",
        location: "Dubai, UAE",
        rating: 5,
        initials: "AK",
        color: "#C47A2C",
        comment:
          "Looking into the eyes of a gorilla from a few feet away... there are no words. The most profound experience of my life.",
      },
    ],
  },
  {
    id: 5,
    slug: "uganda-primates-pearl-of-africa",
    badge: "New",
    badgeStyle: "green",
    title: "Uganda — Primates & Pearl of Africa",
    destination: "Uganda",
    destinationSlugs: ["uganda"],
    duration: "6 Days",
    maxGroup: 8,
    price: 2650,
    style: "Luxury",
    image: "/images/tours/uganda-primates.png",
    heroImage: "/images/tours/uganda-primates.png",
    gallery: ["/images/destinations/uganda.png"],
    summary:
      "Track chimpanzees in Kibale Forest and gorillas in Bwindi — a primate paradise in Africa's greenest, most dramatic landscape.",
    highlights: [
      "Chimp trekking in Kibale",
      "Gorilla trekking in Bwindi",
      "Kazinga Channel boat cruise",
      "Ishasha tree-climbing lions",
    ],
    wildlife: [
      "Mountain Gorilla",
      "Chimpanzee",
      "Tree-climbing Lion",
      "Hippo",
      "Shoebill Stork",
    ],
    accommodation: "Eco-lodges and luxury forest camps",
    accommodationDetails:
      "Night 1: Entebbe. Nights 2–3: Kibale eco-lodge. Night 4: Queen Elizabeth camp. Nights 5–6: Bwindi luxury lodge.",
    included: [
      "Chimp & gorilla permits",
      "All park fees",
      "Airport transfers",
      "Full-board",
      "Expert guide",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Entebbe",
        description:
          "Airport welcome. Transfer to lakeside hotel. Briefing for the journey ahead.",
      },
      {
        day: 2,
        title: "Kibale Forest Chimp Trek",
        description:
          "Drive to Kibale. Half-day chimpanzee trekking — listening for their calls deep in the forest.",
      },
      {
        day: 3,
        title: "Queen Elizabeth NP",
        description:
          "Kazinga Channel boat cruise — hippos, elephants, buffalo, and hundreds of birds all within metres.",
      },
      {
        day: 4,
        title: "Ishasha & Transfer to Bwindi",
        description:
          "Morning seeking tree-climbing lions in Ishasha. Scenic drive through the highlands to Bwindi.",
      },
      {
        day: 5,
        title: "Gorilla Trekking",
        description:
          "The unforgettable gorilla trek into Bwindi Impenetrable Forest. One precious hour with a gorilla family.",
      },
      {
        day: 6,
        title: "Lake Bunyonyi & Departure",
        description:
          "Tranquil morning on Lake Bunyonyi. Afternoon fly to Entebbe for connections.",
      },
    ],
    reviews: [],
  },
  {
    id: 6,
    slug: "kenya-family-safari",
    badge: "Family",
    badgeStyle: "orange",
    title: "Kenya Family Safari Adventure",
    destination: "Kenya",
    destinationSlugs: ["kenya"],
    duration: "9 Days",
    maxGroup: 12,
    price: 2800,
    style: "Family",
    image: "/images/tours/family-safari.png",
    heroImage: "/images/tours/family-safari.png",
    gallery: [],
    summary:
      "A kid-friendly Kenya safari designed for wonder — game drives, junior ranger programs, Masai cultural experiences, and stories around the campfire.",
    highlights: [
      "Child-friendly family camps",
      "Junior ranger programme & certificate",
      "Masai village cultural experience",
      "Giraffe Centre in Nairobi",
    ],
    wildlife: ["Giraffe", "Elephant", "Lion", "Zebra", "Hippo", "Cheetah"],
    accommodation: "Family-suite lodges & large family tents",
    accommodationDetails:
      "Night 1: Nairobi. Nights 2–4: Masai Mara family camp. Nights 5–7: Amboseli family lodge. Nights 8–9: Optional Diani Beach.",
    included: [
      "All park fees",
      "Family rooms",
      "Full-board",
      "Guide",
      "Junior ranger kit",
      "Nairobi activities",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Beach extension costs",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Nairobi",
        description:
          "Arrival. Visit the Giraffe Centre and David Sheldrick Elephant Orphanage — perfect for kids.",
      },
      {
        day: 2,
        title: "Fly to Masai Mara",
        description:
          "Charter flight to the Mara. Afternoon game drive — big cats and endless plains.",
      },
      {
        day: 3,
        title: "Junior Rangers Day",
        description:
          "Morning junior ranger bush walk — learn tracks, plants, and survival skills. Afternoon game drive.",
      },
      {
        day: 4,
        title: "Masai Village Visit",
        description:
          "Dawn drive for cats on the hunt. Afternoon cultural visit to an authentic Masai manyatta.",
      },
      {
        day: 5,
        title: "Mara to Amboseli",
        description:
          "Fly to Amboseli. First views of Kilimanjaro and the famous elephant herds.",
      },
      {
        day: 6,
        title: "Elephant Day",
        description:
          "Full day with Amboseli's famous herds. Visit the Amboseli elephant research camp.",
      },
      {
        day: 7,
        title: "Bush Olympics",
        description:
          "Junior ranger games and wildlife quiz morning. Afternoon game drive.",
      },
      {
        day: 8,
        title: "Optional Beach Day",
        description:
          "Fly to Diani Beach on the Indian Ocean. Relax after a week of adventure.",
      },
      {
        day: 9,
        title: "Departure",
        description: "Return to Nairobi for international flights home.",
      },
    ],
    reviews: [],
  },
  {
    id: 7,
    slug: "east-africa-grand-loop",
    badge: "Epic",
    badgeStyle: "green",
    title: "East Africa Grand Loop — Kenya, Tanzania & Rwanda",
    destination: "Kenya · Tanzania · Rwanda",
    destinationSlugs: ["kenya", "tanzania", "rwanda"],
    duration: "14 Days",
    maxGroup: 8,
    price: 5800,
    style: "Luxury",
    image: "/images/tours/grand-loop.png",
    heroImage: "/images/tours/grand-loop.png",
    gallery: [],
    summary:
      "The ultimate East African journey — the Great Migration, Ngorongoro Crater, and mountain gorilla trekking all in one extraordinary two-week adventure.",
    highlights: [
      "Great Migration in the Masai Mara",
      "Ngorongoro Crater full day",
      "Rwanda gorilla trekking",
      "Three countries, one seamless journey",
    ],
    wildlife: [
      "Wildebeest",
      "Mountain Gorilla",
      "Black Rhino",
      "Lion",
      "Elephant",
      "Leopard",
    ],
    accommodation: "Luxury lodges & tented camps throughout",
    accommodationDetails:
      "Nights 1–4: Kenya (Mara). Nights 5–9: Tanzania (Serengeti + Ngorongoro). Nights 10–14: Rwanda (Kigali + Volcanoes).",
    included: [
      "All park & conservation fees",
      "Gorilla permit",
      "Internal flights",
      "Full-board",
      "Expert guides throughout",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Nairobi",
        description: "Welcome dinner and safari briefing.",
      },
      {
        day: 2,
        title: "Fly to Masai Mara",
        description: "Charter flight. Afternoon game drive.",
      },
      {
        day: 3,
        title: "Masai Mara",
        description: "Full day chasing big cats and river crossings.",
      },
      {
        day: 4,
        title: "Mara to Serengeti",
        description: "Cross into Tanzania. Serengeti afternoon game drive.",
      },
      {
        day: 5,
        title: "Central Serengeti",
        description: "Following lion prides and cheetah families.",
      },
      {
        day: 6,
        title: "North Serengeti",
        description: "Mara River crossing zone — wildebeest theatre.",
      },
      {
        day: 7,
        title: "Serengeti to Ngorongoro",
        description: "Transfer to the crater rim. Sunset views.",
      },
      {
        day: 8,
        title: "Full Day in the Crater",
        description:
          "Black rhino, lions, flamingos — all in one ancient caldera.",
      },
      {
        day: 9,
        title: "Fly to Kigali",
        description: "Transfer to Kilimanjaro, fly to Kigali, Rwanda.",
      },
      {
        day: 10,
        title: "Kigali & Transfer",
        description: "City tour and memorial, then drive to Volcanoes NP.",
      },
      {
        day: 11,
        title: "Gorilla Trekking Day",
        description:
          "The moment everything builds toward — face to face with mountain gorillas.",
      },
      {
        day: 12,
        title: "Golden Monkey & Lake Kivu",
        description: "Morning tracking, afternoon at stunning Lake Kivu.",
      },
      {
        day: 13,
        title: "Rwanda at Leisure",
        description:
          "Optional community visits, Nyungwe Forest birding, or rest.",
      },
      {
        day: 14,
        title: "Departure from Kigali",
        description:
          "Farewell breakfast, transfer to Kigali International Airport.",
      },
    ],
    reviews: [],
  },
];

export const getTourBySlug = (slug) => tours.find((t) => t.slug === slug);
export const getFeaturedTours = () => tours.slice(0, 4);
export const getToursByStyle = (s) => tours.filter((t) => t.style === s);
export const getToursByDest = (d) =>
  tours.filter((t) => t.destinationSlugs.includes(d));
