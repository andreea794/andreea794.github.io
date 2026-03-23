/**
 * Color Design Tokens
 * Values are imported from the generated token file — edit tokens.json instead.
 */
import {
  colorBrandGreen500,
  colorBrandGreen600,
  colorBrandGreenAlpha8,
  colorBrandGreenAlpha10,
  colorBrandGreenAlpha15,
  colorBrandGreenAlpha20,
  colorBrandGreenAlpha25,
  colorBrandGreenAlpha30,
  colorNeutralWhite,
  colorNeutralBlack,
  colorSemanticBgDefault,
  colorSemanticBgSurface,
  colorSemanticBgSurfaceLight,
  colorSemanticBgSurfaceGlass,
  colorSemanticBgSurfaceDark,
  colorSemanticBgSurfaceSubtle,
  colorSemanticBgSurfaceHover,
  colorSemanticBorderDefault,
  colorSemanticBorderLight,
  colorSemanticBorderMedium,
  colorSemanticBorderHover,
  colorSemanticBorderDark,
  colorSemanticShadowDefault,
  colorSemanticTextPrimary,
  colorSemanticTextSecondary,
  colorSemanticTextTertiary,
  colorSemanticTextMuted,
  colorSemanticTextDisabled,
  colorSemanticTextNav,
  colorSemanticStatusSuccess,
  colorSemanticStatusError,
  colorSemanticStatusWarning,
  colorSemanticStatusInfo,
} from "../styles/tokens/tokens.js";

// Brand Colors
export const brand = {
  primary:            colorBrandGreen500,
  primaryDark:        colorBrandGreen600,
  primaryMuted:       colorBrandGreenAlpha8,
  primarySubtle:      colorBrandGreenAlpha10,
  primaryLight:       colorBrandGreenAlpha15,
  primaryBorder:      colorBrandGreenAlpha20,
  primaryBorderLight: colorBrandGreenAlpha15,
  primaryFaded:       colorBrandGreenAlpha25,
  primaryBorderMedium:colorBrandGreenAlpha30,
  // Gradient has no token equivalent — kept as-is
  glow: `radial-gradient(circle, ${colorBrandGreenAlpha15} 0%, ${colorBrandGreenAlpha8.replace(/[\d.]+\)$/, "0)")} 70%)`,
};

// Neutral / Surface Colors
export const neutral = {
  white:         colorNeutralWhite,
  black:         colorNeutralBlack,
  background:    colorSemanticBgDefault,
  surface:       colorSemanticBgSurface,
  surfaceLight:  colorSemanticBgSurfaceLight,
  surfaceGlass:  colorSemanticBgSurfaceGlass,
  surfaceDark:   colorSemanticBgSurfaceDark,
  surfaceSubtle: colorSemanticBgSurfaceSubtle,
  surfaceHover:  colorSemanticBgSurfaceHover,
  border:        colorSemanticBorderDefault,
  borderLight:   colorSemanticBorderLight,
  borderMedium:  colorSemanticBorderMedium,
  borderHover:   colorSemanticBorderHover,
  borderDark:    colorSemanticBorderDark,
  shadow:        colorSemanticShadowDefault,
};

// Text Colors
export const text = {
  primary:  colorSemanticTextPrimary,
  secondary:colorSemanticTextSecondary,
  tertiary: colorSemanticTextTertiary,
  muted:    colorSemanticTextMuted,
  disabled: colorSemanticTextDisabled,
  nav:      colorSemanticTextNav,
};

// Semantic Status Colors
export const semantic = {
  success: colorSemanticStatusSuccess,
  error:   colorSemanticStatusError,
  warning: colorSemanticStatusWarning,
  info:    colorSemanticStatusInfo,
};

const colors = { brand, neutral, text, semantic };
export default colors;
