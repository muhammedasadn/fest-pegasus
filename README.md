# 🍔 FLAME BURGER — Crafted With Fire

A pixel-faithful, responsive, animation-heavy rebuild of the **FLAME BURGER** Framer website ([https://real-project-691891.framer.app/](https://real-project-691891.framer.app/)) constructed with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS v4 + PostCSS
- **Animations:** Framer Motion (spring physics, continuous loops, staggered reveals)
- **Visuals:** 3D cursor parallax tilt, infinite marquees, sticker badges
- **Fonts:** `Archivo Black`, `Bricolage Grotesque`, `Inter` (via `next/font/google`)
- **Icons:** Custom SVG Symbols & Lucide React

---

## 📐 Project Structure

```
.
├── docs/                      # Architectural docs (INSPECTION, PLAN, DECISIONS, PROGRESS, QA_REPORT)
├── public/                    # High-res assets (cutout burger, food photography, icons)
├── scripts/                   # Verification tools & measured DOM specifications
├── src/
│   ├── app/                   # Next.js App Router (layout, page, globals.css)
│   ├── components/
│   │   ├── layout/            # Navbar, Mobile Menu Drawer, Footer
│   │   ├── sections/          # 15 distinct sections (Hero, Marquee, Categories, Offers, Menu...)
│   │   ├── three/             # 3D interactive visual components (BurgerPlateVisual)
│   │   └── ui/                # Neo-brutalist button, badge, and card primitives
│   ├── data/                  # Static menu, category, and asset registry
│   └── lib/                   # Motion presets, spring curves, and cn utility
└── verification/              # Headless screenshots across Desktop, Tablet, and Mobile
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live site.

### 3. Build for Production
```bash
pnpm build
```

### 4. Run Production Build Locally
```bash
pnpm start
```

### 5. Run Verification Suite
```bash
pnpm run verify
```

---

## 🎨 Design Highlights

- **Neo-Brutalist Foundations:** 3px solid borders (`#141414`), unblurred hard drop shadows (`4px`, `6px`, `8px`, `10px`).
- **Signature Palette:** Warm Cream (`#FFF4DC`), Forest Green (`#237227`), Amber Yellow (`#FFAA00`), Fire Red (`#E30613`), Ink Dark (`#141414`).
- **Smooth Animations:** Kinetic word reveal, 3D burger tilt, dual-direction gallery tickers, and spring accordions.
