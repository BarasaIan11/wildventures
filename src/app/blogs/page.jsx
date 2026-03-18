import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/shared/RevealWrapper";
import BookingCTA from "@/components/home/BookingCTA";
import { blogs } from "@/data/blogs";
import { Clock, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Safari Journal & Expert Guides | Zafronix Safaris",
  description: "Expert advice on African safaris. Learn about the best times to visit, costs, and comparisons for your next journey.",
};

export default function BlogsPage() {
  return (
    <main className="bg-ivory/30">
      {/* ── HERO SECTION */}
      <div className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/gallery/gallery-7.png"
          alt="African safari journal"
          fill
          priority
          className="object-cover animate-hero-zoom opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto pt-20">
          <RevealWrapper>
            <p className="section-label light">Safari Blogs</p>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light text-white leading-[1] mb-8">
              Stories from <br />
              <span className="italic font-normal text-beige">The Savanna</span>
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p className="text-white/80 text-[1.15rem] leading-relaxed max-w-xl font-light">
              Expert insights, planning guides, and breathtaking photography to help you navigate your next great expedition.
            </p>
          </RevealWrapper>
        </div>
      </div>

      {/* ── BLOGS GRID */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {blogs.map((post, i) => (
            <RevealWrapper key={post.slug} delay={i * 0.1}>
              <Link href={`/blogs/${post.slug}`} className="group block">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 bg-charcoal shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-green/90 backdrop-blur-md px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[0.7rem] uppercase tracking-widest text-gray-400 font-bold">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-orange" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-[2.2rem] text-charcoal group-hover:text-green transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-[1.05rem] text-gray-500 font-light leading-relaxed line-clamp-2 italic">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 flex items-center gap-3 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-orange group-hover:gap-5 transition-all">
                    <span>Read Article</span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}