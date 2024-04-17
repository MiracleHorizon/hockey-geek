export const BREAKPOINTS_MAX_WIDTH = {
  xs: 520,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1640
} as const
export const BREAKPOINTS_MIN_WIDTH = {
  xs: BREAKPOINTS_MAX_WIDTH.xs + 1,
  sm: BREAKPOINTS_MAX_WIDTH.sm + 1,
  md: BREAKPOINTS_MAX_WIDTH.md + 1,
  lg: BREAKPOINTS_MAX_WIDTH.lg + 1,
  xl: BREAKPOINTS_MAX_WIDTH.xl + 1
} as const
