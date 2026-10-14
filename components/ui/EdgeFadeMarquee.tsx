import React from "react";
import { cn } from "@/lib/utils";

interface EdgeFadeMarqueeProps {
  children: React.ReactNode;
  className?: string;
  speedClass?: string;
}

export function EdgeFadeMarquee({
  children,
  className = "",
}: EdgeFadeMarqueeProps) {
  return (
    <div className={cn("relative w-full overflow-hidden mask-fade-edges", className)}>
      <div className="flex animate-marquee items-center gap-8 sm:gap-14 py-2">
        {children}
        {/* Duplicated for seamless CSS loop */}
        {children}
      </div>
    </div>
  );
}
