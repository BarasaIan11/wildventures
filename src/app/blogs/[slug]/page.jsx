import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Share2, User } from "lucide-react";
import { getBlogBySlug, blogs } from "@/data/blogs";
import BookingCTA from "@/components/home/BookingCTA";
import RevealWrapper from "@/components/shared/RevealWrapper";

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return { title: `${post.title} | Zafronix Safaris Journal` };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  // Related posts excluding current one
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 2);

  return (
    <main className="bg-white">
      {/* ── 1. HERO SECTION (Consistent 65vh with other slugs) */}
      <div className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden bg-charcoal">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover animate-hero-zoom opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 px-[5%] w-full max-w-7xl mx-auto pt-24">
          <nav className="flex items-center gap-2 text-white/60 text-[0.75rem] uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-beige transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <Link href="/blogs" className="hover:text-beige transition-colors">Blogs</Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-beige">{post.category}</span>
          </nav>

          <RevealWrapper>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-light text-white leading-[1.1] max-w-4xl mb-8">
              {post.title}
            </h1>
          </RevealWrapper>

          <div className="flex flex-wrap gap-8 text-white/80 text-[0.8rem] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-orange" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-orange" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={14} className="text-orange" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. ARTICLE LAYOUT (Left-Aligned Grid) */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">

          {/* Main Content Column */}
          <div className="space-y-12">
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Share Footer */}
            <div className="pt-12 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-400 font-bold">Share this insight</p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-orange hover:border-orange transition-all duration-300">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar (Consistent with Tour pages) */}
          <aside className="sticky top-28 space-y-10">
            <div>
              <p className="section-label !mb-6">Related Stories</p>
              <div className="space-y-8">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blogs/${r.slug}`} className="group block">
                    <div className="relative aspect-video overflow-hidden rounded-sm mb-4 bg-charcoal">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                      />
                    </div>
                    <p className="text-[0.6rem] uppercase tracking-widest text-orange font-bold mb-2">{r.category}</p>
                    <h4 className="font-serif text-lg text-charcoal leading-tight group-hover:text-green transition-colors">
                      {r.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Simple Sidebar Link back to All Blogs */}
            <div className="pt-10 border-t border-gray-100">
              <Link href="/blogs" className="flex items-center gap-3 text-[0.75rem] font-bold uppercase tracking-widest text-charcoal/40 hover:text-orange transition-colors">
                <ChevronLeft size={16} /> Back to all articles
              </Link>
            </div>
          </aside>

        </div>
      </section>
      <BookingCTA />
    </main>
  );
}