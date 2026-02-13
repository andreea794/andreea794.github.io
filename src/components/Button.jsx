import { Button as MuiButton } from "@mui/material";
import { brand, neutral } from "../theme/colors";

const baseStyles = {
  borderRadius: "100px",
  height: 56,
  px: 4,
  fontSize: "16px",
  fontWeight: 500,
  fontFamily: '"Poppins", sans-serif',
  textTransform: "none",
  boxShadow: "none",
  transition: "all 0.3s ease",
};

const variants = {
  primary: {
    background: brand.primary,
    color: neutral.background,
    border: "2px solid transparent",
    "&:hover": {
      background: brand.primaryDark,
      border: `2px solid ${neutral.borderHover}`,
      boxShadow: "none",
    },
  },
  secondary: {
    background: neutral.surfaceGlass,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    color: brand.primary,
    border: `1px solid ${brand.primary}`,
    "&:hover": {
      background: brand.primarySubtle,
      borderColor: brand.primary,
    },
  },
};

export default function Button({
  variant = "primary",
  children,
  fullWidth,
  href,
  ...props
}) {
  const handleClick = (e) => {
    // Handle smooth scrolling for anchor links
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <MuiButton
      variant={variant === "primary" ? "contained" : "outlined"}
      fullWidth={fullWidth}
      href={href}
      onClick={handleClick}
      sx={{
        ...baseStyles,
        ...variants[variant],
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
