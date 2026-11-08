"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonMotionVariants } from "@/lib/motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "yellow" | "white" | "ink" | "red";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "yellow",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const variantStyles = {
    yellow: "bg-[#FFAA00] text-[#141414] hover:bg-[#ffb41f]",
    white: "bg-white text-[#141414] hover:bg-[#f7f7f7]",
    ink: "bg-[#141414] text-white hover:bg-[#252525]",
    red: "bg-[#E30613] text-white hover:bg-[#f0101d]",
  };

  const sizeStyles = {
    sm: "h-[42px] px-5 text-[14px]",
    md: "h-[52px] px-8 text-[16px]",
    lg: "h-[58px] px-10 text-[18px]",
  };

  const combinedClasses = cn(
    "inline-flex items-center justify-center rounded-full border-[3px] border-[#141414] font-body font-extrabold uppercase tracking-[0.03em] cursor-pointer select-none transition-colors duration-150 text-center whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        variants={buttonMotionVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={combinedClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      variants={buttonMotionVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={combinedClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
}
