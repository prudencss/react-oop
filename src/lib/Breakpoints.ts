export const defaultBreakpoints = {
  xs: 480,
  s: 750,
  m: 960,
  l: 1024,
  xl: 1600,
  xxl: 1920,
};

export type orientation = 'portrait' | 'landscape';

export interface orientations {
  portrait: 'portrait';
  landscape: 'landscape';
}

export function isLandscape(): boolean {
  return (window.matchMedia('(orientation: landscape)').matches && window.matchMedia(`(min-width: ${defaultBreakpoints.l}px)`).matches)
    || (window.matchMedia('(orientation: portrait)').matches && window.matchMedia(`(min-width: ${defaultBreakpoints.l}px)`).matches);
}

export function isPortrait(): boolean {
  return window.matchMedia(`(max-width: ${defaultBreakpoints.l - 1}px)`).matches;
}

export function getOrientation(): orientation {
  return (isLandscape())
    ? 'landscape'
    : 'portrait'
}

export function isSmall(): boolean {
  return window.matchMedia('(orientation:landscape)').matches && window.matchMedia(`(min-width: ${defaultBreakpoints.l}px)`).matches;
}

export function isMedium(): boolean {
  return window.matchMedia('(orientation:landscape)').matches && window.matchMedia(`(min-width: ${defaultBreakpoints.xl}px)`).matches;
}

export function isLarge(): boolean {
  return window.matchMedia('(orientation:landscape)').matches && window.matchMedia(`(min-width: ${defaultBreakpoints.xxl}px)`).matches;
}

export function isBroad(): boolean {
  return window.matchMedia('(orientation:landscape)').matches && window.matchMedia(`(min-width: ${defaultBreakpoints.xxl + 1}px)`).matches;
}
