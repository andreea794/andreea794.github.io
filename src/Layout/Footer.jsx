import { Email, GitHub, KeyboardArrowUp, LinkedIn } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { brand, neutral, text } from "../theme/colors";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: neutral.background,
        borderTop: `1px solid ${neutral.border}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{
              color: text.muted,
              fontSize: "0.8rem",
            }}
          >
            © Andreea Bacanu {new Date().getFullYear()} All Rights Reserved
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://www.linkedin.com/in/aebacanu"
              target="_blank"
              size="small"
              sx={{
                color: text.muted,
                "&:hover": { color: brand.primary },
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton
              href="mailto:andreeaelena794@gmail.com"
              size="small"
              sx={{
                color: text.muted,
                "&:hover": { color: brand.primary },
              }}
            >
              <Email fontSize="small" />
            </IconButton>
            <IconButton
              href="https://www.github.com/andreea794"
              target="_blank"
              size="small"
              sx={{
                color: text.muted,
                "&:hover": { color: brand.primary },
              }}
            >
              <GitHub fontSize="small" />
            </IconButton>
          </Stack>

          <IconButton
            href="#home"
            size="small"
            sx={{
              color: text.muted,
              border: `1px solid ${neutral.borderLight}`,
              width: 36,
              height: 36,
              "&:hover": {
                borderColor: brand.primary,
                color: brand.primary,
                background: brand.primaryMuted,
              },
            }}
          >
            <KeyboardArrowUp fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
