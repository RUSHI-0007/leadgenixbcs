import React from "react";
import { cn } from "@/lib/utils";

interface BrushBgProps {
  tone?: "green" | "indigo";
  shape?: 1 | 2 | 3;
  className?: string;
}

export function BrushBg({ tone = "green", shape = 1, className = "" }: BrushBgProps) {
  const fillColor = tone === "green" ? "#1E9E62" : "#4B55D8";

  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 select-none overflow-hidden opacity-[0.06] transition-opacity",
        "w-[420px] h-[340px] sm:w-[650px] sm:h-[500px] lg:w-[800px] lg:h-[600px] max-w-[100vw]",
        className
      )}
      aria-hidden="true"
    >
      {shape === 1 && (
        /* Large sweeping organic curve / crescent swoosh */
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform -rotate-3"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 60 480 C 120 180, 420 50, 720 120 C 650 320, 480 520, 200 550 C 110 560, 40 540, 60 480 Z"
            fill={fillColor}
          />
          <path
            d="M 120 400 C 200 160, 480 80, 680 200 C 580 380, 380 500, 180 480 Z"
            fill={fillColor}
            opacity="0.5"
          />
        </svg>
      )}

      {shape === 2 && (
        /* Organic brush ring / halo swirl */
        <svg
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform rotate-6"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 350 70 C 520 60, 650 180, 640 360 C 630 520, 490 640, 320 630 C 160 620, 60 480, 80 310 C 100 160, 220 75, 350 70 Z"
            fill={fillColor}
          />
          <path
            d="M 360 160 C 470 160, 540 240, 530 360 C 520 470, 430 530, 330 520 C 220 510, 160 420, 170 310 C 180 220, 260 160, 360 160 Z"
            fill="#FFFFFF"
          />
        </svg>
      )}

      {shape === 3 && (
        /* Dynamic angled ribbon swoosh */
        <svg
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform -rotate-6"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 40 320 C 180 120, 440 80, 760 220 C 660 360, 380 380, 40 320 Z"
            fill={fillColor}
          />
          <path
            d="M 120 280 C 240 140, 460 120, 680 220 C 580 320, 340 340, 120 280 Z"
            fill={fillColor}
            opacity="0.6"
          />
        </svg>
      )}
    </div>
  );
}
