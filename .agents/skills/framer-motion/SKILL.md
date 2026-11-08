---
name: framer-motion
description: >-
  Production blueprints and animation patterns for Framer Motion & Motion for React (motion/react).
  Covers physics-based spring systems, scroll-driven interactions (useScroll, useTransform, useVelocity),
  shared layout morphs (layoutId), interactive 3D tilt cards, magnetic cursor attraction,
  staggered kinetic text reveals, SVG path drawing, and 60/120 FPS performance optimizations.
---

# Framer Motion & Motion for React Skill

Comprehensive, production-ready engineering patterns for **Framer Motion** and modern **Motion for React** (`motion/react`).

---

## 1. Modern Import Standards & Client Boundary

In Next.js App Router and React 19, keep `"use client"` confined strictly to interactive animation boundaries:

```tsx
"use client";

// Modern Motion import (supports both motion/react and framer-motion)
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// or: import { motion, AnimatePresence } from "motion/react";
```

---

## 2. Organic Spring Physics Presets

Ditch linear easing for physics-based springs:

```typescript
export const springPresets = {
  // Snappy: Ideal for buttons, icons, dropdown menus, and toggle switches
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  },
  // Bouncy: Great for micro-rewards, notification badges, and playful UI
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 18,
    mass: 0.9,
  },
  // Gentle: Best for modals, full-page transitions, and expanding cards
  gentle: {
    type: "spring" as const,
    stiffness: 180,
    damping: 26,
    mass: 1.0,
  },
  // Smooth Inertia: Ideal for custom cursor followers and parallax tracking
  inertia: {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  },
};
```

---

## 3. Interactive Micro-Interactions

### A. 3D Tilt Glassmorphic Card
Calculates cursor position and tilts in 3D perspective using motion values and springs:

```tsx
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xFromCenter = (e.clientX - rect.left) / width - 0.5;
    const yFromCenter = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xFromCenter);
    mouseY.set(yFromCenter);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-xl shadow-2xl transition-shadow duration-300 hover:shadow-violet-500/10 ${className}`}
    >
      <div style={{ transform: "translateZ(40px)" }}>{children}</div>
    </motion.div>
  );
}
```

### B. Magnetic Attraction Button
Pulls toward the cursor when hovering nearby:

```tsx
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 18, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    // Dampen distance for subtle magnetic pull
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-white/20 backdrop-blur-md"
    >
      {children}
    </motion.button>
  );
}
```

---

## 4. Scroll-Driven Interactions (`useScroll`, `useTransform`)

### A. Parallax Hero Section with Velocity Skew
```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export function ParallaxHero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skew = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={targetRef} className="relative h-[120vh] overflow-hidden bg-zinc-950">
      <motion.div
        style={{ y: yBackground, opacity, scale, skewY: skew }}
        className="sticky top-0 flex h-screen flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
          Ultra <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Dynamic</span>
        </h1>
        <p className="mt-6 text-xl text-zinc-400 max-w-xl">
          Physics-based animations, glassmorphic surfaces, and seamless transitions.
        </p>
      </motion.div>
    </section>
  );
}
```

---

## 5. Layout Morphs & Shared Element Transitions

### A. Expandable Bento Card to Modal (`layoutId`)
```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
  id: string;
  title: string;
  category: string;
  description: string;
}

export function ExpandableCards({ items }: { items: Item[] }) {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={`card-${item.id}`}
          onClick={() => setSelected(item)}
          className="cursor-pointer rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-lg hover:border-violet-500/50 transition-colors"
        >
          <motion.span layoutId={`category-${item.id}`} className="text-xs uppercase tracking-wider text-violet-400">
            {item.category}
          </motion.span>
          <motion.h3 layoutId={`title-${item.id}`} className="mt-2 text-2xl font-bold text-white">
            {item.title}
          </motion.h3>
        </motion.div>
      ))}

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-zinc-900 p-8 shadow-2xl"
            >
              <motion.span layoutId={`category-${selected.id}`} className="text-xs uppercase tracking-wider text-violet-400">
                {selected.category}
              </motion.span>
              <motion.h3 layoutId={`title-${selected.id}`} className="mt-2 text-3xl font-bold text-white">
                {selected.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 text-zinc-300 leading-relaxed"
              >
                {selected.description}
              </motion.p>
              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-white hover:bg-zinc-700"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## 6. Kinetic Typography (Staggered Word Reveal)

```tsx
"use client";

import { motion } from "framer-motion";

export function StaggeredTextReveal({ text }: { text: string }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 220,
      },
    },
  };

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-wrap gap-x-2 text-4xl md:text-6xl font-bold text-white"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
```

---

## 7. Performance Best Practices

1. **Composite-Only Properties**: Only animate `transform` (`x`, `y`, `scale`, `rotate`, `skew`) and `opacity`. Never animate `top`, `left`, `margin`, `width`, or `height` unless using `layout`.
2. **Accessible Motion**:
   ```tsx
   import { useReducedMotion } from "framer-motion";
   const shouldReduceMotion = useReducedMotion();
   const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
   ```
3. **Hardware Acceleration**: For complex layers, use `style={{ willChange: "transform" }}` sparingly on actively animated elements.
4. **AnimatePresence Mode**: Always use `mode="wait"` to let the previous element exit cleanly before the next enters, or `mode="popLayout"` for instant repositioning in dynamic lists.
