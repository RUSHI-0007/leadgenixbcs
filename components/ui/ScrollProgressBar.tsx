"use client";

import React from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-tomato z-50 origin-left pointer-events-none"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
