# Ultra-Animated & Modern Frontend Engineering Rules

These rules govern all frontend code, components, and animations across this workspace.

---

## 1. Visual Aesthetics & Design System

### A. Dark-Mode-First Obsidian Palette
- **Foundations**: Deep obsidian/zinc foundations (`#09090b`, `#030712`, `#0a0a0c`).
- **Accents**: High-vibrancy, saturated accents (Electric Violet `#8b5cf6`, Cyber Cyan `#06b6d4`, Emerald `#10b981`, Solar Amber `#f59e0b`).
- **Borders & Insets**: Delicate 1px borders (`border-white/10` or `border-white/5`), complemented with tactile inset highlights (`box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`).

### B. Glassmorphism & Depth
- Translucent multi-layered surfaces with `backdrop-filter: blur(12px)` to `blur(24px)`.
- Background fills: `rgba(255, 255, 255, 0.03)` to `rgba(255, 255, 255, 0.07)` on dark canvas.
- Avoid flat opaque boxes; use subtle depth gradients and micro-drop shadows (`shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`).

### C. Bento UI Grids
- Asymmetric, responsive Bento Grids (`display: grid; grid-template-columns: repeat(auto-fit, minmax(..., 1fr));`).
- Distinct visual weights: anchor hero cards, compact stat badges, interactive preview widgets.
- Spotlight effects: interactive cursor-following radial gradient highlights on cards.

---

## 2. Animation & Motion Engineering

### A. GSAP & ScrollTrigger
- **Lifecycle Cleanup**: ALWAYS use `@gsap/react` `useGSAP()` or wrap animations in `gsap.context()` inside `useEffect` / `useLayoutEffect` to avoid memory leaks and duplicate triggers.
- **ScrollTrigger**: Set `scrub: 1` or `scrub: 0.5` for inertia. Avoid layout thrashing by animating `xPercent`, `yPercent`, `scale`, and `opacity` rather than `top`, `left`, `width`, or `height`.
- **Pinning**: Use dedicated wrapper elements for pinning to prevent jumping layouts.

### B. Framer Motion & Motion for React
- **Import Standard**: Support modern `motion/react` or `framer-motion`. Ensure `"use client"` is isolated at the interactive component level.
- **Physics Springs**: Prefer spring transitions (`type: "spring", stiffness: 300, damping: 28`) over linear easings for natural organic feel.
- **Scroll & Gestures**: Use `useScroll` + `useTransform` for scroll-driven parallax; combine `whileHover` and `whileTap` with scale/springs for tactile micro-interactions.
- **Layout Morphs**: Use `layoutId` for smooth transitions between tabs, pills, and expanding cards.
- **Exit Transitions**: Wrap conditional components in `<AnimatePresence mode="wait">` (or `mode="popLayout"` for lists).
- **Accessibility**: Always respect `useReducedMotion()`. For complete recipes, see the [`framer-motion` skill](file:///home/asad/fest-pegasus/.agents/skills/framer-motion/SKILL.md).

### C. Three.js / React Three Fiber (R3F)
- Isolate WebGL into modular components (Camera, Canvas, Lights, Mesh, ShaderMaterial).
- Optimize render loops with `frameloop="demand"` where continuous rendering is unnecessary.
- Never allocate new objects/vectors inside `useFrame()`.
- Use `<instancedMesh>` for repeated particles or geometries.

### D. Performance & Hardware Acceleration
- Ensure GPU acceleration with `transform: translate3d(0, 0, 0)` or `will-change: transform`.
- Keep bundle lean by tree-shaking motion libraries.
