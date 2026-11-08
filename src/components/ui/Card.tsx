"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHoverLeftVariants, cardHoverRightVariants } from "@/lib/motion";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  tiltDirection?: "left" | "right" | "none";
  children: React.ReactNode;
}

export function Card({
  children,
  className,
  tiltDirection = "none",
  ...props
}: CardProps) {
  const getVariants = () => {
    if (tiltDirection === "left") return cardHoverLeftVariants;
    if (tiltDirection === "right") return cardHoverRightVariants;
    return undefined;
  };

  return (
    <motion.div
      variants={getVariants()}
      initial={tiltDirection !== "none" ? "initial" : undefined}
      whileHover={tiltDirection !== "none" ? "hover" : undefined}
      className={cn(
        "rounded-[24px] border-[3px] border-[#141414] bg-white shadow-[4px_4px_0px_0px_#141414] overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
