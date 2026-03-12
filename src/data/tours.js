export const tours = [
  // ─────────────────────────────────────────────
  // KENYA TOURS
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: "masai-mara-classic-safari",
    badge: "Bestseller",
    badgeStyle: "green",
    title: "Masai Mara Classic Safari",
    destination: "Kenya",
    destinationSlugs: ["kenya"],
    duration: "5 Days",
    maxGroup: 10,
    price: 1450,
    style: "Mid-Range",
    image: "/images/tours/maasai-mara-classic.png",
    heroImage: "/images/tours/maasai-mara-classic.png",
    gallery: [
      "/images/hero/hero-main.png",
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-5.png",
      "/images/destinations/kenya.png",
    ],
    summary:
      "The ultimate introduction to Kenya's wildlife — four nights in the world-famous Masai Mara, where lion prides, cheetah families, and enormous elephant herds roam one of Africa's most iconic landscapes.",
    highlights: [
      "Full-day game drives in the Masai Mara",
      "Big Five encounters on open savanna",
      "Masai village cultural experience",
      "Sundowner drinks on the Mara plains",
    ],
    wildlife: ["Lion", "Cheetah", "Elephant", "Leopard", "Giraffe", "Zebra"],
    accommodation: "Comfortable tented safari camps",
    accommodationDetails:
      "Night 1: Nairobi hotel. Nights 2–5: Masai Mara tented camp, full-board.",
    included: [
      "All park fees",
      "Airport transfers",
      "Full-board meals",
      "English-speaking guide",
      "4x4 safari vehicle",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal spending",
      "Tips & gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description:
          "Welcome at Jomo Kenyatta International Airport. Transfer to your Nairobi hotel. Evening welcome briefing with your guide over dinner.",
      },
      {
        day: 2,
        title: "Drive to Masai Mara",
        description:
          "Depart Nairobi after breakfast, driving through the Great Rift Valley escarpment with spectacular views. Arrive at camp by midday and enjoy your first afternoon game drive across the golden plains.",
      },
      {
        day: 3,
        title: "Full Day in the Mara",
        description:
          "Dawn-to-dusk game drives through the reserve. The Mara is famous for its resident lion prides and cheetah families. Packed bush lunch under an acacia tree. Sundowner drinks as the sun melts into the horizon.",
      },
      {
        day: 4,
        title: "Masai Village & Big Cats",
        description:
          "Early morning drive targeting leopard in the riverine forest. Afternoon cultural visit to an authentic Masai manyatta — learn about traditional life, medicine, and warrior culture. Evening campfire dinner.",
      },
      {
        day: 5,
        title: "Final Game Drive & Return",
        description:
          "Last sunrise game drive before breakfast. Return drive to Nairobi via the Rift Valley. Farewell lunch in the city before airport transfers.",
      },
    ],
    reviews: [
      {
        name: "James & Helen Cooper",
        location: "Manchester, UK",
        rating: 5,
        initials: "JH",
        color: "#2F4F3E",
        comment:
          "Our first safari and it completely exceeded expectations. The guide knew exactly where to find the cats. We saw four leopards in one morning!",
      },
    ],
  },
  {
    id: 2,
    slug: "amboseli-tsavo-explorer",
    badge: "Popular",
    badgeStyle: "orange",
    title: "Amboseli & Tsavo Explorer",
    destination: "Kenya",
    destinationSlugs: ["kenya"],
    duration: "6 Days",
    maxGroup: 10,
    price: 1750,
    style: "Mid-Range",
    image: "/images/tours/amboseli-tsavo.png",
    heroImage: "/images/tours/amboseli-tsavo.png",
    gallery: [
      "/images/gallery/gallery-1.png",
      "/images/destinations/kenya.png",
      "/images/gallery/gallery-4.png",
    ],
    summary:
      "Kenya's most photogenic combination — elephant herds against the snow-capped backdrop of Kilimanjaro in Amboseli, followed by the vast red wilderness of Tsavo, home to Kenya's legendary big tusker elephants.",
    highlights: [
      "Elephant herds beneath Kilimanjaro",
      "Tsavo's famous red elephants",
      "Big tusker sightings in Tsavo East",
      "Mzima Springs hippo pool",
    ],
    wildlife: [
      "Elephant",
      "Lion",
      "Giraffe",
      "Hippo",
      "Crocodile",
      "Black Rhino",
    ],
    accommodation: "Safari lodges with wildlife waterhole views",
    accommodationDetails:
      "Night 1: Nairobi. Nights 2–3: Amboseli lodge. Nights 4–6: Tsavo East lodge.",
    included: [
      "All park fees",
      "Airport transfers",
      "Full-board meals",
      "Expert guide",
      "4x4 safari vehicle",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi Arrival",
        description:
          "Airport reception and transfer to your Nairobi hotel. Evening safari briefing and welcome dinner.",
      },
      {
        day: 2,
        title: "Nairobi to Amboseli",
        description:
          "Morning drive through Masai lands to Amboseli. First views of Kilimanjaro towering above the plains. Afternoon game drive — the elephant herds here are among the best studied in Africa.",
      },
      {
        day: 3,
        title: "Full Day in Amboseli",
        description:
          "All-day game drives in the shadow of Africa's highest peak. Visit the famous Amboseli swamps where elephants wade at dawn. Brilliant photography as Kilimanjaro clears by morning.",
      },
      {
        day: 4,
        title: "Amboseli to Tsavo East",
        description:
          "Drive east into Tsavo — Kenya's largest national park. Tsavo's red-dust elephants are a sight unlike anywhere else. Afternoon arrival and first game drive.",
      },
      {
        day: 5,
        title: "Tsavo East Full Day",
        description:
          "Explore the Galana River corridor and the legendary Lugard Falls. Seek out Tsavo's big tuskers and vast buffalo herds. Evening at the lodge's waterhole as lions come to drink.",
      },
      {
        day: 6,
        title: "Mzima Springs & Return",
        description:
          "Morning visit to Mzima Springs — an underwater observatory where hippos and crocodiles glide past the glass. Return to Nairobi via Tsavo West. Farewell dinner.",
      },
    ],
    reviews: [],
  },
  {
    id: 3,
    slug: "kenya-family-safari",
    badge: "Family",
    badgeStyle: "orange",
    title: "Kenya Family Safari Adventure",
    destination: "Kenya",
    destinationSlugs: ["kenya"],
    duration: "8 Days",
    maxGroup: 12,
    price: 2600,
    style: "Family",
    image: "/images/tours/kenya-family-safari.png",
    heroImage: "/images/tours/kenya-family-safari.png",
    gallery: [
      "/images/gallery/gallery-1.png",
      "/images/gallery/gallery-5.png",
      "/images/destinations/kenya.png",
    ],
    summary:
      "Designed for families with children of all ages — a carefully paced Kenya safari that balances thrilling game drives with junior ranger activities, Masai cultural experiences, and the option of a Diani Beach finale.",
    highlights: [
      "Junior ranger bush walks & certificate",
      "Elephant encounters in Amboseli",
      "Masai village cultural visit",
      "Optional Diani Beach extension",
    ],
    wildlife: [
      "Elephant",
      "Lion",
      "Giraffe",
      "Zebra",
      "Cheetah",
      "Hippo",
    ],
    accommodation: "Family-suite lodges & large family tents",
    accommodationDetails:
      "Night 1: Nairobi Giraffe Centre Hotel. Nights 2–4: Masai Mara family camp. Nights 5–7: Amboseli family lodge. Night 8: Optional Diani Beach.",
    included: [
      "All park fees",
      "Family rooms throughout",
      "Full-board meals",
      "Expert guide",
      "Junior ranger kit & certificate",
      "Nairobi Giraffe Centre visit",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Beach extension costs",
      "David Sheldrick Elephant Orphanage fee",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Nairobi",
        description:
          "Arrival and transfer to your hotel. Afternoon visit to the famous Giraffe Centre where children can hand-feed Rothschild's giraffes. Optional visit to the David Sheldrick Elephant Orphanage — a guaranteed family highlight.",
      },
      {
        day: 2,
        title: "Fly to Masai Mara",
        description:
          "Morning charter flight to the Mara — exciting for children who have never flown in a small plane. Afternoon game drive with your guide introducing the family to the Big Five.",
      },
      {
        day: 3,
        title: "Junior Rangers Day",
        description:
          "Morning junior ranger bush walk — children learn animal tracks, medicinal plants, and Masai survival skills. They earn their junior ranger badge. Afternoon game drive seeking cheetahs.",
      },
      {
        day: 4,
        title: "Masai Village & Game Drive",
        description:
          "Early morning big cat drive. Afternoon visit to an authentic Masai manyatta where warriors share their traditions. Evening campfire storytelling.",
      },
      {
        day: 5,
        title: "Fly to Amboseli",
        description:
          "Morning charter to Amboseli. First views of elephants moving against the giant backdrop of Kilimanjaro — a scene that genuinely stops you in your tracks.",
      },
      {
        day: 6,
        title: "Elephant Day",
        description:
          "Full day with Amboseli's famous elephant herds, the best-studied in Africa. Visit the research camp to learn about elephant family behaviour. Brilliant photography at the swamps.",
      },
      {
        day: 7,
        title: "Bush Olympics",
        description:
          "Morning wildlife quiz and bush Olympics for the children — tracker challenges, bird ID, and animal sound recognition. Afternoon game drive at sunset.",
      },
      {
        day: 8,
        title: "Optional Beach Finale",
        description:
          "Fly to Diani Beach on the Indian Ocean for a day of rest. Warm turquoise water and white sand as the perfect safari coda. Evening return to Nairobi for international departures.",
      },
    ],
    reviews: [
      {
        name: "The Robertson Family",
        location: "Edinburgh, Scotland",
        rating: 5,
        initials: "RF",
        color: "#2F4F3E",
        comment:
          "Our kids are 8 and 11 and they haven't stopped talking about it six months later. The junior ranger program was inspired. This trip changed our family.",
      },
    ],
  },
  {
    id: 4,
    slug: "kenya-highlights-mara-nakuru-samburu",
    badge: "Luxury",
    badgeStyle: "green",
    title: "Kenya Highlights — Mara, Nakuru & Samburu",
    destination: "Kenya",
    destinationSlugs: ["kenya"],
    duration: "10 Days",
    maxGroup: 8,
    price: 3200,
    style: "Luxury",
    image: "/images/tours/kenya-highlights.png",
    heroImage: "/images/tours/kenya-highlights.png",
    gallery: [
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-5.png",
      "/images/destinations/kenya.png",
    ],
    summary:
      "Kenya's finest safari circuit — from the legendary Masai Mara to the flamingo-pink shores of Lake Nakuru, then north to the remote wilderness of Samburu where rare Northern species found nowhere else in Kenya roam freely.",
    highlights: [
      "Big cat action in the Masai Mara",
      "Flamingos & rhino at Lake Nakuru",
      "Samburu's unique Northern Specials",
      "Reteti Elephant Sanctuary visit",
    ],
    wildlife: [
      "Lion",
      "Black Rhino",
      "Grevy's Zebra",
      "Reticulated Giraffe",
      "Leopard",
      "Flamingo",
    ],
    accommodation: "Luxury lodges & private conservancy camps",
    accommodationDetails:
      "Nights 1–4: Masai Mara private conservancy. Nights 5–6: Lake Nakuru lodge. Nights 7–10: Samburu luxury camp.",
    included: [
      "All park & conservancy fees",
      "Private vehicle",
      "Full-board",
      "Expert naturalist guide",
      "Internal road transfers",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Balloon safari (optional $480)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Nairobi",
        description:
          "Airport welcome and transfer to your Nairobi hotel. Evening briefing with your lead naturalist guide.",
      },
      {
        day: 2,
        title: "Fly to Masai Mara",
        description:
          "Morning charter into the Mara's private conservancy — where exclusive access means fewer vehicles and more wildlife. First afternoon game drive.",
      },
      {
        day: 3,
        title: "Mara Full Day",
        description:
          "Dawn to dusk in the conservancy. Resident lion prides and cheetah families. Bush picnic lunch in the shade of an acacia.",
      },
      {
        day: 4,
        title: "River & Big Cats",
        description:
          "Morning drive along the Mara River — crocodiles, hippos, and often a leopard in the trees above. Optional hot air balloon at dawn.",
      },
      {
        day: 5,
        title: "Mara to Lake Nakuru",
        description:
          "Drive north through the Rift Valley to Lake Nakuru. Famous for its enormous flocks of flamingos and some of Kenya's best black rhino sightings.",
      },
      {
        day: 6,
        title: "Lake Nakuru Full Day",
        description:
          "Lions, white rhino, leopard, and Rothschild's giraffe — Nakuru punches far above its weight for wildlife. Sundowner with flamingos on the lake.",
      },
      {
        day: 7,
        title: "Drive to Samburu",
        description:
          "Long but spectacular drive north to Samburu — Kenya's wild north. The landscape transforms from savanna to semi-arid acacia bush. Afternoon arrival game drive.",
      },
      {
        day: 8,
        title: "Samburu Northern Specials",
        description:
          "Seek the 'Northern Specials' found only here: Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk, and Somali ostrich. Samburu is utterly unlike any southern park.",
      },
      {
        day: 9,
        title: "Ewaso River & Leopard",
        description:
          "Samburu's leopards are famous for their boldness — often seen draped over trees in full daylight along the Ewaso Ng'iro River. Afternoon visit to the Reteti Elephant Sanctuary.",
      },
      {
        day: 10,
        title: "Return to Nairobi",
        description:
          "Morning game drive at sunrise. Return drive to Nairobi for international departures. Farewell lunch en route.",
      },
    ],
    reviews: [],
  },

  // ─────────────────────────────────────────────
  // TANZANIA & ZANZIBAR TOURS
  // ─────────────────────────────────────────────
  {
    id: 5,
    slug: "serengeti-ngorongoro-luxury",
    badge: "Exclusive",
    badgeStyle: "green",
    title: "Serengeti & Ngorongoro Luxury Safari",
    destination: "Tanzania",
    destinationSlugs: ["tanzania"],
    duration: "7 Days",
    maxGroup: 6,
    price: 3950,
    style: "Luxury",
    image: "/images/tours/serengeti-ngorongoro.png",
    heroImage: "/images/tours/serengeti-ngorongoro.png",
    gallery: [
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-3.png",
      "/images/destinations/tanzania.png",
    ],
    summary:
      "Tanzania's two crown jewels in one seamless luxury journey — descend into the ancient Ngorongoro Crater, Africa's greatest wildlife arena, then lose yourself in the endless plains of the Serengeti.",
    highlights: [
      "Full day on the Ngorongoro Crater floor",
      "Big Five in a single day",
      "Serengeti private conservancy access",
      "Champagne bush sundowners",
    ],
    wildlife: [
      "Black Rhino",
      "Lion",
      "Elephant",
      "Flamingo",
      "Leopard",
      "Hyena",
    ],
    accommodation: "Crater rim lodge + Serengeti private tented camp",
    accommodationDetails:
      "Nights 1–2: Arusha boutique hotel. Nights 3–5: Ngorongoro Crater Rim Lodge. Nights 6–7: Serengeti private tented camp.",
    included: [
      "All park & conservation fees",
      "Private vehicle",
      "Full-board",
      "Expert naturalist guide",
      "Crater descent & ascent",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Gratuities",
      "Balloon safari (optional $550)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Arusha",
        description:
          "Welcome at Kilimanjaro International Airport. Transfer to your Arusha boutique hotel. Evening briefing and welcome dinner.",
      },
      {
        day: 2,
        title: "Arusha to Ngorongoro",
        description:
          "Drive through the Great Rift Valley and Masai steppe. Dramatic views as you ascend to the crater rim at 2,300m. Sundowner drinks overlooking the caldera.",
      },
      {
        day: 3,
        title: "Full Day in the Crater",
        description:
          "Descend into the crater at first light. The Ngorongoro Crater holds the densest concentration of wildlife in Africa — black rhino, enormous lion prides, massive elephant bulls, and the pink shimmer of flamingos on Lake Magadi. A full day here feels like a lifetime.",
      },
      {
        day: 4,
        title: "Crater to Serengeti",
        description:
          "Morning crater game drive, then drive west into the Serengeti. The landscape opens into the greatest savanna on earth. Afternoon game drive in the Seronera Valley — leopards in the fever trees.",
      },
      {
        day: 5,
        title: "Deep Serengeti",
        description:
          "Into the private conservancy lands bordering the reserve — away from all other vehicles, into true wilderness. Cheetah families, wild dog packs, and lion on the hunt.",
      },
      {
        day: 6,
        title: "Optional Balloon Safari",
        description:
          "Pre-dawn wake-up for an optional hot air balloon over the Serengeti — one of the world's great experiences. Champagne breakfast in the bush. Full afternoon game drive.",
      },
      {
        day: 7,
        title: "Final Drive & Departure",
        description:
          "Last sunrise game drive. Charter flight to Kilimanjaro International Airport for onward international connections.",
      },
    ],
    reviews: [
      {
        name: "Dr. Petra Hoffmann",
        location: "Munich, Germany",
        rating: 5,
        initials: "PH",
        color: "#2F4F3E",
        comment:
          "The crater is something that cannot be prepared for. We saw black rhino at close range for 45 minutes. The guide's knowledge was encyclopaedic.",
      },
    ],
  },
  {
    id: 6,
    slug: "zanzibar-beach-safari-combo",
    badge: "Popular",
    badgeStyle: "orange",
    title: "Zanzibar Beach & Safari Combo",
    destination: "Tanzania · Zanzibar",
    destinationSlugs: ["tanzania", "zanzibar"],
    duration: "10 Days",
    maxGroup: 10,
    price: 3400,
    style: "Luxury",
    heroImage: "/images/tours/zanzibar-beach-safari.png",
    image: "/images/tours/zanzibar-beach-safari.png",
    gallery: [
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-3.png",
      "/images/destinations/tanzania.png",
    ],
    summary:
      "The perfect East African holiday — five nights of classic Tanzania safari across the Serengeti and Ngorongoro, then four nights unwinding on Zanzibar's legendary white-sand beaches and turquoise Indian Ocean.",
    highlights: [
      "Serengeti Big Five game drives",
      "Ngorongoro Crater descent",
      "Stone Town UNESCO spice tour",
      "Zanzibar white-sand beach relaxation",
    ],
    wildlife: [
      "Lion",
      "Elephant",
      "Black Rhino",
      "Leopard",
      "Wildebeest",
      "Flamingo",
    ],
    accommodation: "Luxury tented camps + Zanzibar boutique beach hotel",
    accommodationDetails:
      "Nights 1–2: Arusha hotel. Nights 3–4: Ngorongoro rim lodge. Nights 5–6: Serengeti tented camp. Nights 7–10: Zanzibar beach hotel.",
    included: [
      "All park fees",
      "Internal flight to Zanzibar",
      "Full-board on safari",
      "Breakfast in Zanzibar",
      "Stone Town spice tour",
      "Expert guide on safari",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Lunches & dinners in Zanzibar",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Arusha",
        description:
          "Welcome at Kilimanjaro Airport. Transfer to your Arusha boutique hotel. Briefing and dinner.",
      },
      {
        day: 2,
        title: "Drive to Ngorongoro",
        description:
          "Scenic drive through Masai villages and the Rift Valley escarpment. Crater rim arrival. Sundowner with caldera views.",
      },
      {
        day: 3,
        title: "Ngorongoro Crater",
        description:
          "Full descent into the crater — black rhino, flamingos, enormous lion prides, and the highest density of wildlife in Africa all within 260 sq km.",
      },
      {
        day: 4,
        title: "Ngorongoro to Serengeti",
        description:
          "Drive into the Serengeti through the Olduvai Gorge — humanity's birthplace. Afternoon game drive in the Seronera Valley.",
      },
      {
        day: 5,
        title: "Serengeti Game Drives",
        description:
          "Full day following big cat tracks across the plains. Your guide reads the landscape like a map — finding leopards, cheetahs, and lion families at rest.",
      },
      {
        day: 6,
        title: "Final Serengeti Morning",
        description:
          "Dawn drive for the golden light photography hour. Charter flight to Zanzibar Island. Check into your beach hotel as the Indian Ocean turns pink.",
      },
      {
        day: 7,
        title: "Stone Town & Spice Tour",
        description:
          "Morning guided tour of UNESCO-listed Stone Town — the Arab trading quarter with labyrinthine alleys, carved doors, and vibrant markets. Afternoon spice plantation tour: cloves, vanilla, cinnamon, and black pepper.",
      },
      {
        day: 8,
        title: "Beach Day",
        description:
          "Completely free day on Zanzibar's famous white-sand beaches. Snorkeling, kite surfing, or simply doing nothing — the Indian Ocean demands complete relaxation.",
      },
      {
        day: 9,
        title: "Dhow Sunset Cruise",
        description:
          "Morning at leisure. Afternoon traditional dhow sailing cruise along the coast — sundowners at sea as dolphins follow the boat.",
      },
      {
        day: 10,
        title: "Departure from Zanzibar",
        description:
          "Breakfast at the beach. Transfer to Zanzibar Airport for international flights via Dar es Salaam or direct.",
      },
    ],
    reviews: [
      {
        name: "Lena & Marcus Björk",
        location: "Stockholm, Sweden",
        rating: 5,
        initials: "LM",
        color: "#C47A2C",
        comment:
          "The perfect combination. Waking up to lions outside the tent then four days later waking up to the Indian Ocean. We cannot imagine a better trip.",
      },
    ],
  },
  {
    id: 7,
    slug: "tanzania-grand-safari-zanzibar",
    badge: "Epic",
    badgeStyle: "green",
    title: "Tanzania Grand Safari & Zanzibar",
    destination: "Tanzania · Zanzibar",
    destinationSlugs: ["tanzania", "zanzibar"],
    duration: "14 Days",
    maxGroup: 8,
    price: 5500,
    style: "Luxury",
    image: "/images/tours/tanzania-grand-safari.png",
    heroImage: "/images/tours/tanzania-grand-safari.png",
    gallery: [
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-3.png",
      "/images/gallery/gallery-4.png",
      "/images/destinations/tanzania.png",
    ],
    summary:
      "The definitive Tanzania experience — Tarangire's elephant highways, the Ngorongoro Crater, the vast Serengeti, and Zanzibar's spice-scented shores, all woven into one extraordinary two-week journey.",
    highlights: [
      "Tarangire elephant herds in the baobab forests",
      "Full day in the Ngorongoro Crater",
      "Great Migration game drives in the Serengeti",
      "Five nights on Zanzibar's white sand coast",
    ],
    wildlife: [
      "Elephant",
      "Black Rhino",
      "Lion",
      "Leopard",
      "Wildebeest",
      "Flamingo",
    ],
    accommodation: "Luxury tented camps, crater lodge & Zanzibar beach resort",
    accommodationDetails:
      "Night 1: Arusha. Nights 2–3: Tarangire luxury camp. Nights 4–6: Ngorongoro rim lodge. Nights 7–9: Serengeti private camp. Nights 10–14: Zanzibar beach resort.",
    included: [
      "All park & conservation fees",
      "Internal flight Serengeti–Zanzibar",
      "Full-board on safari",
      "Breakfast in Zanzibar",
      "Expert naturalist guide throughout",
      "Stone Town & spice tour",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Balloon safari (optional $550)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Arusha",
        description:
          "Welcome at Kilimanjaro International Airport. Transfer to your boutique hotel. Welcome dinner and detailed 14-day briefing.",
      },
      {
        day: 2,
        title: "Drive to Tarangire",
        description:
          "Drive south to Tarangire National Park — less visited than the Serengeti but home to Tanzania's largest elephant herds. Vast baobab trees and the Tarangire River teeming with life.",
      },
      {
        day: 3,
        title: "Tarangire Full Day",
        description:
          "Full day in Tarangire following elephant families through the ancient baobab forest. Lions on rocky outcrops, vast oryx herds, and some of the best bird diversity in East Africa.",
      },
      {
        day: 4,
        title: "Tarangire to Ngorongoro",
        description:
          "Drive through Masai villages to the Ngorongoro Conservation Area. Ascend to the crater rim. Dramatic first views into Africa's greatest natural amphitheatre.",
      },
      {
        day: 5,
        title: "Full Day in the Crater",
        description:
          "Descend at first light. The crater holds all of the Big Five in one relatively compact space. Black rhino in the open marsh, enormous lion coalitions, and the soda lake shimmering with flamingos.",
      },
      {
        day: 6,
        title: "Olduvai Gorge & Serengeti Entry",
        description:
          "Drive through the Olduvai Gorge — where the earliest evidence of human ancestors was discovered. Enter the Serengeti as the plains stretch to the horizon. First Serengeti game drive.",
      },
      {
        day: 7,
        title: "Central Serengeti",
        description:
          "Seronera Valley — the wildlife crossroads of the Serengeti. Year-round leopards in the riverside trees and iconic lion prides on every rocky kopje.",
      },
      {
        day: 8,
        title: "Following the Migration",
        description:
          "Drive north following the wildebeest columns. The scale of the migration — 1.5 million animals moving in an endless column — is a sight that defies description.",
      },
      {
        day: 9,
        title: "Mara River Crossings",
        description:
          "Position at the river crossing points. The tension builds for hours — then in an instant, thousands of wildebeest plunge into the crocodile-filled river. Pure, raw nature.",
      },
      {
        day: 10,
        title: "Fly to Zanzibar",
        description:
          "Final dawn game drive. Charter flight from the Serengeti airstrip to Zanzibar Island. The contrast is total — within hours you swap dust and savanna for turquoise water and white sand.",
      },
      {
        day: 11,
        title: "Stone Town & Spice Tour",
        description:
          "UNESCO-listed Stone Town walk through Arab merchant quarters, spice markets, and the historic waterfront. Afternoon spice plantation tour among vanilla, cinnamon, and cloves.",
      },
      {
        day: 12,
        title: "Beach Day — North Coast",
        description:
          "Free day on Zanzibar's legendary north coast beaches. Clear warm water, coral reefs, and white powder sand. Snorkelling or diving the coral gardens for those who want to explore.",
      },
      {
        day: 13,
        title: "Dhow Cruise & Dolphin Watch",
        description:
          "Traditional wooden dhow sailing around the island's southern tip to Kizimkazi — famous for spinner dolphin pods that approach the boat. Sunset return to the north.",
      },
      {
        day: 14,
        title: "Departure from Zanzibar",
        description:
          "Leisurely breakfast at the beach. Airport transfer for international connections via Dar es Salaam, Nairobi, or direct flights.",
      },
    ],
    reviews: [],
  },
  {
    id: 8,
    slug: "great-migration-fly-in-safari",
    badge: "Bestseller",
    badgeStyle: "green",
    title: "The Great Migration — Fly-In Safari",
    destination: "Kenya · Tanzania",
    destinationSlugs: ["kenya", "tanzania"],
    duration: "10 Days",
    maxGroup: 8,
    price: 4200,
    style: "Luxury",
    image: "/images/tours/great-migration-flying.png",
    heroImage: "/images/tours/great-migration-flying.png",
    gallery: [
      "/images/hero/hero-main.png",
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-3.png",
      "/images/tours/family-safari.png",
    ],
    summary:
      "Follow the world's greatest wildlife spectacle from above and below — charter flights tracking the wildebeest herds through the Serengeti into Kenya's Masai Mara for the dramatic river crossings.",
    highlights: [
      "Charter flights following the herd",
      "Great Migration river crossings",
      "Big Five across two countries",
      "Optional hot air balloon at dawn",
    ],
    wildlife: [
      "Wildebeest",
      "Lion",
      "Leopard",
      "Cheetah",
      "Elephant",
      "Crocodile",
    ],
    accommodation: "Luxury tented camps in private conservancies",
    accommodationDetails:
      "Night 1: Nairobi hotel. Nights 2–6: Serengeti luxury private camp. Nights 7–10: Masai Mara private conservancy camp.",
    included: [
      "All park fees",
      "Charter flights between locations",
      "Full-board meals",
      "Expert naturalist guide",
      "Private 4x4 safari vehicle",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal spending",
      "Balloon safari (optional $500)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description:
          "Welcome at Jomo Kenyatta International Airport. Transfer to your hotel. Evening welcome dinner and full safari briefing.",
      },
      {
        day: 2,
        title: "Fly into the Serengeti",
        description:
          "Morning charter flight into the Serengeti's southern plains. As you land the wildebeest herds part around the airstrip. Afternoon game drive in the Ndutu area — excellent for cheetah and lion.",
      },
      {
        day: 3,
        title: "Central Serengeti",
        description:
          "Seronera Valley — full-day exploring the Serengeti's wildlife crossroads. Resident leopards in the fever trees, lion prides on kopjes, and vast elephant families.",
      },
      {
        day: 4,
        title: "Following the Herds North",
        description:
          "Your guide tracks the wildebeest columns as they push northward. The sound of a million animals moving as one is something you feel as much as hear.",
      },
      {
        day: 5,
        title: "Balloon Safari Morning",
        description:
          "Optional pre-dawn balloon over the Serengeti — watching the migration spread across the plains below. Champagne breakfast in the bush. Afternoon game drive.",
      },
      {
        day: 6,
        title: "North Serengeti & Mara River",
        description:
          "Drive to the Mara River crossing zone in north Serengeti. The herds gather at the banks — tension building as crocodiles wait below.",
      },
      {
        day: 7,
        title: "River Crossing Day",
        description:
          "Spend the full day at crossing points. The moment comes without warning — then chaos, crocodiles, and tens of thousands of animals thundering through the brown water. Nothing prepares you for it.",
      },
      {
        day: 8,
        title: "Fly into Masai Mara",
        description:
          "Charter flight into Kenya's Masai Mara private conservancy. Exclusive access, fewer vehicles, more wildlife. Afternoon game drive.",
      },
      {
        day: 9,
        title: "Full Day in the Mara",
        description:
          "Dawn game drive for big cats at their most active. Masai village cultural visit in the afternoon. Bush dinner under an impossibly star-filled sky.",
      },
      {
        day: 10,
        title: "Farewell Sunrise & Departure",
        description:
          "Final sunrise game drive. Charter flight to Nairobi for international connections. Farewell lunch at a Nairobi restaurant.",
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
        name: "Thomas & Claudine Renard",
        location: "Paris, France",
        rating: 5,
        initials: "TR",
        color: "#1E3A2F",
        comment:
          "Following the migration by charter plane was the best decision. We saw crossings three days in a row. An extraordinary safari company.",
      },
    ],
  },
];

export const getTourBySlug = (slug) => tours.find((t) => t.slug === slug);
export const getFeaturedTours = () => tours.slice(0, 4);
export const getToursByStyle = (s) => tours.filter((t) => t.style === s);
export const getToursByDest = (d) =>
  tours.filter((t) => t.destinationSlugs.includes(d));