import Image from "next/image";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { Compass, Sparkles, Leaf, ShieldCheck } from "lucide-react"; // Using Lucide for a premium look

const features = [
  {
    icon: Compass,
    title: "Expert Local Guides",
    desc: "Born and raised in the wild — naturalists and storytellers who bring Africa's bush to life.",
  },
  {
    icon: Sparkles,
    title: "Fully Tailored Itineraries",
    desc: "No two safaris are the same. We design yours around your specific interests and pace.",
  },
  {
    icon: Leaf,
    title: "Responsible Travel",
    desc: "We partner with eco-certified lodges to ensure your adventure gives back to the land.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    desc: "From visa advice to airport transfers, we are with you every step of the journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-green">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image stack - Added more depth */}
        <RevealWrapper className="relative h-[450px] md:h-[550px]">
          <div className="absolute top-0 right-0 w-4/5 h-[85%] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/about-hero.png"
              alt="Expert safari guide"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-sm overflow-hidden border-[8px] border-green shadow-card-hover">
            <Image
              src="/images/hero/reviews-hero.png"
              alt="Travelers in Africa"
              fill
              sizes="(min-width: 1024px) 28vw, 55vw"
              className="object-cover"
            />
          </div>

          {/* Years badge - Styled as an 'Official Seal' */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 bg-orange text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-orange hidden lg:flex border-4 border-green">
            <p className="font-serif text-3xl font-bold leading-none">15+</p>
            <p className="text-[0.6rem] tracking-widest uppercase mt-1 text-center font-bold">
              Years of
              <br />
              Excellence
            </p>
          </div>
        </RevealWrapper>

        {/* Content */}
        <div className="lg:pl-10">
          <RevealWrapper>
            <p className="section-label light">Why WildVentures</p>
            <h2 className="section-title white mb-6">
              Crafted with Care,
              <br />
              <span className="italic font-normal text-beige">
                Delivered with Passion
              </span>
            </h2>
            <p className="text-white/60 text-[1.05rem] leading-relaxed mb-12 max-w-lg font-light">
              We go beyond booking tours. We are a team of naturalists and
              adventurers dedicated to connecting you with Africa's most
              breathtaking moments.
            </p>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <RevealWrapper key={title} delay={0.1 * i}>
                <div className="group">
                  <div className="w-10 h-10 rounded-sm bg-beige/10 flex items-center justify-center mb-4 border border-white/10 group-hover:bg-orange transition-colors duration-500">
                    <Icon className="w-5 h-5 text-beige group-hover:text-white" />
                  </div>
                  <h3 className="text-white font-medium mb-2 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-[0.88rem] text-white/50 leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
