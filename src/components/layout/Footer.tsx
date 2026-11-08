"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { sectionFadeUpVariants, staggerContainerVariants } from "@/lib/motion";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#141414] text-white pt-16 sm:pt-20 lg:pt-24 pb-7 sm:pb-9 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {/* Top 4-Column Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          {/* Column 1: Brand & Contacts */}
          <motion.div
            variants={sectionFadeUpVariants}
            className="md:col-span-12 lg:col-span-5 flex flex-col items-start"
          >
            {/* Logo Row */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#237227] border-[2px] border-white/20 flex items-center justify-center shrink-0 -rotate-6 group-hover:rotate-0 transition-transform duration-200">
                <Flame className="w-6 h-6 text-[#FFAA00] fill-[#FFAA00]" />
              </span>
              <span className="font-display text-[26px] sm:text-[30px] font-black uppercase tracking-tight text-white">
                FLAME BURGER
              </span>
            </Link>

            {/* Tagline */}
            <h3 className="font-display text-[22px] sm:text-[26px] lg:text-[28px] font-black uppercase text-[#FFAA00] leading-[1.1] mt-5">
              BIG FLAVOR. GOOD MOOD. EVERY BITE.
            </h3>

            {/* Address & Contact info */}
            <div className="flex flex-col gap-3 mt-6 font-sans text-[15px] sm:text-[17px] text-white/75">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FFAA00] shrink-0" />
                <span>123 DD Street, Malappuram, NY 11201</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFAA00] shrink-0" />
                <a
                  href="tel:+916238710413"
                  className="hover:text-white transition-colors"
                >
                  +91 62 387 10413
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFAA00] shrink-0" />
                <a
                  href="mailto:hello@flameburger.example"
                  className="hover:text-white transition-colors"
                >
                  hello@flameburger.example
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            variants={sectionFadeUpVariants}
            className="col-span-6 md:col-span-4 lg:col-span-2 flex flex-col items-start"
          >
            <h4 className="font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-[1.12px] text-[#FFAA00] mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[15px] sm:text-[17px] text-white/75">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#offers"
                  className="hover:text-white transition-colors"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href="#catering"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#hours"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Explore */}
          <motion.div
            variants={sectionFadeUpVariants}
            className="col-span-6 md:col-span-4 lg:col-span-2 flex flex-col items-start"
          >
            <h4 className="font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-[1.12px] text-[#FFAA00] mb-5">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[15px] sm:text-[17px] text-white/75">
              <li>
                <Link
                  href="#catering"
                  className="hover:text-white transition-colors"
                >
                  Catering
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Follow The Flavor */}
          <motion.div
            variants={sectionFadeUpVariants}
            className="md:col-span-4 lg:col-span-3 flex flex-col items-start"
          >
            <h4 className="font-sans font-extrabold text-[13px] sm:text-[14px] uppercase tracking-[1.12px] text-[#FFAA00] mb-5">
              Follow The Flavor
            </h4>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-[#FFAA00] border-[2px] border-[#141414] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center text-[#141414] hover:scale-105 active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-12 h-12 rounded-full bg-[#FFAA00] border-[2px] border-[#141414] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center text-[#141414] hover:scale-105 active:scale-95 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 9.79 5.38 6.34 6.34 0 0 0 2.89-5.38V8.71a8.27 8.27 0 0 0 4.77 1.52v-3.4c-.35-.01-.7-.06-1-.14z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-[#FFAA00] border-[2px] border-[#141414] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center text-[#141414] hover:scale-105 active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 rounded-full bg-[#FFAA00] border-[2px] border-[#141414] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center text-[#141414] hover:scale-105 active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Big Giant Wordmark */}
        <motion.div
          className="w-full flex justify-center mt-12 sm:mt-16 lg:mt-20 overflow-hidden select-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-[52px] sm:text-[96px] md:text-[116px] lg:text-[130px] font-black uppercase text-[#FFAA00] tracking-[-0.04em] leading-none text-center">
            FLAME BURGER
          </span>
        </motion.div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 mt-8 mb-6" />

        {/* Copyright Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] sm:text-[14px] text-white/50 font-sans text-center sm:text-left">
          <p>© 2026 FLAME BURGER. All rights reserved.</p>
          <p>Cooked up with extra Flame in Malappuram</p>
        </div>
      </div>
    </footer>
  );
};
