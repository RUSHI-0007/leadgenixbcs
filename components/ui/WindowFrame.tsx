import React from "react";
import { cn } from "@/lib/utils";

interface WindowFrameProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
}

export function WindowFrame({
  title = "Untitled",
  children,
  className = "",
  headerRight,
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[18px] bg-white border border-line shadow-window overflow-hidden transition-all duration-300",
        className
      )}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line/80 bg-paper/90 select-none">
        {/* 3 Gray traffic-light dots */}
        <div className="flex items-center space-x-1.5" aria-hidden="true">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]" />
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

      {/* Window Body Content */}
      <div className="p-4 sm:p-6 bg-white">
        {children}
      </div>
    </div>
  );
}
