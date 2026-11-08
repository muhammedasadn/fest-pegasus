import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_POST, BLOG_POSTS, BlogPost } from "@/components/pages/blog/BlogData";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const ALL_POSTS: BlogPost[] = [FEATURED_POST, ...BLOG_POSTS];

export async function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Flame Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />

      <article className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-[840px] mx-auto px-4 md:px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-black text-[#141414] hover:text-[#E53935] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL STORIES</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-bold text-[#141414]/60 uppercase tracking-wider mb-4">
              <span className="text-[#E53935] font-black">{post.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-[#141414] tracking-tight leading-[1.1] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-4 border-y-2 border-[#141414]/15">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FFAA00] border-2 border-[#141414] flex items-center justify-center font-display text-xs font-black">
                  {post.author[0]}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#141414]/60 block">Written by</span>
                  <span className="font-display text-xs sm:text-sm font-black text-[#141414]">{post.author}</span>
                </div>
              </div>

              <span className="text-xs font-bold text-[#141414]/60 uppercase tracking-wider">
                FLAME BURGER JOURNAL
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] rounded-[28px] border-3 border-[#141414] shadow-[8px_8px_0px_#141414] overflow-hidden mb-12 bg-[#FFAA00]/20">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 840px) 100vw, 840px"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-[#141414]/85 font-medium leading-relaxed space-y-6 text-base sm:text-lg">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-14 pt-8 border-t-3 border-[#141414] flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] text-white font-display text-xs sm:text-sm font-black hover:bg-[#E53935] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO JOURNAL</span>
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFAA00] text-[#141414] border-2 border-[#141414] shadow-[3px_3px_0px_#141414] font-display text-xs sm:text-sm font-black hover:bg-[#FFB72B] transition-colors"
            >
              <span>EXPLORE MENU</span>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
