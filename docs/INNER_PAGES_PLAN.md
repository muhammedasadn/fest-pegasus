# Inner Pages Implementation Plan

**Objective:** Build pixel-faithful, fully animated, responsive Next.js App Router pages for all 6 pending routes matching [https://real-project-691891.framer.app/](https://real-project-691891.framer.app/).

---

## 1. Routing & Directory Structure

```text
src/
├── app/
│   ├── layout.tsx                (Global Navbar, Footer, Providers)
│   ├── page.tsx                  (Home Page - Completed & Verified ✅)
│   ├── menu/
│   │   └── page.tsx              (Page 1: Menu)
│   ├── offers/
│   │   └── page.tsx              (Page 2: Offers)
│   ├── events/
│   │   └── page.tsx              (Page 3: Catering & Events)
│   ├── about/
│   │   └── page.tsx              (Page 4: About Us)
│   ├── blog/
│   │   ├── page.tsx              (Page 5: Blog Journal)
│   │   └── [slug]/
│   │       └── page.tsx          (Blog Detail Template)
│   └── contact/
│       └── page.tsx              (Page 6: Contact & FAQ)
├── components/
│   ├── pages/
│   │   ├── menu/                 (MenuHero, MenuCategories, MenuGrid, MenuCTA)
│   │   ├── offers/               (OffersHero, DealsGrid, LimitedSpecial, OfferTerms)
│   │   ├── events/               (EventsHero, OccasionsGrid, CateringMenu, CateringForm)
│   │   ├── about/                (AboutHero, OurStory, MissionBanner, ValuesGrid, AboutStats)
│   │   ├── blog/                 (BlogHero, FeaturedArticle, BlogGrid, NewsletterSection)
│   │   └── contact/              (ContactHero, ContactDetailsGrid, ContactForm, LocationMap, ContactFAQ)
│   ├── ui/                       (Button, Badge, Card, Accordion)
│   └── layout/                   (Navbar, Footer, Container, Section)
```

---

## 2. Page Build Order & Component Milestones

### Milestone 1: Menu Page (`/menu`)
- **Components to build**:
  1. `src/components/pages/menu/MenuHero.tsx` (Hero badge, title, subtitle, burger illustration)
  2. `src/components/pages/menu/MenuCategories.tsx` (Interactive tab filters: All, Burgers, Pizza, Sides, Pasta, Drinks)
  3. `src/components/pages/menu/MenuCategorySection.tsx` (Reusable categorized grid with badge, item image, title, price, tags, description)
  4. `src/app/menu/page.tsx` (Full page assembly with marquee & CTA)
- **Verification**: Run dev server, capture screenshots at 1440px, 820px, 390px, compare with `reference/{desktop,tablet,mobile}/pages/menu.png`, fix differences.

### Milestone 2: Offers Page (`/offers`)
- **Components to build**:
  1. `src/components/pages/offers/OffersHero.tsx` (Hero banner with "Special Deals")
  2. `src/components/pages/offers/DealsGrid.tsx` (4 high-impact neo-brutalist deal cards: Red, Yellow, Cream, Green)
  3. `src/components/pages/offers/LimitedSpecial.tsx` (Split promo banner for Weekend Double Smash)
  4. `src/components/pages/offers/OfferTerms.tsx` (Terms accordion & guidelines)
  5. `src/app/offers/page.tsx` (Full page assembly)
- **Verification**: Capture screenshots at 1440, 820, 390px, compare with reference, commit & push to GitHub.

### Milestone 3: Events & Catering Page (`/events`)
- **Components to build**:
  1. `src/components/pages/events/EventsHero.tsx` ("Bring The Flavor To Every Gathering")
  2. `src/components/pages/events/OccasionsGrid.tsx` (4 occasions cards: Office Lunches, Birthdays, Family, Community)
  3. `src/components/pages/events/CateringPackages.tsx` (4 sharing platters: Burger Party Box, Pizza Set, Chicken Platter, Sides Tray)
  4. `src/components/pages/events/CateringSteps.tsx` (3-step timeline)
  5. `src/components/pages/events/CateringForm.tsx` (Interactive inquiry form with validation)
  6. `src/app/events/page.tsx` (Full page assembly)
- **Verification**: Screenshot comparisons, form test, push to GitHub.

### Milestone 4: About Page (`/about`)
- **Components to build**:
  1. `src/components/pages/about/AboutHero.tsx` ("Good Food. Great Energy. That’s Zestivo.")
  2. `src/components/pages/about/OurStorySplit.tsx` (Humble beginnings narrative + photography)
  3. `src/components/pages/about/MissionBanner.tsx` ("Make Every Bite Count")
  4. `src/components/pages/about/ValuesGrid.tsx` (4 values: Quality First, Flavor Without Compromise, People Matter, Always Welcoming)
  5. `src/components/pages/about/AboutStats.tsx` (18+ Recipes, 50k+ Guests, 100% Fresh)
  6. `src/app/about/page.tsx` (Full page assembly)
- **Verification**: Screenshot comparisons across desktop, tablet, and mobile.

### Milestone 5: Blog Journal Page (`/blog` & `/blog/[slug]`)
- **Components to build**:
  1. `src/components/pages/blog/BlogHero.tsx` ("Fresh Stories. Full Of Flavor.")
  2. `src/components/pages/blog/FeaturedArticle.tsx` (Lead article: The Secret To A Better Burger At Home)
  3. `src/components/pages/blog/BlogGrid.tsx` (4 story cards with metadata and hover states)
  4. `src/components/pages/blog/NewsletterSection.tsx` (Newsletter email input with neo-brutalist styling)
  5. `src/app/blog/page.tsx` & `src/app/blog/[slug]/page.tsx` (Detail view for articles)
- **Verification**: Screenshot comparisons across desktop, tablet, and mobile.

### Milestone 6: Contact & FAQ Page (`/contact`)
- **Components to build**:
  1. `src/components/pages/contact/ContactHero.tsx` ("Let's Talk Food.")
  2. `src/components/pages/contact/ContactDetailsGrid.tsx` (Address, Phone, Email, Hours cards)
  3. `src/components/pages/contact/ContactForm.tsx` (Name, Email, Subject dropdown, Message textarea)
  4. `src/components/pages/contact/LocationMap.tsx` (Neo-brutalist map card & directions)
  5. `src/components/pages/contact/ContactFAQ.tsx` (4 spring accordions linking with `#faq`)
  6. `src/app/contact/page.tsx` (Full page assembly)
- **Verification**: Full test suite across desktop, tablet, and mobile, push to GitHub.

---

## 3. Strict Operating Rules
- Measure computed styles directly from the reference DOM.
- No hardcoded magic values; use Tailwind design tokens and shared components.
- Animate with Framer Motion (`whileInView`, `whileHover`, `whileTap`, spring transitions).
- Zero build errors (`pnpm build`).
- Push commits to GitHub regularly after verifying pages.
