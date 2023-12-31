import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import theme from "@common/theme";

import App from "./root";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
