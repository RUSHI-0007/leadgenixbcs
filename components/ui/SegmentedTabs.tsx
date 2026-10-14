"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabOption<T extends string = string> {
  id: T;
  label: string;
  badge?: number | string;
}

interface SegmentedTabsProps<T extends string = string> {
  options: TabOption<T>[];
  activeTab: T;
  onChange: (tabId: T) => void;
  tone?: "green" | "indigo";
  className?: string;
}

export function SegmentedTabs<T extends string = string>({
  options,
  activeTab,
  onChange,
  tone = "indigo",
  className = "",
}: SegmentedTabsProps<T>) {
  const trackBg = tone === "green" ? "bg-green-tint" : "bg-indigo-tint";
  const activeColor = tone === "green" ? "text-green" : "text-indigo";

  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center p-1.5 rounded-full select-none",
        trackBg,
        className
      )}
    >
      {options.map((option) => {
        const isActive = activeTab === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={cn(
              "relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo",
              isActive
                ? cn("bg-white text-ink shadow-sm", activeColor)
                : "text-ink-soft hover:text-ink"
            )}
          >
            <span>{option.label}</span>
            {option.badge !== undefined && (
              <span className="ml-1.5 text-xs opacity-60">
                ({option.badge})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
