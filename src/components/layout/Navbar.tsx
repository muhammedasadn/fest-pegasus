"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Offers", href: "/offers" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine if link is currently active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-4 md:px-6 pointer-events-none">
      <div className="max-w-[1392px] mx-auto w-full pointer-events-auto">
        <nav
          aria-label="Main Navigation"
          className={cn(
            "w-full h-[64px] md:h-[68px] px-4 md:px-6 bg-white border-[3px] border-[#141414] rounded-[34px] shadow-[5px_5px_0px_0px_#141414] flex items-center justify-between transition-all duration-200",
            scrolled && "shadow-[6px_6px_0px_0px_#141414]"
          )}
        >
          {/* Logo Badge */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer select-none"
            aria-label="Flame Burger Home"
          >
            <div className="h-[40px] px-3.5 bg-[#237227] border-[3px] border-[#141414] rounded-full flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#141414] group-hover:scale-105 transition-transform">
              <Flame className="w-4 h-4 text-[#FFAA00] fill-[#FFAA00]" />
              <span className="font-display font-normal text-white text-[15px] md:text-[16px] tracking-tight uppercase">
                FLAME BURGER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-body font-extrabold text-[15px] uppercase tracking-[0.03em] transition-colors relative py-1",
                    active
                      ? "text-[#141414]"
                      : "text-[#141414]/75 hover:text-[#141414]"
                  )}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#FFAA00] rounded-full border-b border-[#141414]"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              href="/menu"
              variant="yellow"
              size="sm"
              className="h-[42px] px-6 text-[14px]"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile / Tablet Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-[42px] h-[42px] bg-[#FFAA00] border-[3px] border-[#141414] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#141414] cursor-pointer hover:bg-[#ffb41f] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#141414] stroke-[2.5]" />
              ) : (
                <Menu className="w-5 h-5 text-[#141414] stroke-[2.5]" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="mt-3 p-6 bg-white border-[3px] border-[#141414] rounded-[28px] shadow-[5px_5px_0px_0px_#141414] flex flex-col gap-4 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, idx) => {
                  const active = isLinkActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.035 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "font-body font-extrabold text-[17px] uppercase tracking-[0.03em] py-2.5 px-3 rounded-xl border border-transparent flex items-center justify-between transition-all",
                          active
                            ? "bg-[#FFAA00]/20 text-[#141414] font-black border-[#FFAA00]"
                            : "text-[#141414] hover:bg-[#FFF4DC]"
                        )}
                      >
                        <span>{link.name}</span>
                        {active && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFAA00] border-[1.5px] border-[#141414] shadow-[1px_1px_0px_#141414]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#141414]/10">
                <Button
                  href="/menu"
                  variant="yellow"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
