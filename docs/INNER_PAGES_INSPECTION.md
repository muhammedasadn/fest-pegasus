# Flame Burger — Inner Pages Deep Inspection Report

**Reference Site (Source of Truth):** [https://real-project-691891.framer.app/](https://real-project-691891.framer.app/)  
**Inspected Viewports:**
- Desktop: `1440px × 900px` (Reference screenshots: `reference/desktop/pages/*.png`)
- Tablet: `820px × 1180px` (Reference screenshots: `reference/tablet/pages/*.png`)
- Mobile: `390px × 844px` (Reference screenshots: `reference/mobile/pages/*.png`)

---

## 1. Global Page Architecture & Foundations

Each inner page on the Framer reference inherits the **Neo-Brutalist Pop Diner** visual identity:
- **Base Foundations**:
  - Ink obsidian black (`#141414`), Signal White (`#FFFFFF`), Warm Cream (`#FFF4DC`)
  - Accent palette: Fire Red (`#E53935`), Forest Green (`#237227`), Amber Yellow (`#FFAA00`), Solar Orange (`#FF5722`)
- **Container Structure**:
  - Max width: `1200px` centered with auto margins
  - Responsive padding: `px-6` (24px) on desktop, `px-5` (20px) on tablet, `px-4` (16px) on mobile
- **Borders & Shadows**:
  - `3px solid #141414` standard borders on cards and pill badges
  - Sharp brutalist box-shadows: `box-shadow: 4px 4px 0px #141414` (standard), `6px 6px 0px #141414` (cards), `8px 8px 0px #141414` (featured blocks)
- **Header Structure**:
  - Each inner page begins with an asymmetric **Hero Banner**:
    - Left column: Yellow pill badge + Archivo Black display title (64px desktop, 48px tablet, 36px mobile) + descriptive lead text + primary CTA button.
    - Right column: High-energy visual badge/image card with floating sticker tags (e.g. "FEEDS 10 TO 200", "SAVE 30%", "WE REPLY FAST").

---

## 2. Page 1: Menu Page (`/menu`)

### A. Section Breakdown
1. **Menu Hero Section** (`H: 772px`):
   - **Badge**: Yellow pill badge `"THE MENU"`
   - **Heading (H1)**: `"FIND YOUR FLAVOR."` (64px, Archivo Black)
   - **Subtitle**: `"From signature burgers to crispy sides and comforting classics, discover freshly prepared favorites made to satisfy every craving."`
   - **Visual**: High-res featured burger graphic framed with 3px border, 6px shadow, and rounded corners.
2. **Category Navigation / Marquee Ticker** (`H: 131px`):
   - Infinite smooth ticker strip: `"BURGERS ★ PIZZA ★ SIDES & SNACKS ★ PASTA & BOWLS ★ DRINKS & DESSERTS"`
3. **Menu Intro & Category Quick Jump** (`H: 518px`):
   - Badge `"BIG CHOICES"`, Title `"BIG CHOICES. BIGGER FLAVOR."`
   - Interactive category pill filters (All, Burgers, Pizza, Sides, Pasta, Drinks) with active spring pill indicator (`layoutId`).
4. **Burgers Category Grid** (`H: 1176px`):
   - Section header with category title `"BURGERS"` & badge
   - 6-item card grid (3 cols desktop, 2 cols tablet, 1 col mobile):
     - Flame Burger Smash Burger (`$12`)
     - Double Stack Deluxe (`$15`)
     - Smoky BBQ Bacon Burger (`$14`)
     - Crispy Chicken Burger (`$13`)
     - Spicy Jalapeño Smash (`$13.50`)
     - Truffle Mushroom Swiss (`$16`)
5. **Pizza Category Grid** (`H: 729px`):
   - Heading `"PIZZA"`, 4 signature hand-tossed artisan pizzas:
     - Classic Margherita Pizza (`$15`)
     - Pepperoni Heat (`$17`)
     - BBQ Chicken Pizza (`$18`)
     - Truffle White Pizza (`$19`)
6. **Sides & Snacks Category Grid** (`H: 1126px`):
   - Heading `"SIDES & SNACKS"`, 6 items:
     - Loaded Zest Fries (`$8`), Golden French Fries (`$5`), Onion Rings (`$6`), Crispy Mozzarella Sticks (`$7`), etc.
7. **Pasta & Bowls Category Grid** (`H: 705px`):
   - Heading `"PASTA & BOWLS"`, 4 items:
     - Creamy Tuscan Pasta (`$16`), Spicy Arrabbiata (`$14`), etc.
8. **Drinks & Desserts Category Grid** (`H: 1150px`):
   - Heading `"DRINKS & DESSERTS"`, 6 items:
     - Classic Lemonade (`$4`), Chocolate Fudge Brownie (`$6`), Vanilla Shake (`$6`), etc.
9. **Menu Final CTA Banner** (`H: 763px`):
   - Badge `"DECIDED YET?"`
   - Heading `"YOUR ORDER IS ONE CLICK AWAY."`
   - Button `"ORDER NOW"` with spring hover state.

---

## 3. Page 2: Offers Page (`/offers`)

### A. Section Breakdown
1. **Offers Hero Section** (`H: 772px`):
   - Badge: Yellow pill badge `"SPECIAL DEALS"`
   - Heading (H1): `"MORE FLAVOR FOR LESS."`
   - Subtitle: `"Explore our latest combinations, limited-time specials, and value-packed bundles designed to satisfy big cravings."`
   - Visual: Featured bundle platter with floating badge `"SAVE UP TO 30%"`.
2. **Deals & Bundles Grid** (`H: 1488px`):
   - Header: Badge `"FEATURED OFFERS"`, Title `"PICK YOUR DEAL"`
   - 4 High-Contrast Neo-Brutalist Deal Cards:
     - **Card 1 (Red `#E53935`)**: Badge `"SAVE 25%"` · `"THE ZESTIVO COMBO"` — Flame Smash Burger + Loaded Fries + Drink · Regular `$18` → Deal `$13.50`.
     - **Card 2 (Yellow `#FFAA00`)**: Badge `"SAVE 30%"` · `"PIZZA NIGHT BUNDLE"` — Any 2 Artisan Pizzas + Garlic Bread + 2 Drinks · Regular `$38` → Deal `$26.50`.
     - **Card 3 (Cream `#FFF4DC`)**: Badge `"SAVE 20%"` · `"CRISPY CHICKEN BOX"` — 6pc Hand-breaded Tenders + Seasoned Fries + 2 Dips · Regular `$16` → Deal `$12.80`.
     - **Card 4 (Green `#237227`)**: Badge `"GROUP FAVE"` · `"FAMILY FEAST"` — 4 Burgers + 2 Large Fries + 4 Drinks · Regular `$55` → Deal `$42.00`.
   - Each card features: item badges, crossed-out original price, bold highlighted deal price, order button, and sticker tags.
3. **Limited-Time Special Split Banner** (`H: 720px`):
   - Split view with large appetizing photo and promo code callout: `"WEEKEND DOUBLE SMASH — Use code FLAMEWEEKEND"`.
4. **Offer Terms & Conditions Accordion** (`H: 305px`):
   - Badge `"TERMS & CONDITIONS"`
   - Clear guidelines: online ordering validity, exclusions, coupon limits, and delivery details.
5. **Final CTA Banner** (`H: 703px`):
   - `"CLAIM YOUR DEAL — YOUR ORDER IS ONE CLICK AWAY."`

---

## 4. Page 3: Events & Catering Page (`/events`)

### A. Section Breakdown
1. **Catering Hero Section** (`H: 826px`):
   - Badge: Yellow pill badge `"ZESTIVO CATERING"`
   - Heading (H1): `"BRING THE FLAVOR TO EVERY GATHERING."`
   - Subtitle: `"From team lunches to birthday celebrations, we make group food easy with crowd-pleasing favorites, flexible packages, and reliable service."`
   - Primary CTA Button: `"REQUEST CATERING"` (smooth scrolls to catering request form)
   - Sticker Tag: `"FEEDS 10 TO 200"`
2. **Occasions Grid** (`H: 851px`):
   - Header: Badge `"EVERY OCCASION"`, Title `"WHATEVER THE OCCASION, WE’VE GOT THE FOOD"`
   - 4 Occasion Cards:
     1. `"OFFICE LUNCHES"` — Energize teams with burgers, wraps, and sharing platters.
     2. `"BIRTHDAYS & CELEBRATIONS"` — Crowd-pleasing bundles built for celebrations.
     3. `"FAMILY GATHERINGS"` — Generous portions and wholesome choices for all ages.
     4. `"COMMUNITY & PRIVATE EVENTS"` — Large-format buffet trays and coordinated delivery.
3. **Catering Menu Packages** (`H: 936px`):
   - Header: Badge `"CATERING MENU"`, Title `"MADE FOR SHARING"`
   - 4 Signature Catering Trays:
     - `"BURGER PARTY BOX"` (12 mini smash burgers + seasoned fries tray)
     - `"PIZZA SHARING SET"` (4 large artisan pizzas + cheesy garlic bread)
     - `"CRISPY CHICKEN PLATTER"` (24 golden tenders + 4 gourmet dips)
     - `"SIDES & DIPS TRAY"` (Trio of loaded fries, onion rings, mozzarella bites)
4. **How It Works 3-Step Flow** (`H: 520px`):
   - Step `01`: `"SHARE THE DETAILS"` (Date, headcount, location)
   - Step `02`: `"PICK YOUR FAVORITES"` (Custom or preset bundles)
   - Step `03`: `"WE CONFIRM & COOK"` (On-time, hot and ready delivery)
5. **Catering Inquiry Form Section** (`H: 750px`):
   - Badge `"BOOK YOUR EVENT"`, Title `"LET’S PLAN YOUR SPREAD"`
   - Interactive Form:
     - Name, Email, Phone, Event Date, Guest Count (10-25, 25-50, 50-100, 100+), Package Choice, Additional Notes
     - Submit Button: `"SUBMIT CATERING REQUEST"` with success feedback modal/alert.
6. **Final CTA Banner** (`H: 673px`):
   - `"MAKE YOUR NEXT EVENT A LITTLE TASTIER."`

---

## 5. Page 4: About Page (`/about`)

### A. Section Breakdown
1. **About Hero Section** (`H: 930px`):
   - Badge: Yellow pill badge `"OUR STORY"`
   - Heading (H1): `"GOOD FOOD. GREAT ENERGY. THAT’S ZESTIVO."`
   - Subtitle: `"Born out of a simple belief: everyday food should feel special, taste incredible, and bring people together with good vibes."`
   - Visual: Stacked polaroids with 3D tilt.
2. **Our Story Split Section** (`H: 760px`):
   - Badge `"HUMBLE BEGINNINGS"`
   - Title `"A FRESH TAKE ON EVERYDAY FAVORITES"`
   - Narrative on fresh ground beef, artisan fermented dough, house-crafted signature sauces, and the vibrant diner experience.
3. **Mission Callout Banner** (`H: 650px`):
   - Deep Fire Red container with bold typography: `"MAKE EVERY BITE COUNT"`
4. **Core Values 4-Card Grid** (`H: 796px`):
   - Header: Badge `"WHAT WE STAND FOR"`, Title `"WHAT WE BRING TO THE TABLE"`
   - 4 Value Cards with brutalist icons:
     1. `"QUALITY FIRST"` — Sourced fresh every morning.
     2. `"FLAVOR WITHOUT COMPROMISE"` — Bold seasonings, made from scratch.
     3. `"PEOPLE MATTER"` — Hospitality that treats every guest like family.
     4. `"ALWAYS WELCOMING"` — Good music, warm smile, unforgettable energy.
5. **Stats & Why Guests Choose Us** (`H: 720px`):
   - Metric callouts: `"18+ SIGNATURE RECIPES"`, `"50K+ HAPPY GUESTS"`, `"100% FRESH INGREDIENTS"`, `"4.9★ RATING"`
6. **Opening Hours & Diner Location Split** (`H: 624px`):
   - Title `"COME BY WHEN YOU’RE HUNGRY"` with live open/closed diner receipt status card and map directions button.
7. **Final CTA Banner** (`H: 793px`):
   - `"COME HUNGRY. LEAVE HAPPY."`

---

## 6. Page 5: Blog Page (`/blog`)

### A. Section Breakdown
1. **Blog Hero Section** (`H: 772px`):
   - Badge: Yellow pill badge `"THE ZESTIVO JOURNAL"`
   - Heading (H1): `"FRESH STORIES. FULL OF FLAVOR."`
   - Subtitle: `"Get inspired with kitchen tips, ingredient spotlights, food trends, and stories from the world of feel-good food."`
2. **Featured Post Hero Card** (`H: 748px`):
   - Large prominent horizontal split card:
     - Badge: `"FEATURED READ · 5 MIN READ"`
     - Title: `"THE SECRET TO A BETTER BURGER AT HOME"`
     - Excerpt: `"A great burger is all about balance: a flavorful patty, a soft toasted bun, crisp toppings, and a sauce that brings everything together. Discover the simple details that make every bite count."`
     - Button: `"READ STORY"`
3. **All Stories Grid** (`H: 1274px`):
   - Header: Badge `"MORE STORIES"`, Title `"FRESH OFF THE PASS"`
   - Responsive Grid of Articles (4 posts):
     1. `"WHY FRESH INGREDIENTS MAKE ALL THE DIFFERENCE"` (Kitchen Notes · 4 min read)
     2. `"THE ULTIMATE GUIDE TO SHARING PIZZA"` (Food & Friends · 6 min read)
     3. `"HOW TO BUILD THE PERFECT COMBO MEAL"` (Recipes · 5 min read)
     4. `"MEET THE SAUCES BEHIND OUR SIGNATURE FLAVOR"` (Behind the Scenes · 4 min read)
4. **Newsletter Signup Banner** (`H: 629px`):
   - Badge `"NEWSLETTER"`
   - Title `"A LITTLE ZEST IN YOUR INBOX"`
   - Subtitle `"Sign up for occasional updates on new menu items, special offers, and fresh stories from ZESTIVO."`
   - Input + Button: Email input with neo-brutalist border + `"SUBSCRIBE"` button.

---

## 7. Page 6: Contact Page (`/contact`)

### A. Section Breakdown
1. **Contact Hero Section** (`H: 772px`):
   - Badge: Yellow pill badge `"GET IN TOUCH"`
   - Heading (H1): `"LET’S TALK FOOD."`
   - Subtitle: `"Questions about the menu, a recent order, catering, or an upcoming visit? Our team is here to help."`
   - Badge: `"WE REPLY FAST"`
2. **Contact Details 4-Card Grid** (`H: 746px`):
   - 4 Neo-Brutalist Info Cards:
     1. **ADDRESS**: `123 Flavor Street, Brooklyn, NY 11201` (Pin icon)
     2. **PHONE**: `+1 (212) 555-0186` (Phone icon, `tel:` link)
     3. **EMAIL**: `hello@flameburger.example` (Mail icon, `mailto:` link)
     4. **OPENING HOURS**: `Mon–Thu: 10 AM–10 PM · Fri–Sun: 10 AM–11 PM` (Clock icon)
3. **Contact Form Section** (`H: 759px`):
   - Badge `"SEND A MESSAGE"`, Title `"DROP US A LINE"`
   - Subtitle: `"Compliments, questions, order hiccups, or big catering dreams—tell us everything. A real human reads every message."`
   - Form Fields:
     - Full Name (required)
     - Email Address (required, email validation)
     - Subject / Help Topic dropdown (`General Question`, `Order Support`, `Catering`, `Feedback`)
     - Message (required, multiline textarea)
     - Submit button `"SEND MESSAGE"` with loading spinner & confirmation state.
4. **Visit & Location Map Section** (`H: 664px`):
   - Badge `"FIND US"`, Title `"VISIT FLAME BURGER"`
   - Neo-brutalist interactive map card with custom pin & `"GET DIRECTIONS"` button.
5. **FAQ Accordion Section** (`H: 610px`, anchor `#faq`):
   - Badge `"QUICK ANSWERS"`, Title `"NEED A QUICK ANSWER?"`
   - 4 Expandable accordions with spring rotation icon:
     1. How can I check if delivery is available?
     2. How do I ask about a recent order?
     3. How far in advance should I book catering?
     4. Do you accept feedback?
6. **Final CTA Banner** (`H: 673px`):
   - `"WE’LL BE HAPPY TO HEAR FROM YOU."`
