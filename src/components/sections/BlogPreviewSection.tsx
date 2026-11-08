"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  sectionFadeUpVariants,
  staggerContainerVariants,
  cardHoverLeftVariants,
  cardHoverRightVariants,
} from "@/lib/motion";

interface BlogPost {
  id: string;
  category: string;
  categoryBg: string;
  categoryColor: string;
  categoryRotate: number;
  readTime: string;
  title: string;
  excerpt: string;
  imgSrc: string;
  href: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "better-burger",
    category: "Food Tips",
    categoryBg: "bg-[#FFAA00]",
    categoryColor: "text-[#141414]",
    categoryRotate: -3,
    readTime: "5 min read",
    title: "The Secret to a Better Burger at Home",
    excerpt:
      "A great burger is all about balance: a flavorful patty, a soft toasted bun, crisp toppings, and a sauce that brings everything together. Discover the simple details that make every bite count.",
    imgSrc: "/assets/images/gallery-10.jpg",
    href: "#blog",
  },
  {
    id: "fresh-ingredients",
    category: "Kitchen Notes",
    categoryBg: "bg-[#237227]",
    categoryColor: "text-white",
    categoryRotate: 3,
    readTime: "4 min read",
    title: "Why Fresh Ingredients Make All the Difference",
    excerpt:
      "Fresh ingredients bring color, texture, and flavor to the table. Learn why thoughtful sourcing and careful preparation can transform everyday favorites.",
    imgSrc: "/assets/images/testimonial-avatar-1.jpg",
    href: "#blog",
  },
  {
    id: "sharing-pizza",
    category: "Food & Friends",
    categoryBg: "bg-[#141414]",
    categoryColor: "text-[#FFAA00]",
    categoryRotate: -2,
    readTime: "6 min read",
    title: "The Ultimate Guide to Sharing Pizza",
    excerpt:
      "From choosing a mix of classic and adventurous toppings to picking the right sides, here is how to make pizza night work for everyone.",
    imgSrc: "/assets/images/gallery-07.jpg",
    href: "#blog",
  },
];

export const BlogPreviewSection: React.FC = () => {
  return (
    <section
      id="blog"
      className="relative w-full bg-[#FFF4DC] px-5 py-[72px] sm:px-8 sm:py-[96px] lg:px-10 lg:py-[120px] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center max-w-[800px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
        >
          {/* Eyebrow Badge */}
          <motion.div
            variants={sectionFadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] text-[#FFAA00] font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-[1.12px] border-[2px] border-[#141414] shadow-[3px_3px_0px_0px_#FFAA00]"
          >
            <span>The FLAME BURGER Journal</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={sectionFadeUpVariants}
            className="font-display text-[36px] sm:text-[46px] lg:text-[54px] font-black uppercase text-[#141414] leading-[1.05] tracking-tight mt-5"
          >
            Stories with Extra Flavor
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={sectionFadeUpVariants}
            className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] font-medium leading-[1.5] text-[#141414]/75 mt-4 max-w-[760px]"
          >
            Discover kitchen favorites, food inspiration, ingredient spotlights,
            and tips for making every meal a little more exciting.
          </motion.p>

          {/* Read Journal CTA Button */}
          <motion.div variants={sectionFadeUpVariants} className="mt-7">
            <Link
              href="#blog"
              className="inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-[#141414] text-white font-sans font-extrabold text-[15px] sm:text-[16px] uppercase tracking-[0.48px] border-[3px] border-[#141414] shadow-[4px_4px_0px_0px_#FFAA00] hover:shadow-[2px_2px_0px_0px_#FFAA00] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 group"
            >
              <span>Read the Journal</span>
              <span className="w-[34px] h-[34px] rounded-full bg-[#FFAA00] flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-200">
                <ArrowUpRight className="w-4 h-4 text-[#141414] stroke-[3]" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* 3 Blog Cards Grid */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mt-12 sm:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          {BLOG_POSTS.map((post, idx) => {
            const cardMotionVariants =
              idx % 2 === 0 ? cardHoverLeftVariants : cardHoverRightVariants;

            return (
              <motion.article
                key={post.id}
                variants={sectionFadeUpVariants}
                className="h-full"
              >
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  variants={cardMotionVariants}
                  className="h-full flex flex-col justify-between bg-white rounded-[28px] border-[3px] border-[#141414] p-3 shadow-[6px_6px_0px_0px_#141414] transition-colors group cursor-pointer"
                >
                  <Link href={post.href} className="flex flex-col h-full">
                    {/* Top Image Banner */}
                    <div className="relative w-full h-[220px] rounded-[18px] overflow-hidden border-[2px] border-[#141414] shrink-0">
                      <Image
                        src={post.imgSrc}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between flex-1 p-4 sm:p-5">
                      <div>
                        {/* Tag & Read Time */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            style={{
                              transform: `rotate(${post.categoryRotate}deg)`,
                            }}
                            className={`inline-block px-3 py-1 rounded-full border-[2px] border-[#141414] text-[12px] font-sans font-extrabold uppercase tracking-wide shadow-[2px_2px_0px_0px_#141414] ${post.categoryBg} ${post.categoryColor}`}
                          >
                            {post.category}
                          </span>
                          <span className="font-sans text-[13px] sm:text-[14px] font-semibold text-[#141414]/65">
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-display text-[19px] sm:text-[21px] font-black uppercase text-[#141414] leading-[1.18] mt-4 group-hover:text-[#237227] transition-colors">
                          {post.title}
                        </h4>

                        {/* Excerpt */}
                        <p className="font-sans text-[14px] sm:text-[15px] font-medium leading-[1.55] text-[#141414]/75 mt-3 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read Story CTA */}
                      <div className="flex items-center gap-2 pt-5 text-[#237227] font-sans font-extrabold text-[15px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        <span>Read Story</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
