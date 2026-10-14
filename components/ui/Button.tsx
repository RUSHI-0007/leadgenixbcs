import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "green" | "indigo" | "secondary" | "tintGreen" | "tintIndigo" | "dark";
  size?: "sm" | "md" | "hero";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className = "",
  variant = "green",
  size = "md",
  href,
  isLoading = false,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-bold rounded-button transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs uppercase tracking-wider px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3.5 gap-2",
    hero: "text-lg px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    green:
      "bg-green text-white shadow-green hover:bg-green-dark hover:-translate-y-0.5 border border-transparent focus-visible:ring-green",
    indigo:
      "bg-indigo text-white shadow-indigo hover:bg-indigo-dark hover:-translate-y-0.5 border border-transparent focus-visible:ring-indigo",
    secondary:
      "bg-white text-ink border border-line hover:border-ink/30 hover:bg-mist hover:-translate-y-0.5 focus-visible:ring-ink",
    tintGreen:
      "bg-green-tint text-green hover:bg-green-tint/80 focus-visible:ring-green border border-transparent",
    tintIndigo:
      "bg-indigo-tint text-indigo hover:bg-indigo-tint/80 focus-visible:ring-indigo border border-transparent",
    dark:
      "bg-ink text-white hover:bg-ink/90 hover:-translate-y-0.5 border border-transparent focus-visible:ring-ink",
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
