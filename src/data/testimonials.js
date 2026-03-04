// export const testimonials = [
//   { id:1, name:'Sarah Mitchell', location:'London, UK', trip:'Great Migration Safari, Kenya', rating:5, featured:false, avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', text:"Witnessing the Great Migration was surreal. WildVentures positioned us perfectly — we were the only vehicle at the river crossing. Pure magic." },
//   { id:2, name:'James & Priya Okonkwo', location:'Lagos, Nigeria', trip:'Honeymoon Safari, Tanzania', rating:5, featured:true, avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', text:"From the moment we landed to our tearful goodbye, every single detail was thought through. This wasn't a tour — it was a transformation." },
//   { id:3, name:'Linda Bergström', location:'Stockholm, Sweden', trip:'Family Safari, Kenya & Tanzania', rating:5, featured:false, avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', text:"Our guide Emmanuel knew every bird call, every animal track. Our kids learned more in 7 days than a year of school." },
//   { id:4, name:'Michael Torres', location:'New York, USA', trip:'Uganda Primates Safari', rating:5, featured:false, avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', text:"Looking into the eyes of a mountain gorilla from just a few feet away... there are no words. WildVentures made this dream come true." },
//   { id:5, name:'Aisha Kamara', location:'Dubai, UAE', trip:'Ngorongoro Crater Safari', rating:5, featured:false, avatar:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80', text:"The crater was like descending into Eden. We saw black rhino, lion, elephant — all in one day. Beyond luxurious." },
//   { id:6, name:'The Henderson Family', location:'Melbourne, Australia', trip:'Kenya Family Safari', rating:5, featured:false, avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', text:"Three generations on one safari. WildVentures handled everything seamlessly. We're already planning our return trip." },
// ]

// export const getFeatured  = () => testimonials.find(t => t.featured)
// export const getRegular   = () => testimonials.filter(t => !t.featured)

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "London, UK",
    trip: "Great Migration Safari, Kenya",
    rating: 5,
    featured: false,
    initials: "SM",
    color: "#2F4F3E",
    text: "Witnessing the Great Migration was surreal. WildVentures positioned us perfectly — we were the only vehicle at the river crossing. Pure magic.",
  },
  {
    id: 2,
    name: "James & Priya Okonkwo",
    location: "Lagos, Nigeria",
    trip: "Honeymoon Safari, Tanzania",
    rating: 5,
    featured: true,
    initials: "JP",
    color: "#C47A2C",
    text: "From the moment we landed to our tearful goodbye, every single detail was thought through. This wasn't a tour — it was a transformation.",
  },
  {
    id: 3,
    name: "Linda Bergström",
    location: "Stockholm, Sweden",
    trip: "Family Safari, Kenya & Tanzania",
    rating: 5,
    featured: false,
    initials: "LB",
    color: "#2F4F3E",
    text: "Our guide Emmanuel knew every bird call, every animal track. Our kids learned more in 7 days than a year of school.",
  },
  {
    id: 4,
    name: "Michael Torres",
    location: "New York, USA",
    trip: "Uganda Primates Safari",
    rating: 5,
    featured: false,
    initials: "MT",
    color: "#1E1E1E",
    text: "Looking into the eyes of a mountain gorilla from just a few feet away... there are no words. WildVentures made this dream come true.",
  },
  {
    id: 5,
    name: "Aisha Kamara",
    location: "Dubai, UAE",
    trip: "Ngorongoro Crater Safari",
    rating: 5,
    featured: false,
    initials: "AK",
    color: "#C47A2C",
    text: "The crater was like descending into Eden. We saw black rhino, lion, elephant — all in one day. Beyond luxurious.",
  },
  {
    id: 6,
    name: "The Henderson Family",
    location: "Melbourne, Australia",
    trip: "Kenya Family Safari",
    rating: 5,
    featured: false,
    initials: "HF",
    color: "#2F4F3E",
    text: "Three generations on one safari. WildVentures handled everything seamlessly. We're already planning our return trip.",
  },
];

export const getFeatured = () => testimonials.find((t) => t.featured);
export const getRegular = () => testimonials.filter((t) => !t.featured);
