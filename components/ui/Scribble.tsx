"use client";

import React, { useRef, useEffect, useId } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValue,
  animate,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScribbleProps {
  variant?: "underline" | "circle";
  tone?: "green" | "indigo" | "ink";
  className?: string;
  isHero?: boolean;
}

export function Scribble({
  variant = "underline",
  tone = "green",
  className = "",
  isHero = false,
}: ScribbleProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const rawId = useId();
  const filterId = `wobble-${variant}-${tone}-${rawId.replace(/[^a-zA-Z0-9-_]/g, "")}`;

  // Scroll tracking for non-hero elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 52%"],
  });

  const scrollOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const smoothScrollOffset = useSpring(scrollOffset, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // Dedicated motion value for hero headline (page load draw-on)
  const heroOffset = useMotionValue(1);

  useEffect(() => {
    if (isHero && !shouldReduceMotion) {
      const controls = animate(heroOffset, 0, {
        duration: 0.9,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [isHero, shouldReduceMotion, heroOffset]);

  const toneColors = {
    green: "#1E9E62",
    indigo: "#4B55D8",
    ink: "#16231D",
  };

  const strokeColor = toneColors[tone];

  // Pick animated or static dashoffset
  const activeDashOffset = shouldReduceMotion
    ? 0
    : isHero
    ? heroOffset
    : smoothScrollOffset;

  return (
    <span
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute select-none z-0",
        variant === "underline" &&
          "-bottom-2.5 sm:-bottom-3.5 left-0 right-0 w-full h-3.5 sm:h-5 -rotate-1",
        variant === "circle" &&
          "-inset-x-3.5 sm:-inset-x-5 -inset-y-2.5 sm:-inset-y-3.5 -rotate-2",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox={variant === "underline" ? "0 0 220 20" : "0 0 200 90"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {variant === "underline" ? (
          <motion.path
            d="M 4 12 C 55 15, 115 16, 170 13 C 190 12, 206 10, 214 7 C 216 6, 218 5, 219 3"
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#${filterId})`}
            pathLength={1}
            strokeDasharray="1 1"
            style={{
              pathLength: 1,
              strokeDashoffset: activeDashOffset,
            }}
          />
        ) : (
          <motion.path
            d="M 152 16 C 178 24, 192 42, 186 60 C 178 78, 140 85, 98 84 C 56 83, 14 74, 8 50 C 3 26, 45 10, 96 9 C 134 8, 165 14, 172 22 C 178 28, 180 38, 174 44"
            stroke={strokeColor}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#${filterId})`}
            pathLength={1}
            strokeDasharray="1 1"
            style={{
              pathLength: 1,
              strokeDashoffset: activeDashOffset,
            }}
          />
        )}
      </svg>
    </span>
  );
}
