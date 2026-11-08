---
name: ultra-motion-frontend
description: >-
  Blueprints, animation recipes, and production patterns for ultra-animated modern websites:
  GSAP ScrollTrigger, Lenis smooth scrolling, Framer Motion springs, Three.js/R3F WebGL shaders,
  glassmorphism, bento grids, spotlight cursors, and 60/120 FPS performance optimizations.
---

# Ultra-Motion Frontend Skill

Expert guide and production-ready implementations for building modern, ultra-animated, visually stunning web experiences.

---

## 1. GSAP 3 & ScrollTrigger with React / Next.js

### A. Lifecycle Cleanup with `@gsap/react`
Prevent duplicate triggers, memory leaks, and hydration mismatch by encapsulating animations with `useGSAP`:

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function AnimatedSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pinning & Scrubbed reveal
      const cards = gsap.utils.toArray<HTMLElement>(".bento-card");

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative min-h-screen py-24">
      {/* Content */}
    </section>
  );
}
```

### B. Lenis Smooth Scrolling Integration
Pair Lenis with ScrollTrigger for buttery 120 FPS inertia:

```tsx
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.destroy();
  };
}
```

---

## 2. Framer Motion: Organic Springs & Shared Layouts

### A. Physics Spring Preset
```tsx
export const springTransition = {
  type: "spring" as const,
  stiffness: 320,
  damping: 28,
  mass: 0.8,
};
```

### B. Morphing Tabs / Expanding Cards with `layoutId`
```tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function MorphingTabs({ tabs }: { tabs: string[] }) {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
        >
          {active === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-white/20 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              transition={springTransition}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
```

---

## 3. Glassmorphism & Bento UI Styling Tokens

### A. Glassmorphic Surface Recipe
```css
/* Tailwind utility classes for ultra-glass surface */
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.12),
    0 8px 32px 0 rgba(0, 0, 0, 0.36);
}
```

### B. Dynamic Spotlight Cursor Card
```tsx
"use client";

import React, { useRef } from "react";

export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

---

## 4. Three.js & React Three Fiber (R3F) Clean Scene Architecture

```tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#3b82f6"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#06b6d4" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#8b5cf6" />
        <AnimatedMesh />
      </Canvas>
    </div>
  );
}
```
