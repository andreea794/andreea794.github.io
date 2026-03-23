/**
 * Typography Design Tokens
 * Values are imported from the generated token file — edit tokens.json instead.
 */
import {
  typographyFontFamilyPrimary,
  typographyFontFamilyMono,
  typographyFontWeightLight,
  typographyFontWeightRegular,
  typographyFontWeightMedium,
  typographyFontWeightSemiBold,
  typographyFontWeightBold,
  typographyFontSizeXs,
  typographyFontSizeSm,
  typographyFontSizeBase,
  typographyFontSizeMd,
  typographyFontSizeLg,
  typographyFontSizeXl,
  typographyFontSize2xl,
  typographyFontSize3xl,
  typographyFontSize4xl,
  typographyFontSize5xl,
  typographyLineHeightTight,
  typographyLineHeightSnug,
  typographyLineHeightNormal,
  typographyLineHeightRelaxed,
  typographyLineHeightLoose,
  typographyLetterSpacingTight,
  typographyLetterSpacingNormal,
  typographyLetterSpacingWide,
  typographyLetterSpacingWider,
  typographyLetterSpacingWidest,
} from "../styles/tokens/tokens.js";

// Font Families
export const fontFamily = {
  primary: typographyFontFamilyPrimary,
  mono:    typographyFontFamilyMono,
};

// Font Weights — tokens are strings, MUI needs numbers
export const fontWeight = {
  light:    Number(typographyFontWeightLight),
  regular:  Number(typographyFontWeightRegular),
  medium:   Number(typographyFontWeightMedium),
  semiBold: Number(typographyFontWeightSemiBold),
  bold:     Number(typographyFontWeightBold),
};

// Font Sizes — px values from tokens, used directly in MUI theme
export const fontSize = {
  xs:   typographyFontSizeXs,   // 12px
  sm:   typographyFontSizeSm,   // 14px
  base: typographyFontSizeBase, // 16px
  md:   typographyFontSizeMd,   // 18px
  lg:   typographyFontSizeLg,   // 20px
  xl:   typographyFontSizeXl,   // 24px
  "2xl":typographyFontSize2xl,  // 30px
  "3xl":typographyFontSize3xl,  // 36px
  "4xl":typographyFontSize4xl,  // 48px
  "5xl":typographyFontSize5xl,  // 60px
};

// Line Heights — tokens are strings, MUI needs numbers
export const lineHeight = {
  tight:   Number(typographyLineHeightTight),
  snug:    Number(typographyLineHeightSnug),
  normal:  Number(typographyLineHeightNormal),
  relaxed: Number(typographyLineHeightRelaxed),
  loose:   Number(typographyLineHeightLoose),
};

// Letter Spacing
export const letterSpacing = {
  tight:   typographyLetterSpacingTight,
  normal:  typographyLetterSpacingNormal,
  wide:    typographyLetterSpacingWide,
  wider:   typographyLetterSpacingWider,
  widest:  typographyLetterSpacingWidest,
};

// MUI Typography Variants Configuration
export const typographyVariants = {
  fontFamily: fontFamily.primary,
  fontSize: 16,
  htmlFontSize: 16,
  h1: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.semiBold,
    fontSize:      "3.5rem",   // 56px — intentional display size, no exact token
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.medium,
    fontSize:      "2.4rem",   // 38px — intentional heading size, no exact token
    lineHeight:    lineHeight.snug,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.semiBold,
    fontSize:      "2rem",     // 32px — intentional, no exact token
    lineHeight:    lineHeight.snug,
  },
  h4: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.medium,
    fontSize:      fontSize.xl,  // 24px → token xl
    lineHeight:    lineHeight.snug,
  },
  h5: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.medium,
    fontSize:      fontSize.lg,  // 20px → token lg
    lineHeight:    lineHeight.normal,
  },
  h6: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.semiBold,
    fontSize:      fontSize.md,  // 18px → token md
    lineHeight:    lineHeight.normal,
  },
  subtitle1: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.semiBold,
    fontSize:      fontSize.base, // 16px → token base
    lineHeight:    lineHeight.normal,
  },
  subtitle2: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.medium,
    fontSize:      "0.9rem",   // 14.4px — intentional between sm and base
    lineHeight:    lineHeight.normal,
  },
  lead: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.regular,
    fontSize:      fontSize.md,  // 18px → token md
    lineHeight:    lineHeight.relaxed,
  },
  body1: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.regular,
    fontSize:      fontSize.base, // 16px → token base
    lineHeight:    lineHeight.relaxed,
  },
  body2: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.regular,
    fontSize:      fontSize.sm,  // 14px → token sm
    lineHeight:    lineHeight.relaxed,
  },
  bodySmall: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.regular,
    fontSize:      "0.85rem",  // ~13.6px — intentional tight size
    lineHeight:    lineHeight.relaxed,
  },
  button: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.medium,
    fontSize:      fontSize.base, // 16px → token base
    lineHeight:    lineHeight.normal,
    textTransform: "none",
  },
  caption: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.regular,
    fontSize:      "0.8rem",   // 12.8px — intentional
    lineHeight:    lineHeight.normal,
  },
  overline: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.medium,
    fontSize:      fontSize.xs,  // 12px → token xs
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.widest,
    textTransform: "uppercase",
  },
  eyebrow: {
    fontFamily:    fontFamily.primary,
    fontWeight:    fontWeight.regular,
    fontSize:      fontSize.base, // 16px → token base
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.widest,
    textTransform: "uppercase",
  },
};

const typography = { fontFamily, fontWeight, fontSize, lineHeight, letterSpacing, variants: typographyVariants };
export default typography;
