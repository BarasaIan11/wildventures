import Image from "next/image";
import RevealWrapper from "@/components/shared/RevealWrapper";

const images = [
  {
    src: "/images/gallery/gallery-1.png",
    alt: "Safari vehicle at sunset",
    tall: true,
    location: "Amboseli, Kenya",
  },
  {
    src: "/images/gallery/gallery-2.png",
    alt: "Lion pride on the savanna",
    tall: false,
    location: "Serengeti, Tanzania",
  },
  {
    src: "/images/gallery/gallery-3.png",
    alt: "Hot air balloon Serengeti",
    tall: false,
    location: "Maasai Mara, Kenya",
  },
  {
    src: "/images/gallery/gallery-4.png",
    alt: "Giraffe in acacia landscape",
    tall: true,
    location: "Tarangire, Tanzania",
  },
  {
    src: "/images/gallery/gallery-5.png",
    alt: "Wildebeest migration at sunset",
    tall: false,
    location: "Mara River, Kenya",
  },
  {
    src: "/images/gallery/gallery-6.png",
    alt: "Mountain gorilla Rwanda",
    tall: false,
    location: "Volcanoes NP, Rwanda",
  },
];

export default function Gallery() {
  return (
    <section className="bg-charcoal py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-[5%] mb-16">
        <RevealWrapper>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-orange" />
            <p className="section-label light !mb-0">Moments in the Wild</p>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          {/* FIX: Forced the em to beige so it's visible on dark background */}
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-light text-white leading-tight">
            A Glimpse of What{" "}
            <em className="italic text-beige not-italic italic">Awaits</em>
          </h2>
        </RevealWrapper>
      </div>

      {/* 
          GRID FIX: 
          1. Increased gap to 4 for a more premium, spacious feel.
          2. Removed hardcoded row height to let the container be more flexible.
      */}
      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[280px]">
        {images.map((img, i) => (
          <RevealWrapper
            key={i}
            delay={i * 0.05}
            className={img.tall ? "row-span-2" : "row-span-1"}
          >
            <div className="group relative overflow-hidden w-full h-full rounded-sm cursor-pointer bg-green-dark">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-70"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Premium Overlay: Shows location on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20">
                <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
                  <p className="text-beige text-[0.65rem] tracking-[0.2em] uppercase font-bold mb-1">
                    Explore
                  </p>
                  <p className="font-serif text-white text-lg italic">
                    {img.location}
                  </p>
                  <div className="w-8 h-px bg-orange mx-auto mt-4" />
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* Subtle branding footer for the gallery */}
      <div className="max-w-7xl mx-auto px-[5%] mt-12 flex justify-end">
        <p className="text-white/20 text-[0.65rem] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} WildVentures Photography
        </p>
      </div>
    </section>
  );
}
