import { Description as CVIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.svg";
import { brand, neutral, text } from "../theme/colors";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#case-studies" },
  { label: "About me", href: "#about-me" },
  { label: "Contact", href: "#contact" },
];

export default function MainAppbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef([]);
  const menuRef = useRef(null);
  const clickTargetRef = useRef(null);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    clickTargetRef.current = href;
    setActiveSection(href);
    window.history.pushState(null, "", href);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Clear click target after scroll animation completes
    setTimeout(() => {
      clickTargetRef.current = null;
    }, 1000);
  };

  const updateUnderlinePosition = useCallback(() => {
    const activeIndex = navItems.findIndex(
      (item) => item.href === activeSection,
    );
    if (activeIndex !== -1 && navRefs.current[activeIndex] && menuRef.current) {
      const activeEl = navRefs.current[activeIndex];
      const menuEl = menuRef.current;
      const menuRect = menuEl.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      setUnderlineStyle({
        left: activeRect.left - menuRect.left + activeRect.width / 2 - 10,
        width: 20,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    updateUnderlinePosition();
    window.addEventListener("resize", updateUnderlinePosition);
    return () => window.removeEventListener("resize", updateUnderlinePosition);
  }, [updateUnderlinePosition]);

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll detection while navigating to a clicked target
      if (clickTargetRef.current) return;

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navbar Container */}
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 28,
          left: 0,
          right: 0,
          zIndex: 1100,
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
          }}
        >
          {/* Logo - 56x56 */}
          <Box
            component="a"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "rotate(360deg)",
              },
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Andreea Bacanu"
              sx={{
                width: 56,
                height: 56,
              }}
            />
          </Box>

          {/* Floating Menu - 56px height */}
          <Stack
            ref={menuRef}
            direction="row"
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" },
              position: "relative",
              height: 56,
              background: neutral.surfaceGlass,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "100px",
              border: `1px solid ${neutral.borderDark}`,
              px: 1,
              gap: 0.5,
            }}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              return (
                <Box
                  key={item.label}
                  ref={(el) => (navRefs.current[index] = el)}
                  component="a"
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                    py: 1,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    "&:hover .nav-text": {
                      color: text.primary,
                    },
                  }}
                >
                  <Typography
                    className="nav-text"
                    sx={{
                      color: isActive ? text.primary : text.nav,
                      fontSize: "16px",
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: isActive ? 700 : 400,
                      lineHeight: "150%",
                      whiteSpace: "nowrap",
                      transition: "color 0.2s ease, font-weight 0.2s ease",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
            {/* Traveling green underline */}
            <Box
              sx={{
                position: "absolute",
                bottom: 8,
                left: underlineStyle.left,
                width: underlineStyle.width,
                height: 3,
                borderRadius: "100px",
                background: brand.primary,
                transition:
                  "left 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: "none",
              }}
            />
          </Stack>

          {/* CV Button - 56x56 */}
          <Box
            component="a"
            href="/cv"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "100px",
              background: neutral.surfaceGlass,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: `1px solid ${brand.primary}`,
              textDecoration: "none",
              transition: "all 0.5s ease",
              color: brand.primary,
              "&:hover": {
                background: brand.primarySubtle,
                transform: "rotate(360deg)",
              },
            }}
          >
            <CVIcon sx={{ fontSize: 24 }} />
          </Box>

          {/* Mobile: Logo + Menu Button */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              display: { xs: "flex", md: "none" },
              background: neutral.surfaceGlass,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "100px",
              border: `1px solid ${neutral.borderDark}`,
              px: 1.5,
              py: 0.5,
            }}
          >
            <Box
              component="a"
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Andreea Bacanu"
                sx={{ height: 40, width: 40 }}
              />
            </Box>
            <IconButton
              sx={{
                color: text.secondary,
                p: 1,
              }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            background: neutral.surface,
            backdropFilter: "blur(20px)",
            width: 280,
            borderLeft: `1px solid ${neutral.border}`,
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component="img"
            src={Logo}
            alt="Andreea Bacanu"
            sx={{ height: 28, mb: 4 }}
          />
        </Box>
        <List>
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <ListItemButton
                key={item.label}
                component="a"
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setMobileOpen(false);
                }}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderLeft: isActive
                    ? `3px solid ${brand.primary}`
                    : "3px solid transparent",
                  "&:hover": {
                    background: brand.primaryMuted,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      color: isActive ? text.primary : text.secondary,
                      fontSize: "16px",
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: isActive ? 700 : 400,
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
