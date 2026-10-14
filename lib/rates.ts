/**
 * Helper to compute percentage rates from raw campaign metrics.
 * Formula: round((numerator / denominator) * 100, 2)
 * Ensures zero hardcoding of campaign percentages.
 */
export function computeRate(numerator: number, denominator: number): number {
  if (!denominator || denominator <= 0) {
    return 0;
  }
  return Math.round((numerator / denominator) * 100 * 100) / 100;
}

/**
 * Formats a calculated rate for display.
 * Strips superfluous trailing zeros for integers (e.g., 72% instead of 72.00%).
 */
export function formatRate(rate: number): string {
  if (rate % 1 === 0) {
    return `${rate}%`;
  }
  return `${rate.toFixed(2)}%`;
}
