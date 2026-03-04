import Image from "next/image";
import RevealWrapper from "@/components/shared/RevealWrapper";

const images = [
  {
    src: "/images/gallery/gallery-1.png",
    alt: "Safari vehicle at sunset",
    tall: true,
  },
  {
    src: "/images/gallery/gallery-2.png",
    alt: "Lion pride on the savanna",
    tall: false,
  },
  {
    src: "/images/gallery/gallery-3.png",
    alt: "Hot air balloon Serengeti",
    tall: false,
  },
  {
    src: "/images/gallery/gallery-4.png",
    alt: "Giraffe in acacia landscape",
    tall: true,
  },
  {
    src: "/images/gallery/gallery-5.png",
    alt: "Wildebeest migration at sunset",
    tall: false,
  },
  {
    src: "/images/gallery/gallery-6.png",
    alt: "Mountain gorilla Rwanda",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section className="bg-charcoal py-20">
      <div className="px-[5%] mb-10">
        <RevealWrapper>
          <p className="section-label">Moments in the Wild</p>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2 className="section-title white">
            A Glimpse of What <em>Awaits</em>
          </h2>
        </RevealWrapper>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-1"
        style={{ gridAutoRows: "280px" }}
      >
        {images.map((img, i) => (
          <RevealWrapper
            key={i}
            delay={i * 0.07}
            className={img.tall ? "row-span-2" : ""}
          >
            <div className="group relative overflow-hidden w-full h-full min-h-[280px] cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-green/30 transition-all duration-400 flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  +
                </span>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
