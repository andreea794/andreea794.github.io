/**
 * Typography Design Tokens
 * Central place for all typography definitions
 */

// Font Families
export const fontFamily = {
  primary: '"Poppins", "Helvetica", "Arial", sans-serif',
  mono: '"Fira Code", "Consolas", monospace',
};

// Font Weights
export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

// Font Sizes (in rem for accessibility)
export const fontSize = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  md: "1.125rem", // 18px
  lg: "1.25rem", // 20px
  xl: "1.5rem", // 24px
  "2xl": "1.875rem", // 30px
  "3xl": "2.25rem", // 36px
  "4xl": "3rem", // 48px
  "5xl": "3.75rem", // 60px
};

// Line Heights
export const lineHeight = {
  tight: 1.15,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.7,
  loose: 2,
};

// Letter Spacing
export const letterSpacing = {
  tight: "-0.02em",
  normal: "0",
  wide: "0.05em",
  wider: "0.1em",
  widest: "0.15em",
};

// MUI Typography Variants Configuration
export const typographyVariants = {
  fontFamily: fontFamily.primary,
  fontSize: 16, // Base font size in pixels
  htmlFontSize: 16,
  h1: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semiBold,
    fontSize: "3.5rem",
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontSize: "2.4rem",
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semiBold,
    fontSize: "2rem",
    lineHeight: lineHeight.snug,
  },
  h4: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontSize: "1.5rem",
    lineHeight: lineHeight.snug,
  },
  h5: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontSize: "1.25rem",
    lineHeight: lineHeight.normal,
  },
  h6: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semiBold,
    fontSize: "1.125rem", // 18px
    lineHeight: lineHeight.normal,
  },
  subtitle1: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semiBold,
    fontSize: "1rem", // 16px - for card titles, names
    lineHeight: lineHeight.normal,
  },
  subtitle2: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontSize: "0.9rem", // 14.4px - for secondary names/labels
    lineHeight: lineHeight.normal,
  },
  // Lead text - larger body text for hero intros (18px)
  lead: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: "1.125rem", // 18px
    lineHeight: lineHeight.relaxed,
  },
  body1: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: "1rem", // 16px
    lineHeight: lineHeight.relaxed,
  },
  body2: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: "0.875rem", // 14px
    lineHeight: lineHeight.relaxed,
  },
  // Small body text for descriptions
  bodySmall: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: "0.85rem", // ~13.6px
    lineHeight: lineHeight.relaxed,
  },
  button: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontSize: "1rem", // 16px
    lineHeight: lineHeight.normal,
    textTransform: "none",
  },
  caption: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: "0.8rem", // 12.8px
    lineHeight: lineHeight.normal,
  },
  overline: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontSize: "0.75rem",
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.widest,
    textTransform: "uppercase",
  },
  // Eyebrow text - uppercase label above section titles (16px)
  eyebrow: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.regular,
    fontSize: "1rem", // 16px
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.widest,
    textTransform: "uppercase",
  },
};

const typography = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  variants: typographyVariants,
};

export default typography;
