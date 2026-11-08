import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1200px] mx-auto px-5 md:px-8 xl:px-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
