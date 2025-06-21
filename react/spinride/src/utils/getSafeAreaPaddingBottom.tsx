/**
 * Returns a CSS value with safe-area-inset-bottom included.
 * @param basePadding Number (e.g., 20)
 * @returns A string for padding-bottom: 'calc(20px + env(safe-area-inset-bottom))'
 */
export function getSafeAreaPaddingBottom(basePadding: number): string {
  return `calc(${basePadding}px + env(safe-area-inset-bottom))`;
}
