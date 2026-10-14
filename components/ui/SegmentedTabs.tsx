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
  isDark?: boolean;
  tone?: string; // for backward compatibility
  className?: string;
}

export function SegmentedTabs<T extends string = string>({
  options,
  activeTab,
  onChange,
  isDark = false,
  className = "",
}: SegmentedTabsProps<T>) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center p-1.5 rounded-full select-none transition-colors",
        isDark
          ? "bg-ink-deep border border-line-dark"
          : "bg-tomato-tint border border-tomato-tint/50",
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
              "relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-200 focus-visible:outline-none",
              isDark
                ? isActive
                  ? "bg-paper text-ink shadow-sm"
                  : "text-paper/75 hover:text-paper"
                : isActive
                ? "bg-card text-ink shadow-sm"
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
