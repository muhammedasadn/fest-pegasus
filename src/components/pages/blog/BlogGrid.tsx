"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { BLOG_POSTS } from "./BlogData";
import { Clock, ArrowRight } from "lucide-react";

export function BlogGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="yellow"
            className="mb-4 uppercase tracking-wider text-xs md:text-sm font-bold inline-flex items-center gap-1.5"
          >
            MORE STORIES
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            FRESH OFF THE PASS
          </h2>
          <p className="text-base sm:text-lg text-[#141414]/75 font-medium leading-relaxed">
            Grab a drink, pull up a chair, and dive into our weekly journal articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-[28px] border-3 border-[#141414] shadow-[6px_6px_0px_#141414] hover:shadow-[9px_9px_0px_#141414] transition-all overflow-hidden flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative w-full h-[220px] bg-[#FFAA00]/20 border-b-3 border-[#141414] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                    <div className="absolute top-4 left-4 bg-white text-[#141414] font-display text-xs font-black px-3.5 py-1 rounded-full border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#141414]/60 uppercase tracking-wider mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#141414] tracking-tight leading-snug mb-3 group-hover:text-[#E53935] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#141414]/75 font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-3 border-t-2 border-[#141414]/10 flex items-center justify-between font-display text-xs sm:text-sm font-black text-[#141414] group-hover:text-[#E53935]">
                  <span>READ STORY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
