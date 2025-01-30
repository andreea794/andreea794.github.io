import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";
import MainAppBar from "./MainAppbar";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
      }}
    >
      <MainAppBar />
      <ScrollRestoration />

      <Box component="main" sx={{ py: 2 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
