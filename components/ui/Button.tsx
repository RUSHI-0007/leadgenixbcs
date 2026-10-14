import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "tomato" | "ink" | "secondary" | "paper" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className = "",
  variant = "ink",
  size = "md",
  href,
  isLoading = false,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const activeVariant: "tomato" | "ink" | "secondary" | "paper" =
    variant === "tomato"
      ? "tomato"
      : variant === "secondary"
      ? "secondary"
      : variant === "paper"
      ? "paper"
      : "ink";

  const baseStyles =
    "group inline-flex items-center justify-center font-heading rounded-button transition-all duration-150 focus-visible:outline-none select-none disabled:opacity-50 disabled:cursor-not-allowed";

  // Font size rules:
  // Tomato button: font-weight 800, font-size >= 18.7px (text-[19px])
  // Smaller buttons: ink-filled with paper text and tomato arrow
  const sizeStyles = {
    sm: "text-xs uppercase tracking-wider px-4 py-2 gap-1.5 font-bold",
    md: "text-[15px] px-6 py-3.5 gap-2 font-bold",
    lg: activeVariant === "tomato"
      ? "text-[19px] font-extrabold px-7 py-4 gap-2.5"
      : "text-base font-bold px-7 py-4 gap-2.5",
    hero: "text-[19px] sm:text-[20px] font-extrabold px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    tomato:
      "bg-tomato text-ink font-extrabold shadow-tomatoCta hover:bg-tomato-hover active:scale-[0.98] border border-transparent",
    ink:
      "bg-ink text-paper font-bold hover:bg-ink-deep active:scale-[0.98] border border-transparent",
    secondary:
      "bg-transparent text-ink font-bold border-2 border-ink hover:bg-ink/5 active:scale-[0.98]",
    paper:
      "bg-paper text-ink font-bold hover:bg-paper-deep active:scale-[0.98] border border-line",
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 transition-transform duration-150 group-hover:translate-x-1 text-tomato">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[activeVariant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[activeVariant], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
