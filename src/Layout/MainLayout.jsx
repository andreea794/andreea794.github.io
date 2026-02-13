import { Box } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router";
import { neutral } from "../theme/colors";
import Footer from "./Footer";
import MainAppBar from "./MainAppbar";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: neutral.background,
      }}
    >
      <MainAppBar />
      <ScrollRestoration />

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
