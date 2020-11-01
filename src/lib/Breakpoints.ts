import { isMobile, isMobileOnly, isTablet } from 'mobile-device-detect';

export enum EDeviceType {
  Mobile = 'mobile',
  Tablet  = 'tablet',
  Desktop = 'desktop',
}

export enum EOrientation {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

export enum EDeviceSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const breakpoints = {
  [EOrientation.Portrait]: {
    [EDeviceType.Mobile]: {
      [EDeviceSize.Small]: 360,
      [EDeviceSize.Medium]: 480,
      [EDeviceSize.Large]: 600,
    },
    [EDeviceType.Tablet]: {
      [EDeviceSize.Small]: 720,
      [EDeviceSize.Medium]: 840,
      [EDeviceSize.Large]: 960,
    },
    [EDeviceType.Desktop]: {
      [EDeviceSize.Small]: 768,
      [EDeviceSize.Medium]: 1024,
      [EDeviceSize.Large]: 1280,
    },
  },
  [EOrientation.Landscape]: {
    [EDeviceType.Mobile]: {
      [EDeviceSize.Small]: 480,
      [EDeviceSize.Medium]: 600,
      [EDeviceSize.Large]: 960,
    },
    [EDeviceType.Tablet]: {
      [EDeviceSize.Small]: 960,
      [EDeviceSize.Medium]: 1280,
      [EDeviceSize.Large]: 1440,
    },
    [EDeviceType.Desktop]: {
      [EDeviceSize.Small]: 1440,
      [EDeviceSize.Medium]: 1600,
      [EDeviceSize.Large]: 1920,
    }
  }
};

export function getOrientation(): EOrientation {
  return (isLandscape())
    ? EOrientation.Landscape
    : EOrientation.Portrait;
}

export function isLandscape(): boolean {
  return window.matchMedia('(orientation: landscape)').matches;
}

export function isPortrait(): boolean {
  return window.matchMedia('(orientation: portrait)').matches;
}

export function isSmall(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(max-width: ${breakpoints[orientation][device][EDeviceSize.Small]})`).matches)
}

export function isMedium(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(max-width: ${breakpoints[orientation][device][EDeviceSize.Medium]})`).matches)
}

export function isLarge(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(max-width: ${breakpoints[orientation][device][EDeviceSize.Large]})`).matches)
}

export function isHuge(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(min-width: ${breakpoints[orientation][device][EDeviceSize.Large] + 1})`).matches)
}

export function getDeviceType(): EDeviceType {
  return isMobileOnly
    ? EDeviceType.Mobile
    : isTablet
      ? EDeviceType.Tablet
      : EDeviceType.Desktop;
}
