import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  isDark = false,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border transition-all duration-200 p-6 sm:p-8",
        isDark
          ? "bg-ink border-line-dark text-paper hover:border-tomato hover:shadow-cardDark"
          : "bg-card border-line text-ink hover:border-tomato hover:shadow-card",
        hoverEffect && "hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
