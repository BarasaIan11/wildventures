import Image from "next/image";
import RevealWrapper from "@/components/shared/RevealWrapper";

const images = [
  {
    src: "/images/gallery/gallery-1.png",
    alt: "elephants herd kilimanjaro",
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
    location: "Serengeti, Tanzania",
  },
  {
    src: "/images/gallery/gallery-4.png",
    alt: "Giraffe in acacia landscape",
    tall: true,
    location: "Tarangire, Tanzania",
  },
  {
    src: "/images/gallery/gallery-5.png",
    alt: "zebras in savannah",
    tall: false,
    location: "Maasai mara, Kenya",
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
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-light text-white leading-tight">
            A Glimpse of What{" "}
            <em className="text-beige">Awaits</em>
          </h2>
        </RevealWrapper>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[280px]">
        {images.map((img, i) => (
          <RevealWrapper
            key={i}
            delay={i * 0.05}
            className={img.tall ? "row-span-2" : "row-span-1"}
          >
            <figure
              tabIndex={0}
              aria-label={`Gallery image: ${img.location}`}
              className="group relative overflow-hidden w-full h-full rounded-sm bg-green-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-orange m-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-focus:scale-110 group-hover:opacity-70 group-focus:opacity-70"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Overlay: Persistently showing location, with explore text on hover/focus */}
              <figcaption className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-500">
                <div className="text-center px-4">
                  <p className="text-beige text-[0.65rem] tracking-[0.2em] uppercase font-bold mb-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0">
                    Explore
                  </p>
                  <p className="font-serif text-white text-lg italic">
                    {img.location}
                  </p>
                  <div className="w-8 h-px bg-orange mx-auto mt-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
                </div>
              </figcaption>
            </figure>
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
