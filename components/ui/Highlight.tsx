"use client";

import React, { useRef, useEffect } from "react";
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

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  isHero?: boolean;
  isDark?: boolean;
}

export function Highlight({
  children,
  className = "",
  isHero = false,
  isDark = false,
}: HighlightProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked marker fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 84%", "start 48%"],
  });

  const rawScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const smoothScaleX = useSpring(rawScaleX, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // Dedicated motion value for hero load-in
  const heroScaleX = useMotionValue(0);

  useEffect(() => {
    if (isHero && !shouldReduceMotion) {
      const controls = animate(heroScaleX, 1, {
        duration: 0.7,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [isHero, shouldReduceMotion, heroScaleX]);

  const activeScaleX = shouldReduceMotion
    ? 1
    : isHero
    ? heroScaleX
    : smoothScaleX;

  return (
    <span
      ref={containerRef}
      className={cn(
        "relative inline-block whitespace-nowrap font-inherit",
        isDark ? "text-paper" : "text-ink",
        className
      )}
    >
      {/* Tomato marker bar */}
      <motion.span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -left-1 -right-1 top-[14%] bottom-[6%] rounded-[3px] -rotate-1 skew-x-[-2deg] -z-1",
          isDark
            ? "bg-[rgba(254,94,86,0.55)] mix-blend-screen"
            : "bg-[rgba(254,94,86,0.35)] mix-blend-multiply"
        )}
        style={{
          scaleX: activeScaleX,
          transformOrigin: "left",
        }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
