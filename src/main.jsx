import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage.jsx";
import theme from "./theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <CssBaseline />
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
);
