"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "yellow" | "white" | "red" | "dark" | "green";
  hasShadow?: boolean;
}

export function Badge({
  children,
  className,
  variant = "white",
  hasShadow = false,
  ...props
}: BadgeProps) {
  const variantClasses = {
    yellow: "bg-[#FFAA00] text-[#141414]",
    white: "bg-white text-[#141414]",
    red: "bg-[#E30613] text-white",
    dark: "bg-[#141414] text-white",
    green: "bg-[#237227] text-white",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-4 py-1.5 rounded-full border-[3px] border-[#141414] font-body font-extrabold text-[13px] md:text-[14px] uppercase tracking-[0.08em] select-none",
        hasShadow && "shadow-[4px_4px_0px_0px_#141414]",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
