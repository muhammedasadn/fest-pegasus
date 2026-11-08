"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_POST } from "./BlogData";
import { Clock, ArrowRight } from "lucide-react";

export function FeaturedArticle() {
  const post = FEATURED_POST;

  return (
    <section className="py-12 md:py-16 bg-[#FFF4DC] border-b-3 border-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <Link href={`/blog/${post.slug}`} className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[32px] border-3 border-[#141414] shadow-[8px_8px_0px_#141414] hover:shadow-[10px_10px_0px_#141414] transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image Left */}
            <div className="lg:col-span-7 relative h-[280px] sm:h-[360px] lg:h-auto border-b-3 lg:border-b-0 lg:border-r-3 border-[#141414] bg-[#FFAA00]/20 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
              <div className="absolute top-5 left-5 bg-[#FFAA00] text-[#141414] font-display text-xs md:text-sm font-black px-4 py-1.5 rounded-full border-2 border-[#141414] shadow-[3px_3px_0px_#141414]">
                FEATURED READ
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold text-[#141414]/60 uppercase tracking-wider mb-4">
                  <span className="text-[#E53935] font-black">{post.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#141414] tracking-tight leading-[1.15] mb-5 group-hover:text-[#E53935] transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm sm:text-base text-[#141414]/75 font-medium leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-2 font-display text-sm font-black text-[#141414] group-hover:text-[#E53935] transition-colors">
                <span>READ STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
