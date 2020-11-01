export enum EAnimation {
  Jiggle = "a-jiggle--keyframes",
  Ripple = "a-ripple",
  RevealOpacity = "a-reveal-opacity",
  RevealSlide = "a-reveal-slide",
  Tata = "a-tata",
}

export enum EColor {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
  Success = "success",
  Info = "info",
  Warn = "warn",
  Danger = "danger",
  Disabled = "disabled",
  NeutralPrimary = "neutral-primary",
  NeutralSecondary = "neutral-secondary",
  NeutralAccent = "neutral-accent",
}

export const componentColor = (componentType: string) => (componentColor: EColor) => `c-${componentType}--${componentColor}`;

export enum EDecoration {
  Discrete = 'u-shadow--discrete',
  DiscreteBottom = 'u-shadow--discrete-bottom',
  Elevated = 'u-shadow--elevated',
  ElevatedBottom = 'u-shadow--elevated-bottom',
  Sunken = 'u-shadow--sunken',
  Dreamy = 'u-shadow--dreamy',
  DreamyExtra = 'u-shadow--dreamy-extra',
  Smooth = 'u-shadow--smooth',
  FX1 = 'u-shadow--custom-fx1',
  FX2 = 'u-shadow--custom-fx2',
}

export enum EDisabled {
  Events = 'u-ux--disabled',
  Pointer = 'u-ui--disabled',
}

export enum ESize {
  Tiny = 'tiny',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Huge = 'huge',
}

export const componentSize = (componentType: string) =>
  (componentSize: ESize) => `c-${componentType}--${componentSize}`;

export type TBehavior =
  | EAnimation
  | EColor
  | EDecoration
  | EDisabled
  | ESize;

export interface IBehaviorProps {
  animation?: EAnimation;
  color?: EColor;
  decoration?: EDecoration;
  size?: ESize;
  disabled?: EDisabled;
}

