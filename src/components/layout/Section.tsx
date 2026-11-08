import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
}

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full relative py-20 md:py-28 overflow-hidden", className)}
      {...props}
    >
      {children}
    </section>
  );
}
