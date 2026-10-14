import React from "react";
import { cn } from "@/lib/utils";

interface WindowFrameProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
  isDark?: boolean;
}

export function WindowFrame({
  title = "Untitled",
  children,
  className = "",
  headerRight,
  isDark = false,
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[18px] bg-card border border-line overflow-hidden transition-all duration-300",
        isDark ? "shadow-windowDark" : "shadow-window",
        className
      )}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-paper/90 select-none">
        {/* 3 Gray traffic-light dots in --line */}
        <div className="flex items-center space-x-1.5" aria-hidden="true">
          <div className="w-2.5 h-2.5 rounded-full bg-line/80 border border-line" />
          <div className="w-2.5 h-2.5 rounded-full bg-line/80 border border-line" />
          <div className="w-2.5 h-2.5 rounded-full bg-line/80 border border-line" />
        </div>

        {/* Centered Title */}
        <span className="text-xs font-mono font-medium text-ink-muted/80 tracking-tight truncate max-w-[200px] sm:max-w-xs text-center">
          {title}
        </span>

        {/* Optional Right Action or Balance Spacer */}
        <div className="min-w-[42px] flex justify-end text-xs text-ink-muted">
          {headerRight || null}
        </div>
      </div>

      {/* Window Body Content (stays white on both light and dark so it pops) */}
      <div className="p-4 sm:p-6 bg-card text-ink">
        {children}
      </div>
    </div>
  );
}
