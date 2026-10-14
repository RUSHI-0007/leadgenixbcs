import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names safely with Tailwind merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
