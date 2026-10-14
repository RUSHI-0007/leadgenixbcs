import React from "react";
import { cn } from "@/lib/utils";

interface TornEdgeProps {
  position?: "top" | "bottom";
  fill?: string;
  className?: string;
}

export function TornEdge({
  position = "top",
  fill = "#F6F2EC", // Default to --paper
  className = "",
}: TornEdgeProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-none pointer-events-none select-none z-10",
        position === "top" ? "-mt-1 mb-0" : "-mb-1 mt-0 rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-6 sm:h-8 block"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 32 L 0 18 Q 30 10, 65 22 T 130 14 T 210 24 T 300 12 T 390 26 T 480 15 T 570 23 T 660 11 T 750 25 T 840 13 T 930 22 T 1020 12 T 1110 24 T 1200 16 L 1200 32 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
