"use client";

import { useState } from "react";
import { MenuHero } from "./MenuHero";
import { MenuIntro } from "./MenuIntro";
import { MenuCategorySection } from "./MenuCategorySection";
import { MenuCTA } from "./MenuCTA";
import { MENU_CATEGORIES } from "./MenuData";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = MENU_CATEGORIES.map((c) => ({ id: c.id, name: c.name }));

  const filteredCategories =
    activeCategory === "all"
      ? MENU_CATEGORIES
      : MENU_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <>
      <MenuHero />
      <MarqueeSection />
      <MenuIntro
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        categories={categories}
      />

      <div className="flex flex-col">
        {filteredCategories.map((category) => (
          <MenuCategorySection key={category.id} category={category} />
        ))}
      </div>

      <MenuCTA />
    </>
  );
}
