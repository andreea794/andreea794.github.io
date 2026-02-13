/**
 * MUI Theme Configuration
 * Combines all design tokens into a unified theme
 */
import { createTheme } from "@mui/material/styles";
import { brand, neutral, semantic, text } from "./colors";
import { typographyVariants } from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: brand.primary,
      dark: brand.primaryDark,
      light: brand.primaryLight,
      contrastText: neutral.background,
    },
    secondary: {
      main: neutral.surfaceLight,
      dark: neutral.surface,
      light: neutral.borderLight,
    },
    background: {
      default: neutral.background,
      paper: neutral.surface,
    },
    text: {
      primary: text.primary,
      secondary: text.secondary,
      disabled: text.disabled,
    },
    error: {
      main: semantic.error,
    },
    warning: {
      main: semantic.warning,
    },
    info: {
      main: semantic.info,
    },
    success: {
      main: semantic.success,
    },
    divider: neutral.border,
  },
  typography: typographyVariants,
  shape: {
    borderRadius: 12,
  },
  spacing: 8, // Base spacing unit (8px)
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: neutral.background,
          color: text.primary,
        },
        "::selection": {
          backgroundColor: brand.primary,
          color: neutral.background,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          textTransform: "none",
          fontWeight: 500,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: `0 8px 30px ${brand.primaryLight}`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.02)",
          border: `1px solid ${neutral.border}`,
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "& fieldset": {
              borderColor: neutral.borderLight,
            },
            "&:hover fieldset": {
              borderColor: brand.primaryLight,
            },
            "&.Mui-focused fieldset": {
              borderColor: brand.primary,
            },
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "eyebrow" },
          style: typographyVariants.eyebrow,
        },
        {
          props: { variant: "lead" },
          style: typographyVariants.lead,
        },
        {
          props: { variant: "bodySmall" },
          style: typographyVariants.bodySmall,
        },
      ],
    },
  },
});

// Re-export colors and typography for use throughout the app
export { brand, neutral, semantic, text } from "./colors";
export {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "./typography";

export default theme;
