"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ASSETS } from "@/data/assets";

export function BurgerPlateVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for enhanced 3D tactile feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-20 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: 1000 }}
    >
      {/* 3D Tilt Wrapper */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        className="will-change-transform"
      >
        {/* Continuous Floating Mirror Loop */}
        <motion.div
          animate={{
            y: [-9, 9],
            rotate: [-24.5, -25.5],
          }}
          transition={{
            duration: 2.8,
            ease: [0.45, 0, 0.55, 1],
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="relative w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[490px] lg:h-[490px] xl:w-[520px] xl:h-[520px] filter drop-shadow-[0_24px_32px_rgba(0,0,0,0.35)]"
        >
          <Image
            src={ASSETS.hero.plate}
            alt="Double patty gourmet smash burger on signature diner plate"
            fill
            sizes="(min-width: 1200px) 520px, (min-width: 810px) 420px, 290px"
            priority
            className="object-contain pointer-events-none transform -rotate-[25deg] select-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
