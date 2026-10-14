import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LeadGenixLogoProps {
  className?: string;
  isDark?: boolean;
}

export function LeadGenixLogo({ className = "", isDark = false }: LeadGenixLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center group font-heading text-2xl tracking-tight leading-none select-none",
        className
      )}
      aria-label="Leadgenix BCS - Home"
    >
      <span
        className={cn(
          "font-extrabold tracking-tight",
          isDark ? "text-paper" : "text-ink"
        )}
      >
        leadgeni
        <span className="text-tomato font-black">x</span>
      </span>
      <span
        className={cn(
          "ml-1.5 font-normal text-lg lowercase tracking-normal",
          isDark ? "text-paper/60" : "text-ink-soft font-normal"
        )}
      >
        bcs
      </span>
    </Link>
  );
}
