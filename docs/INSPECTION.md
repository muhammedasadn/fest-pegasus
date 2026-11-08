# Site Inspection: Flame Burger Reference
**Reference URL:** [https://real-project-691891.framer.app/](https://real-project-691891.framer.app/)  
**Inspection Date:** 2026-11-08  
**Tested Viewports:** Desktop (1440px), Tablet (820px), Mobile (390px)

---

## 1. Full Section List (Top to Bottom)

Every section has been verified and captured at all three target viewports (1440px, 820px, 390px) into `reference/desktop/`, `reference/tablet/`, and `reference/mobile/`.

| # | Section ID | Framer Name | Tag | Desktop Dimensions | Background Color / Fill | Screenshot Reference |
|---|------------|-------------|-----|--------------------|-------------------------|----------------------|
| 0 | `navbar` | Desktop / Mobile | `<nav>` | 1392px × 68px | `#FFFFFF` (`rgb(255, 255, 255)`) | `reference/desktop/navbar.png`, `reference/tablet/navbar.png`, `reference/mobile/navbar.png`, `reference/mobile/menu-open.png` |
| 1 | `01-hero` | Hero | `<section>` | 1440px × 1348px | `#237227` (`rgb(35, 114, 39)`) | `reference/desktop/01-hero.png`, `reference/tablet/01-hero.png`, `reference/mobile/01-hero.png` |
| 2 | `02-marquee` | Marquee Band | `<div>` | 1440px × 131px | Tri-color gradient: Green/Red/Yellow | `reference/desktop/02-marquee.png`, `reference/tablet/02-marquee.png`, `reference/mobile/02-marquee.png` |
| 3 | `03-popular-categories` | Popular Categories | `<section>` | 1440px × 1331px | `#FFAA00` (`rgb(255, 170, 0)`) | `reference/desktop/03-popular-categories.png`, `reference/tablet/03-popular-categories.png`, `reference/mobile/03-popular-categories.png` |
| 4 | `04-special-offers` | Special Offers | `<section>` | 1440px × 1178px | `#141414` (`rgb(20, 20, 20)`) | `reference/desktop/04-special-offers.png`, `reference/tablet/04-special-offers.png`, `reference/mobile/04-special-offers.png` |
| 5 | `05-featured-menu` | Featured Menu | `<section>` | 1440px × 1318px | `#FFF4DC` (`rgb(255, 244, 220)`) | `reference/desktop/05-featured-menu.png`, `reference/tablet/05-featured-menu.png`, `reference/mobile/05-featured-menu.png` |
| 6 | `06-about` | About | `<section>` | 1440px × 796px | `#237227` (`rgb(35, 114, 39)`) | `reference/desktop/06-about.png`, `reference/tablet/06-about.png`, `reference/mobile/06-about.png` |
| 7 | `07-opening-hours` | Opening Hours | `<section>` | 1440px × 639px | `#FFAA00` (`rgb(255, 170, 0)`) | `reference/desktop/07-opening-hours.png`, `reference/tablet/07-opening-hours.png`, `reference/mobile/07-opening-hours.png` |
| 8 | `08-why-choose-us` | Why Choose Us | `<section>` | 1440px × 850px | `#FFF4DC` (`rgb(255, 244, 220)`) | `reference/desktop/08-why-choose-us.png`, `reference/tablet/08-why-choose-us.png`, `reference/mobile/08-why-choose-us.png` |
| 9 | `09-catering-events` | Catering & Events | `<section>` | 1440px × 1425px | `#141414` (`rgb(20, 20, 20)`) | `reference/desktop/09-catering-events.png`, `reference/tablet/09-catering-events.png`, `reference/mobile/09-catering-events.png` |
| 10 | `10-testimonials` | Testimonials | `<section>` | 1440px × 841px | `#FFAA00` (`rgb(255, 170, 0)`) | `reference/desktop/10-testimonials.png`, `reference/tablet/10-testimonials.png`, `reference/mobile/10-testimonials.png` |
| 11 | `11-faq` | FAQ | `<section>` | 1440px × 710px | `#FFF4DC` (`rgb(255, 244, 220)`) | `reference/desktop/11-faq.png`, `reference/tablet/11-faq.png`, `reference/mobile/11-faq.png`, `reference/desktop/faq-open.png` |
| 12 | `12-gallery` | Gallery | `<section>` | 1440px × 1102px | `#141414` (`rgb(20, 20, 20)`) | `reference/desktop/12-gallery.png`, `reference/tablet/12-gallery.png`, `reference/mobile/12-gallery.png` |
| 13 | `13-blog-preview` | Blog Preview | `<section>` | 1440px × 950px | `#FFF4DC` (`rgb(255, 244, 220)`) | `reference/desktop/13-blog-preview.png`, `reference/tablet/13-blog-preview.png`, `reference/mobile/13-blog-preview.png` |
| 14 | `14-final-cta` | Final CTA | `<section>` | 1440px × 807px | `#FFF4DC` (`rgb(255, 244, 220)`) | `reference/desktop/14-final-cta.png`, `reference/tablet/14-final-cta.png`, `reference/mobile/14-final-cta.png` |
| 15 | `15-footer` | Footer | `<footer>` | 1440px × 744px | `#141414` (`rgb(20, 20, 20)`) | `reference/desktop/15-footer.png`, `reference/tablet/15-footer.png`, `reference/mobile/15-footer.png` |

---

## 2. Design Tokens & Styling Architecture

The site embodies a high-energy **Neo-Brutalist Playful Retro Diner** aesthetic characterized by bold black borders, solid drop shadows with no blur, ultra-punchy primary colors, pill-shaped tags, and clean geometric typography.

### A. Color Palette
- **Base Warm Cream / Butter Canvas:** `#FFF4DC` (`rgb(255, 244, 220)`) — used across Featured Menu, Why Choose Us, FAQ, Blog, and Final CTA backgrounds.
- **Flame Forest Green:** `#237227` (`rgb(35, 114, 39)`) — used for Hero and About backgrounds, logo badges, category badges.
- **Flame Amber Yellow:** `#FFAA00` (`rgb(255, 170, 0)`) — signature primary accent, used for Popular Categories, Opening Hours, Testimonials, primary buttons, and hero typography.
- **Flame Fire Red:** `#E30613` (`rgb(227, 6, 19)`) — high-urgency accent, used for "FIRE." in hero, badges, special discounts, and marquee stripe.
- **Ink Dark / Solid Black:** `#141414` (`rgb(20, 20, 20)`) — all borders, hard drop shadows, dark sections (Special Offers, Catering, Gallery, Footer), and primary heading text.
- **Pure White:** `#FFFFFF` (`rgb(255, 255, 255)`) — navbar card background, secondary button surfaces, card content backgrounds.
- **Muted Inks & Alphas:**
  - `rgba(20, 20, 20, 0.75)` / `rgba(20, 20, 20, 0.72)` — body paragraph text on light backgrounds.
  - `rgba(255, 255, 255, 0.75)` / `rgba(255, 255, 255, 0.90)` — body paragraph text on dark backgrounds.

### B. Gradients
- **Marquee Band Gradient:**
  `linear-gradient(rgb(35, 114, 39) 45.8621%, rgb(227, 6, 19) 50%, rgb(255, 170, 0) 50%)`
  Divided by `3px solid #141414` top and bottom borders.

### C. Typography Scale & Sources
1. **Heading Display Font:** `Archivo Black` (Source: Google Fonts, 400 weight)
   - Hero Main Title: `124px`, line-height `114.08px` (`0.92`), letter-spacing `-2.48px` (`-0.02em`), uppercase
   - Hero Background Big Text: `247.54px`, line-height `1.0em`, letter-spacing `-0.03em`
   - Section Titles (H2): `54px`, line-height `55.08px` (`1.02`), letter-spacing `-0.54px` (`-0.01em`), uppercase
   - Subsection / Card Titles (H3): `28px`, line-height `30.8px` (`1.1`), uppercase
   - Card Subheadings (H4): `21px` / `19px`, line-height `1.15`, uppercase
2. **Subheadings, Buttons & Pills:** `Bricolage Grotesque` (Source: Google Fonts, weights: 400, 700, 800)
   - Eyebrow Badges / Pills: `14px`, font-weight `800`, line-height `16.8px` (`1.2`), letter-spacing `1.12px` (`0.08em`), uppercase
   - Buttons: `16px`, font-weight `800`, line-height `16px`, letter-spacing `0.48px` (`0.03em`), uppercase
   - Body Paragraphs: `17px`, font-weight `400`, line-height `26.35px` (`1.55`), normal letter-spacing
   - Small Metadata / Footers: `14px` / `15px`, line-height `1.5`
3. **Body / Interface Fallback:** `Inter` (Variable latin, weights: 400, 500, 600) for standard system labels.

### D. Borders & Shadows (Neo-Brutalist Foundations)
- **Standard Border:** `3px solid rgb(20, 20, 20)` (`#141414`)
- **Card Shadow (Hard):** `box-shadow: 4px 4px 0px 0px rgb(20, 20, 20)`
- **Navbar Shadow (Hard):** `box-shadow: 5px 5px 0px 0px rgb(20, 20, 20)`
- **Floating Pill Badge Shadow:** `box-shadow: 4px 4px 0px 0px rgb(20, 20, 20)`
- **Pill Border Radii:** `border-radius: 100px` (or `9999px`)
- **Card Border Radii:** `border-radius: 24px` / `20px`
- **Navbar Border Radii:** `border-radius: 34px`

### E. Layout & Breakpoints
- **Design Container Max Width:** `1200px` (desktop centered with `40px` horizontal padding)
- **Breakpoints Measured from Code:**
  - `Desktop`: `>= 1200px` (Tested at 1440px)
  - `Tablet`: `810px` to `1199.98px` (Tested at 820px, container padding `32px` or `24px`)
  - `Mobile`: `<= 809.98px` (Tested at 390px, container padding `20px`)

---

## 3. 3D INVENTORY (Rigorous DOM & Network Inspection)

> [!IMPORTANT]
> **Definitive Finding from DOM & Network Audits:**
> - Canvas count: `0`
> - WebGL contexts: `0`
> - Spline files (`.splinecode`, `@splinetool`): `0`
> - Three.js bundles / OBJ / GLTF / GLB: `0`
> - Videos / MP4 / WebM: `0`
> - Lottie JSON: `0`

### How the Visual & "3D" Appearance is Actually Achieved:
1. **The Hero Centerpiece ("Burger Plate"):**
   - High-fidelity isolated transparent cutout PNG (`1200×1200px`) of a gourmet double-patty smash burger served on a branded diner plate:
     `https://framerusercontent.com/images/5DEhx8qXRUbEXqRwbwUuzYm1GpU.png`
   - Static CSS rotation: `transform: rotate(-25deg)`
   - Floating animation: Layered in front of the giant `247px` "FLAME BURGER" typography with continuous vertical bobbing (`y: -10px` to `10px`, mirror loop, spring/smooth tween).
   - Responsive scaling: `500px` on desktop, `390px` on tablet, `290px` on mobile.
2. **Floating Graphic Stickers / Badges:**
   - 4 floating pills positioned around the hero text and burger:
     - Top Left: Yellow pill `rotate(12deg)`
     - Top Right: White pill `rotate(-10deg)`
     - Bottom Left: White pill `rotate(8deg)`
     - Bottom Right: Yellow pill `rotate(-8deg)`
   - Each has `3px solid #141414` border, `4px 4px 0px 0px #141414` hard shadow, and continuous mirror drift animations (`duration: 2.3s` - `3.2s`).
3. **Card 3D Hover Tilt Effects:**
   - Instead of expensive WebGL canvases, cards simulate physical tactile 3D through CSS transform springs: `whileHover: { y: -6, rotate: -2, transition: { type: "spring", stiffness: 400, damping: 30 } }`.
   - Alternating cards tilt `rotate(-2deg)` and `rotate(2deg)`.

---

## 4. ANIMATION INVENTORY (Every Animation on the Page)

Extracted directly from Framer’s compiled motion engine (`motion.x14TTX80.mjs` and `9smMHI1LFaujObhJVZEp2s1KHL9ULJr9KF-lv99HlnQ.ydsXtLVF.mjs`):

| # | Element | Trigger | Type | Duration | Delay | Easing / Spring Parameters | Start State | End State |
|---|---------|---------|------|----------|-------|----------------------------|-------------|-----------|
| 1 | **Hero Title Words** ("CRAFTED WITH FIRE.") | On Mount (Load) | Kinetic Staggered Text Reveal (`appear`) | `0.7s` | `0.05s` stagger (start `0.1s`) | `type: "spring", bounce: 0.35, duration: 0.7` | `opacity: 0, y: 40px, rotate: -6deg, filter: "blur(10px)"` | `opacity: 1, y: 0px, rotate: 0deg, filter: "blur(0px)"` |
| 2 | **Section Containers & Headers** | On Scroll (whileInView, threshold `0.15`, once) | Spring Slide Up Fade (`enter`) | `0.8s` | `0s` | `type: "spring", bounce: 0.25, duration: 0.8` (`z`) | `opacity: 0, y: 64px` | `opacity: 1, y: 0px` |
| 3 | **Staggered Cards** (Grid Items) | On Scroll (whileInView) | Staggered Spring Rise | `0.8s` | Col 1: `0s`, Col 2: `0.08s`, Col 3: `0.16s`, Col 4: `0.24s` | `type: "spring", bounce: 0.25, duration: 0.8` | `opacity: 0, y: 48px` | `opacity: 1, y: 0px` |
| 4 | **Interactive Cards** (Categories, Offers, Menu) | On Hover (`whileHover`) | Tactile 3D Tilt & Lift | `0.35s` | `0s` | `type: "spring", stiffness: 400, damping: 30` (`kr`) | `y: 0px, rotate: 0deg` | `y: -6px, rotate: -2deg` (or `+2deg`) |
| 5 | **Interactive Buttons** ("Order Now", "Explore Menu") | On Hover / Tap | Shadow Compression & Lift | `0.2s` | `0s` | `type: "spring", stiffness: 400, damping: 25` | `x: 0, y: 0, boxShadow: "4px 4px 0px #141414"` | Hover: `y: -2px, boxShadow: "6px 6px 0px #141414"`; Tap: `translate(2px, 2px), boxShadow: "2px 2px 0px #141414"` |
| 6 | **Hero Burger Plate** | Continuous (Loop) | Gentle Vertical Floating Float | `2.8s` | `0s` | `type: "tween", ease: [0.45, 0, 0.55, 1], repeat: Infinity, repeatType: "mirror"` | `y: -8px, rotate: -25deg` | `y: 8px, rotate: -25deg` |
| 7 | **Hero & Final CTA Floating Badges** | Continuous (Loop) | Gentle Drift & Bob | `2.3s - 3.2s` (jittered per badge) | `0s` | `type: "tween", ease: [0.45, 0, 0.55, 1], repeat: Infinity, repeatType: "mirror"` | `y: -10px, rotate: base - 2deg` | `y: 10px, rotate: base + 2deg` |
| 8 | **Marquee Band** | Continuous (Loop) | Infinite Linear Ticker | `20s - 25s` | `0s` | `ease: "linear", repeat: Infinity` | `translateX(0%)` | `translateX(-50%)` |
| 9 | **Gallery Photo Rows** | Continuous (Loop) | Dual-direction Marquee Rows | `35s / 45s` | `0s` | `ease: "linear", repeat: Infinity` | `translateX(0%)` | `translateX(-50%)` |
| 10 | **FAQ Accordion Item** | On Click | Spring Expand / Collapse | `0.35s` | `0s` | `type: "spring", bounce: 0.15, duration: 0.35` (`me`) | Height `0`, opacity `0` | Height `auto`, opacity `1` |
| 11 | **FAQ Toggle Icon** | On Click | Plus to Minus Rotation / Morph | `0.35s` | `0s` | `type: "spring", bounce: 0.15, duration: 0.35` | Plus icon (`rotate: 0deg`) | Minus icon (`rotate: 180deg`) |
| 12 | **Mobile Menu Drawer** | On Click (Hamburger) | Slide Down & Fade Spring | `0.4s` | `0s` | `type: "spring", stiffness: 350, damping: 30` | `opacity: 0, y: -20px, scale: 0.98` | `opacity: 1, y: 0px, scale: 1` |

---

## 5. Asset List (All Images, Fonts, Icons)

### A. Web Fonts
- **Archivo Black (Google Fonts Woff2):**
  `https://fonts.gstatic.com/s/archivoblack/v23/HTxqL289NzCGg4MzN6KJ7eW6OY6P_x7yx3A.woff2`
- **Bricolage Grotesque (Google Fonts Woff2):**
  `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvSniyMgvs-wJDtw.woff2`
- **Inter Variable (Woff2):**
  `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`

### B. High-Resolution Images (All 34 Verified Base Assets)
1. `burger-hero-plate.png` — `https://framerusercontent.com/images/5DEhx8qXRUbEXqRwbwUuzYm1GpU.png`
2. `cat-smash-burgers.jpg` — `https://framerusercontent.com/images/ZXT4aya7lleaWWeXlptiyxJGn5U.jpg`
3. `cat-loaded-fries.jpg` — `https://framerusercontent.com/images/elcyYjMqIQMaWwPJuUKwWmGblqU.jpg`
4. `cat-thick-shakes.jpg` — `https://framerusercontent.com/images/o8pp0mTAR7OJrtG8GFhIgmudWE.jpg`
5. `cat-sandwiches.jpg` — `https://framerusercontent.com/images/LaDUn0vIHw1pGxd8MZcxXIvJA.jpg`
6. `cat-pasta.jpg` — `https://framerusercontent.com/images/mgsV6paOFv5lve1fb2YXQyxJEHY.jpg`
7. `offer-zestivo-combo.jpg` — `https://framerusercontent.com/images/oEHJzbQiDCACgTWdwN5wsLoB5c4.jpg`
8. `offer-pizza-party.jpg` — `https://framerusercontent.com/images/lIRYM6TFxYkRmo11piik832zrkQ.jpg`
9. `offer-crispy-chicken.jpg` — `https://framerusercontent.com/images/ZkyJGMVxN00PSmRTtPxyhBKSSE.jpg`
10. `menu-cheeseburger.jpg` — `https://framerusercontent.com/images/GYc3BaU8pb2fvzx4owj0VTt7848.jpg`
11. `menu-bacon-stack.jpg` — `https://framerusercontent.com/images/Nvjd6R13s17aGtGNP5lY9ApRE.jpg`
12. `menu-jalapeno-smash.jpg` — `https://framerusercontent.com/images/cekrgkUE9GmPX1yjVD1Hujc8s.jpg`
13. `menu-truffle-mushroom.jpg` — `https://framerusercontent.com/images/jLoCS8kGFP7nYlrFlzTErmGU.jpg`
14. `menu-bbq-chicken.jpg` — `https://framerusercontent.com/images/Ob5Dj4d9mP9IFP2uOdNFtDbaL3s.jpg`
15. `menu-garlic-fries.jpg` — `https://framerusercontent.com/images/TRJhOWnmoVYycDE0bqQ4lHsMNW8.jpg`
16. `about-grill-chef.jpg` — `https://framerusercontent.com/images/rHx2lXUoYm6Ek2jPOQbyuBmMuhw.jpg`
17. `about-dining-table.jpg` — `https://framerusercontent.com/images/jmidsn1yWfFeFR2iOaZ7AjUgMA.jpg`
18. `catering-food-truck.jpg` — `https://framerusercontent.com/images/b1Dxm7xGotpBuKftgqZyYrqHkBc.jpg`
19. `catering-party-spread.jpg` — `https://framerusercontent.com/images/GBcruTCRxYkpMY6DbDoEZDc1Sk.jpg`
20. `catering-corporate.jpg` — `https://framerusercontent.com/images/V1hWoqi7B3VOlmA13zOjiUvEsNY.jpg`
21. `testimonial-avatar-1.jpg` — `https://framerusercontent.com/images/Bln2KQhwtDy47O4b26DNjJB45Cw.jpg`
22. `testimonial-avatar-2.jpg` — `https://framerusercontent.com/images/Mhxd71E1pCzIOxnnnJYobuizE.jpg`
23. `testimonial-avatar-3.jpg` — `https://framerusercontent.com/images/fdOy53817Ot16MDWc1VImo4sLZA.jpg`
24. `gallery-01.jpg` — `https://framerusercontent.com/images/OPfX5fblGwfINI5WJokRdO7II0.jpg`
25. `gallery-02.jpg` — `https://framerusercontent.com/images/3Zcm8e2m44XhZjKWnePboheLUU.jpg`
26. `gallery-03.jpg` — `https://framerusercontent.com/images/1fb6K28CpW6uez6fCENuwgfTXMU.jpg`
27. `gallery-04.jpg` — `https://framerusercontent.com/images/9T6JUKl3gN9fyVIiDvMRjNOxNc.jpg`
28. `gallery-05.jpg` — `https://framerusercontent.com/images/XpWjlhSqXLSJkpD3vMzEARQ0.jpg`
29. `gallery-06.jpg` — `https://framerusercontent.com/images/Qbm5NAhAqqLcjdcyqLnvJ1lxLT0.jpg`
30. `gallery-07.jpg` — `https://framerusercontent.com/images/N8hFJY8e6GUlrDm5nWNvEHVPzY.jpg`
31. `gallery-08.jpg` — `https://framerusercontent.com/images/Dp04uZ9H7ul1ojyrXuDuoIaSAN4.jpg`
32. `gallery-09.jpg` — `https://framerusercontent.com/images/Rgv0DmpPIzUzh5DKDMfRjtGdVHo.jpg`
33. `gallery-10.jpg` — `https://framerusercontent.com/images/V1HLWBuEnVYI3msfarDb3Gezc.jpg`
34. `blog-feature.jpg` — `https://framerusercontent.com/images/8mOxTRfyQlnrFuTB6BYkxdQaj4.jpg`

---

## 6. Interactions (Buttons, Links, Menus, Accordion)

1. **Navbar Navigation:**
   - Links: `Home` (`#`), `Menu` (`#menu` / `categories`), `Offers` (`#offers`), `Events` (`#events`), `About` (`#about`), `Blog` (`#blog`), `Contact` (`#contact`).
   - Action: Smooth scroll to corresponding sections with active section highlighting.
   - Primary CTA: "Order Now" (Opens order flow or links to menu).
2. **Mobile Hamburger Menu:**
   - Clicking hamburger button triggers spring slide-down menu with staggered navigation links and "Order Now" button. Clicking again or clicking outside smoothly closes it.
3. **Accordion FAQ:**
   - 5 Accordion items.
   - Clicking an item toggles its state between `Closed` and `Open` with spring height animation (`bounce: 0.15, duration: 0.35s`).
   - Icon rotates/toggles between Plus and Minus.
4. **CTAs & Links:**
   - Hero: "Order Now" -> scrolls to Menu/Orders; "Explore Menu" -> scrolls to Categories.
   - Special Offers: "Order This Deal" -> triggers deal selection / alert modal.
   - Opening Hours: "Book a Table" -> scrolls to contact / reservations.
   - Catering: "Plan Your Event" -> contact inquiry.
   - Final CTA: "Order Now" -> primary ordering action.
   - Footer: Phone link (`tel:+12125550186`), Email link (`mailto:hello@flameburger.example`), social links (Instagram, TikTok, Facebook, YouTube).
