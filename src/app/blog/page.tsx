import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/pages/blog/BlogHero";
import { FeaturedArticle } from "@/components/pages/blog/FeaturedArticle";
import { BlogGrid } from "@/components/pages/blog/BlogGrid";
import { NewsletterSection } from "@/components/pages/blog/NewsletterSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export const metadata: Metadata = {
  title: "The Flame Journal — Stories & Kitchen Notes",
  description: "Fresh stories. Full of flavor. Discover burger grilling tips, ingredient spotlights, and pizza guides from the Flame burger kitchen.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFF4DC] flex flex-col">
      <Navbar />
      <BlogHero />
      <MarqueeSection />
      <FeaturedArticle />
      <BlogGrid />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
