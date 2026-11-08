# Flame Burger

> A modern, high-performance, and animation-rich fast-casual dining web application built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. Rebuilt with pixel-level fidelity from the Framer design reference.

---

## ⚡ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Motion & Physics:** [Framer Motion](https://www.framer.com/motion/)
- **Typography:** Archivo Black, Bricolage Grotesque, Inter (via `next/font`)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVGs
- **Package Manager:** `pnpm`

---

## 🌐 Routes & Pages

The application is fully responsive across Desktop (1440px), Tablet (820px), and Mobile (390px):

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero with 3D parallax burger centerpiece, interactive categories, specials, testimonials, reviews, FAQ, and dual-direction photo tickers. |
| `/menu` | **Menu** | Full menu with 18 items across 5 categories, interactive client-side filter tabs (`All`, `Burgers`, `Pizza`, `Sides`, `Pasta`, `Drinks`). |
| `/offers` | **Offers & Deals** | Neo-brutalist combo cards, Weekend Double Smash promo, copyable discount code, and terms accordion. |
| `/events` | **Catering & Events** | Event catering packages, sharing party platters, 3-step planning guide, and interactive booking inquiry form. |
| `/about` | **Our Story** | Brand origin narrative, 3D tilted photo polaroids, core values, restaurant metrics, and live opening hours. |
| `/blog` | **Flame Journal** | Food stories index, featured editorial read, 4 category cards, and newsletter subscription form. |
| `/blog/[slug]` | **Article Detail** | Static Site Generated (SSG) deep-dive articles with reading times, author metadata, and formatted story content. |
| `/contact` | **Contact & FAQ** | Direct contact cards, interactive message form with instant confirmation, simulated map pin, and accordions. |

---

## 🎨 Design System

The visual identity follows a refined Neo-Brutalist design language:

- **Borders & Shadows:** Solid 3px borders (`#141414`) with sharp, unblurred offset box shadows (`4px`–`10px`).
- **Physics Springs:** Natural tactile interactions with Framer Motion spring presets (`stiffness: 300, damping: 25`).
- **Color Palette:**
  - **Dark Foundation:** `#141414`
  - **Warm Cream:** `#FFF4DC`
  - **Forest Green:** `#237227`
  - **Amber Yellow:** `#FFAA00`
  - **Fire Red:** `#E30613`
- **Typography Pairing:**
  - Display & Headings: `Archivo Black`
  - Accents & Badges: `Bricolage Grotesque` / `Bebas Neue`
  - Body & UI: `Inter`

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.x or later
- [pnpm](https://pnpm.io/) 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammedasadn/fest-pegasus.git
cd fest-pegasus

# Install dependencies
pnpm install
```

### Development

```bash
# Start local development server with Turbopack
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and build static application
pnpm build

# Serve production build locally
pnpm start -p 3000
```

---

## 📁 Project Structure

```
├── docs/                 # Inspection, architectural planning, and QA logs
├── public/               # Optimized static media assets and typography
├── scripts/              # Automated verification and inspection scripts
├── src/
│   ├── app/              # Next.js App Router pages and route handlers
│   ├── components/
│   │   ├── layout/       # Navbar with active route indicators, Footer, Container
│   │   ├── pages/        # Modular page components (menu, offers, events, about, blog, contact)
│   │   ├── sections/     # Homepage modular sections
│   │   ├── three/        # 3D interactive visuals (BurgerPlateVisual)
│   │   └── ui/           # Reusable UI primitives (Button, Badge, Card)
│   ├── data/             # Static product registry and specifications
│   └── lib/              # Motion curves, spring configurations, and utility helpers
```

---

## 📄 License

This project is licensed under the MIT License.
