/**
 * Color Design Tokens
 * Central place for all color definitions used across the application
 */

// Brand Colors
export const brand = {
  primary: "#29D48C",
  primaryDark: "#1fb876",
  primaryLight: "rgba(41, 212, 140, 0.15)",
  primaryMuted: "rgba(41, 212, 140, 0.08)",
  primarySubtle: "rgba(41, 212, 140, 0.1)",
  primaryBorder: "rgba(41, 212, 140, 0.2)",
  primaryBorderLight: "rgba(41, 212, 140, 0.15)",
  primaryBorderMedium: "rgba(41, 212, 140, 0.3)",
  primaryFaded: "rgba(41, 212, 140, 0.25)",
  glow: "radial-gradient(circle, rgba(41, 212, 140, 0.15) 0%, rgba(41, 212, 140, 0) 70%)",
};

// Neutral Colors
export const neutral = {
  white: "#FFFFFF",
  black: "#000000",
  background: "#0c0c0c",
  surface: "#121212",
  surfaceLight: "#171717",
  surfaceGlass: "rgba(23, 23, 23, 0.6)",
  surfaceDark: "rgba(18, 18, 18, 0.95)",
  surfaceSubtle: "rgba(255, 255, 255, 0.02)",
  surfaceHover: "rgba(255, 255, 255, 0.04)",
  border: "rgba(255, 255, 255, 0.06)",
  borderLight: "rgba(255, 255, 255, 0.1)",
  borderMedium: "rgba(255, 255, 255, 0.12)",
  borderHover: "rgba(255, 255, 255, 0.3)",
  borderDark: "rgb(38, 38, 38)",
  shadow: "rgba(0, 0, 0, 0.3)",
};

// Text Colors (for dark backgrounds)
export const text = {
  primary: "#F0F0F0", // Off-white for headings and titles
  secondary: "rgba(255, 255, 255, 0.75)", // Body text color
  tertiary: "rgba(255, 255, 255, 0.5)",
  muted: "rgba(255, 255, 255, 0.4)",
  disabled: "rgba(255, 255, 255, 0.35)",
  nav: "rgb(204, 204, 204)", // Nav menu default text
};

// Semantic Colors
export const semantic = {
  success: "#29D48C",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
};

// Export all colors as a single object for convenience
const colors = {
  brand,
  neutral,
  text,
  semantic,
};

export default colors;
