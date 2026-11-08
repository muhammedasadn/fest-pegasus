# Implementation Plan: Pixel-Faithful Next.js Rebuild

**Reference Site:** [https://real-project-691891.framer.app/](https://real-project-691891.framer.app/)  
**Target Quality Bar:** Pixel-faithful, fully responsive, animation-identical, 60/120 FPS performance.

---

## 1. 3D Elements Approach & Justification

### Inspection Finding
Through complete DOM query, network trace interception, and compiled Framer chunk decompilation, we confirmed:
- No Spline files (`.splinecode`), Three.js WebGL canvases, or 3D video loops exist on the reference site.
- The centerpiece "Burger Plate" is an ultra-high-resolution 1200×1200 isolated cutout PNG of a gourmet smash burger on a diner plate (`5DEhx8qXRUbEXqRwbwUuzYm1GpU.png`), rotated at `-25deg`, with continuous floating spring/tween physics layered above the giant typography `FLAME BURGER`.
- Card 3D effects are achieved via Framer Motion physics springs (`whileHover: { y: -6, rotate: -2 }` / `rotate: 2`).

### Our Faithful & Enhanced Architecture:
1. **Lightest Faithful Option:**
   - Use Next.js `<Image>` with priority loading, `sizes`, and transparent PNG rendering.
   - Replicate the exact Framer mirror tween floating loop (`ease: [0.45, 0, 0.55, 1], duration: 2.8s, repeat: Infinity, repeatType: "mirror"`).
2. **Tactile 3D Enhancement (Interactive Parallax):**
   - Provide a dedicated `src/components/three/BurgerPlateVisual.tsx` component that uses Framer Motion's `useMotionValue`, `useSpring`, and `useTransform` to add smooth, subtle 3D cursor-tracking perspective (`transformPerspective: 1000`, `rotateX`, `rotateY`) on desktop, and pure accelerometer/floating physics on mobile.
   - Zero WebGL overhead, zero lag, instant first paint, 100 Lighthouse score friendly.

---

## 2. Component Tree

```
App (src/app/page.tsx)
 ├── Navbar (src/components/layout/Navbar.tsx)
 │    ├── LogoBadge
 │    ├── DesktopNavLinks
 │    ├── ActionButton ("Order Now")
 │    └── MobileNavDrawer (AnimatePresence)
 ├── HeroSection (src/components/sections/HeroSection.tsx)
 │    ├── EyebrowBadge ("Fresh • Fast • Full of Flavor")
 │    ├── HeroHeading ("CRAFTED WITH FIRE." - Kinetic Staggered Reveal)
 │    ├── HeroDescription
 │    ├── HeroButtons ("Order Now", "Explore Menu")
 │    └── HeroVisual
 │         ├── GiantTextBackground ("FLAME BURGER" 248px)
 │         ├── BurgerPlateVisual (Floating burger cutout with 3D tilt)
 │         └── FloatingBadges (4 animated sticker badges with continuous drift)
 ├── MarqueeSection (src/components/sections/MarqueeSection.tsx)
 │    └── InfiniteMarqueeTrack (Dual-layer looping ticker with tri-color gradient)
 ├── CategoriesSection (src/components/sections/CategoriesSection.tsx)
 │    ├── SectionHeader (Pill badge, H2, "Explore Menu" CTA)
 │    └── CategoryGrid (5 CategoryCards with 3px border, 4px shadow, hover tilt)
 ├── OffersSection (src/components/sections/OffersSection.tsx)
 │    ├── SectionHeader ("GOOD FOOD. EVEN BETTER DEALS.")
 │    ├── OffersGrid (3 DealCards with discount badges & "Order This Deal" CTA)
 │    └── SectionFooterCTA ("See All Offers")
 ├── FeaturedMenuSection (src/components/sections/FeaturedMenuSection.tsx)
 │    ├── SectionHeader ("HANDCRAFTED PERFECTION")
 │    ├── MenuGrid (6 MenuItemCards with price tags, tags, and descriptions)
 │    └── SectionFooterCTA ("See Full Menu")
 ├── AboutSection (src/components/sections/AboutSection.tsx)
 │    ├── AboutContent (Eyebrow, H2, story copy, stats/highlights, CTA)
 │    └── AboutVisuals (2 Angled polaroid-style framed photos with hard shadows)
 ├── OpeningHoursSection (src/components/sections/OpeningHoursSection.tsx)
 │    └── HoursCard ("NOW OPEN" pulse badge, daily hours schedule, table booking)
 ├── WhyChooseUsSection (src/components/sections/WhyChooseUsSection.tsx)
 │    ├── SectionHeader ("WHY WE'RE DIFFERENT")
 │    └── FeatureGrid (4 WhyCards: Angus Beef, Flame Sauce, Golden Bun, Fast Service)
 ├── CateringEventsSection (src/components/sections/CateringEventsSection.tsx)
 │    ├── SectionHeader ("CELEBRATE WITH FLAME BURGER")
 │    ├── CateringGrid (3 photo cards with service descriptions)
 │    └── CateringCTA ("Plan Your Event")
 ├── TestimonialsSection (src/components/sections/TestimonialsSection.tsx)
 │    ├── SectionHeader ("LOVED BY THOUSANDS")
 │    └── TestimonialsGrid (3 ReviewCards: 5-star ratings, quotes, user avatars)
 ├── FAQSection (src/components/sections/FAQSection.tsx)
 │    ├── SectionHeader ("ASK US ANYTHING")
 │    └── FAQAccordion (5 Spring collapsible accordion items with Plus/Minus toggle)
 ├── GallerySection (src/components/sections/GallerySection.tsx)
 │    └── DualRowGalleryMarquee (Continuous bi-directional photo ticker)
 ├── BlogPreviewSection (src/components/sections/BlogPreviewSection.tsx)
 │    ├── SectionHeader ("THE FLAME JOURNAL")
 │    ├── BlogGrid (3 ArticleCards: date, read time, title, excerpt, thumbnail)
 │    └── BlogCTA ("Read the Journal")
 ├── FinalCTASection (src/components/sections/FinalCTASection.tsx)
 │    ├── Badge ("Hungry Yet?")
 │    ├── Headline ("YOUR NEXT FAVORITE BITE IS WAITING.")
 │    ├── OrderNowButton
 │    └── FloatingStickerBadges (4 animated floating badges)
 └── Footer (src/components/layout/Footer.tsx)
      ├── GiantWordmark ("FLAME BURGER")
      ├── FooterLinksGrid (Navigation, Menu, Legal)
      ├── ContactInfo (Phone, Email, Address, Hours)
      └── BottomBar (Social Icons: Instagram, TikTok, Facebook, YouTube + Copyright)
```

---

## 3. Directory & Folder Structure

```
src/
 ├── app/
 │    ├── globals.css          # Design tokens, @theme variables, neo-brutalist utilities
 │    ├── layout.tsx           # Archivo Black & Bricolage Grotesque next/font config
 │    ├── page.tsx             # Composed Home Page
 │    └── favicon.ico
 ├── components/
 │    ├── ui/                  # Design primitives
 │    │    ├── Badge.tsx       # Pill badge with border & shadow
 │    │    ├── Button.tsx      # Neo-brutalist interactive button (Yellow/White/Ink/Red)
 │    │    ├── Card.tsx        # Base card with 3px border, 4px shadow, hover spring
 │    │    └── Accordion.tsx   # Spring-driven accordion item for FAQ
 │    ├── layout/
 │    │    ├── Navbar.tsx      # Fixed responsive floating navbar + mobile drawer
 │    │    ├── Footer.tsx      # Neo-brutalist footer
 │    │    ├── Container.tsx   # Max-width 1200px responsive container
 │    │    └── Section.tsx     # Standard section wrapper with padding
 │    ├── sections/
 │    │    ├── HeroSection.tsx
 │    │    ├── MarqueeSection.tsx
 │    │    ├── CategoriesSection.tsx
 │    │    ├── OffersSection.tsx
 │    │    ├── FeaturedMenuSection.tsx
 │    │    ├── AboutSection.tsx
 │    │    ├── OpeningHoursSection.tsx
 │    │    ├── WhyChooseUsSection.tsx
 │    │    ├── CateringEventsSection.tsx
 │    │    ├── TestimonialsSection.tsx
 │    │    ├── FAQSection.tsx
 │    │    ├── GallerySection.tsx
 │    │    ├── BlogPreviewSection.tsx
 │    │    └── FinalCTASection.tsx
 │    └── three/
 │         └── BurgerPlateVisual.tsx  # Interactive 3D tilt & floating burger plate
 ├── hooks/
 │    ├── useMediaQuery.ts     # Breakpoint detection (desktop, tablet, mobile)
 │    ├── useScrollSpy.ts      # Active section detection
 │    └── useReducedMotion.ts  # Accessibility respect
 ├── lib/
 │    ├── motion.ts            # Shared spring presets, easing curves, variants
 │    └── utils.ts             # cn() helper
 └── data/
      └── siteData.ts          # Strongly-typed data for menu, categories, offers, etc.
public/
 └── assets/
      ├── images/              # All 34 downloaded original high-res assets
      └── icons/               # SVG sticker badges & marks
docs/
 ├── INSPECTION.md             # Complete design token, animation & asset audit
 ├── PLAN.md                   # Architecture & build blueprint
 ├── DECISIONS.md              # Technical choices & dependency justifications
 ├── PROGRESS.md               # Live verification checklist
 └── QA_REPORT.md              # Final side-by-side verification report
```

---

## 4. Phase 2 & Phase 3 Build Order (Brick-by-Brick)

Each step will strictly follow the Operating Rules:
1. Build static semantic HTML structure.
2. Match typography, spacing, colors, borders, and shadows to measured values.
3. Add Framer Motion animations matching extracted spring/tween configs.
4. Verify responsive behavior at 1440px, 820px, and 390px.
5. Screenshot side by side against `reference/` images.
6. Fix differences, update `docs/PROGRESS.md`, and report status.

| Step | Component / Section | Key Milestones & Animation Details | Verification Screenshots |
|------|---------------------|-----------------------------------|--------------------------|
| **1** | Design Primitives & Tokens | Tailwind theme, CSS vars, fonts (`Archivo Black`, `Bricolage Grotesque`), `Button`, `Badge`, `Card`. | Primitives check |
| **2** | `Navbar` | Floating pill (1392px), 3px border, 5px shadow, desktop links, mobile hamburger drawer with spring animation. | `navbar.png` at 1440, 820, 390 + `menu-open.png` |
| **3** | `HeroSection` (Static & Text Reveal) | Eyebrow pill, kinetic staggered word reveal for "CRAFTED WITH FIRE." (`blur(10px)`, `rotate(-6deg)`, spring `0.7s`), buttons row. | `01-hero.png` at 1440, 820, 390 |
| **4** | `HeroSection` (3D Centerpiece & Floating Stickers) | Centerpiece `BurgerPlateVisual` (-25deg, mirror float loop), 4 floating sticker badges with drift animations. | `01-hero.png` comparison |
| **5** | `MarqueeSection` | Infinite linear looping marquee band with tri-color gradient background and 3px borders. | `02-marquee.png` at 1440, 820, 390 |
| **6** | `CategoriesSection` | Section header, 5 Category cards with photo covers, hover 3D tilt (`-2deg`/`+2deg`), mobile horizontal scroll. | `03-popular-categories.png` at 1440, 820, 390 |
| **7** | `OffersSection` | Dark section (`#141414`), 3 deal cards with discount badges ("Save 25%", "2 for 1"), "Order This Deal" buttons. | `04-special-offers.png` at 1440, 820, 390 |
| **8** | `FeaturedMenuSection` | Warm cream (`#FFF4DC`), 6 menu item cards with prices, tags, and hover springs. | `05-featured-menu.png` at 1440, 820, 390 |
| **9** | `AboutSection` | Green section (`#237227`), story typography, stats badges, 2 stacked angled polaroid photo cards. | `06-about.png` at 1440, 820, 390 |
| **10** | `OpeningHoursSection` | Amber yellow (`#FFAA00`), "NOW OPEN" live status card, daily schedule table, "Book a Table" CTA. | `07-opening-hours.png` at 1440, 820, 390 |
| **11** | `WhyChooseUsSection` | 4 Feature cards with colored badge icons, 3px borders, 4px shadows. | `08-why-choose-us.png` at 1440, 820, 390 |
| **12** | `CateringEventsSection` | Dark section (`#141414`), event cards (Food Truck, Private Parties, Corporate), "Plan Your Event" CTA. | `09-catering-events.png` at 1440, 820, 390 |
| **13** | `TestimonialsSection` | Amber yellow (`#FFAA00`), 3 customer review cards with 5 yellow stars, verified badge, avatars. | `10-testimonials.png` at 1440, 820, 390 |
| **14** | `FAQSection` | 5 Accordion items with smooth spring collapse/expand, plus/minus toggle icons. | `11-faq.png` at 1440, 820, 390 + `faq-open.png` |
| **15** | `GallerySection` | Dual-row continuous photo marquee feed of high-res food shots. | `12-gallery.png` at 1440, 820, 390 |
| **16** | `BlogPreviewSection` | 3 Flame Journal cards with article metadata, thumbnails, summaries. | `13-blog-preview.png` at 1440, 820, 390 |
| **17** | `FinalCTASection` & `Footer` | "Hungry Yet?" CTA banner with floating stickers, full footer with giant "FLAME BURGER" wordmark, socials, hours. | `14-final-cta.png` & `15-footer.png` |

---

## 5. GitHub Integration Plan
- As requested: After completing the first 2-3 components (`Navbar`, `HeroSection`, `MarqueeSection`), we will stage, commit, and push the verified, tested code to GitHub.
