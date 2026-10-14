import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tone?: "indigo" | "green" | "neutral";
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  tone = "indigo",
  hoverEffect = true,
  ...props
}: CardProps) {
  const toneStyles = {
    indigo: "border-line hover:border-indigo/50 hover:shadow-card",
    green: "border-line hover:border-green/50 hover:shadow-cardGreen",
    neutral: "border-line hover:border-ink/20",
  };

  return (
    <div
      className={cn(
        "rounded-card border bg-white p-6 sm:p-8 transition-all duration-200",
        toneStyles[tone],
        hoverEffect && "hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
