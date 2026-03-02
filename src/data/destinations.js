export const destinations = [
  {
    id: 1,
    slug: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    tagline: "The Original Safari Land",
    tourCount: 14,
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1800&q=80",
    description:
      "Kenya is the birthplace of the safari. From the iconic Masai Mara — stage of the Great Migration — to the elephant-laden plains of Amboseli beneath the snows of Kilimanjaro, Kenya delivers the quintessential African wildlife experience. With year-round game viewing, world-class guides, and a landscape that shifts from open savanna to dramatic rift valley, Kenya remains the gold standard of safari destinations.",
    bestTime:
      "July – October (Great Migration) · January – February (calving season)",
    highlights: [
      "Masai Mara National Reserve",
      "Amboseli National Park",
      "Tsavo East & West",
      "Lake Nakuru",
      "Samburu National Reserve",
      "Laikipia Plateau",
    ],
    wildlife: [
      "Lion",
      "Elephant",
      "Wildebeest",
      "Cheetah",
      "Black Rhino",
      "Leopard",
    ],
    climate:
      "Warm year-round. Short rains Oct–Nov, long rains Mar–May. Best game viewing in the dry seasons.",
    featured: true, // shown largest on destinations page
  },
  {
    id: 2,
    slug: "tanzania",
    name: "Tanzania",
    flag: "🇹🇿",
    tagline: "The Serengeti & Beyond",
    tourCount: 18,
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1800&q=80",
    description:
      "Tanzania is a land of superlatives. Home to the Serengeti — the greatest wildlife theatre on earth — the Ngorongoro Crater, and the roof of Africa, Mount Kilimanjaro. The annual wildebeest migration, involving over 1.5 million animals, is the world's largest overland mammal movement and passes through Tanzania for most of the year. Add Zanzibar's white beaches and Tanzania becomes the complete African journey.",
    bestTime:
      "June – October (dry season) · December – March (calving & lush green season)",
    highlights: [
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Tarangire National Park",
      "Zanzibar Island",
      "Ruaha National Park",
      "Selous Game Reserve",
    ],
    wildlife: [
      "Wildebeest",
      "Black Rhino",
      "Leopard",
      "African Wild Dog",
      "Flamingo",
      "Cheetah",
    ],
    climate:
      "Dry Jun–Oct, short rains Nov–Dec, long rains Mar–May. Altitude keeps highlands cool.",
    featured: true,
  },
  {
    id: 3,
    slug: "rwanda",
    name: "Rwanda",
    flag: "🇷🇼",
    tagline: "Land of a Thousand Hills",
    tourCount: 8,
    image:
      "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1800&q=80",
    description:
      "Rwanda is Africa's most extraordinary comeback story — a nation that has transformed itself into one of the continent's safest, cleanest, and most progressive destinations. The primary draw is mountain gorilla trekking in Volcanoes National Park, where you can come face-to-face with a habituated gorilla family in misty bamboo forest. Rwanda also offers chimpanzee tracking, savanna game drives in Akagera, and the vibrant capital Kigali.",
    bestTime: "June – September · December – February (both dry seasons)",
    highlights: [
      "Volcanoes National Park",
      "Nyungwe Forest",
      "Akagera National Park",
      "Kigali City",
      "Lake Kivu",
    ],
    wildlife: [
      "Mountain Gorilla",
      "Golden Monkey",
      "Chimpanzee",
      "Lion",
      "Hippo",
    ],
    climate:
      "Mild and pleasant year-round due to altitude. Rainy seasons Mar–May and Oct–Nov.",
    featured: false,
  },
  {
    id: 4,
    slug: "uganda",
    name: "Uganda",
    flag: "🇺🇬",
    tagline: "The Pearl of Africa",
    tourCount: 6,
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1800&q=80",
    description:
      "Churchill called Uganda the Pearl of Africa — and the country lives up to every word. Dramatically green and staggeringly diverse, Uganda offers an unmatched primate experience: gorilla trekking in Bwindi Impenetrable Forest and chimpanzee tracking in Kibale, the primate capital of the world. Beyond the primates, Queen Elizabeth National Park delivers classic savanna game drives, the famous tree-climbing lions of Ishasha, and the spectacular Kazinga Channel boat cruise.",
    bestTime: "June – September · December – February",
    highlights: [
      "Bwindi Impenetrable Forest",
      "Kibale National Park",
      "Queen Elizabeth NP",
      "Murchison Falls",
      "Lake Bunyonyi",
      "Ishasha tree-climbing lions",
    ],
    wildlife: [
      "Mountain Gorilla",
      "Chimpanzee",
      "Tree-climbing Lion",
      "Shoebill Stork",
      "Nile Crocodile",
      "Hippo",
    ],
    climate:
      "Tropical. Dry seasons Jun–Aug and Dec–Feb. Generally warm with high humidity in forested areas.",
    featured: false,
  },
];

export const getDestinationBySlug = (slug) =>
  destinations.find((d) => d.slug === slug);
export const getFeaturedDestinations = () => destinations; // all 4, Kenya+Tanzania shown largest
export const getMainDestinations = () => destinations.filter((d) => d.featured);
