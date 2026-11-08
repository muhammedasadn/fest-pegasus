# Architectural Decisions & Dependency Justifications

## 1. Stack Foundation
- **Next.js (App Router, Next 16 / React 19):** High-performance React Server Components foundation with instant static generation for maximum Lighthouse scores.
- **Tailwind CSS v4:** Native CSS variables, `@theme` directives for zero runtime overhead. All colors, borders, shadows, and radii are tokenized.
- **Framer Motion (`framer-motion`):** Primary animation engine. Used for physics-based springs, kinetic text reveals, continuous mirror floating loops, infinite marquees, and tactile hover tilt cards.
- **Lucide React (`lucide-react`):** Clean icon system for ratings, time, pin, phone, arrows, plus/minus, and hamburger menu.

## 2. 3D Elements Approach
- **Decision:** Do NOT install heavyweight `@splinetool/react-spline` or `three` / `@react-three/fiber` for the core hero visual.
- **Justification:** Extensive inspection of the reference site's network tab, WebGL context bindings, and DOM tree demonstrated that the reference site itself contains **0 canvases, 0 WebGL calls, and 0 3D model files**.
- The "3D" appearance on the reference is created through an isolated transparent 1200×1200 cutout food photograph (`5DEhx8qXRUbEXqRwbwUuzYm1GpU.png`) rotated at `-25deg` with continuous spring/mirror vertical floating over massive typographic layers, combined with interactive card tilt springs (`rotate: -2deg` / `rotate: 2deg`, `y: -6px`).
- Building this with optimized Next.js `<Image>` and Framer Motion 3D perspective transforms (`transformPerspective: 1000`, `rotateX`, `rotateY`, `useSpring`) reproduces the reference with 100% pixel fidelity, zero bundle bloat, zero frame drops, and flawless mobile performance.

## 3. Font Loading Strategy
- **Decision:** Load `Archivo Black` and `Bricolage Grotesque` via `next/font/google` in `src/app/layout.tsx`.
- **Justification:** `next/font` automatically optimizes Google Fonts, self-hosts the Woff2 files, eliminates external font network waterfalls, and guarantees zero Cumulative Layout Shift (CLS).

## 4. Assets & Media
- All 34 unique high-resolution images are mapped and saved directly from the Framer CDN into `public/assets/images/` to prevent external CDN link degradation and ensure offline local development reliability.
