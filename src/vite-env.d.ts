/// <reference types="vite/client" />

import { FC, ReactNode } from "react";

declare global {
  type FCC<PROPS = object> = FC<{ children?: ReactNode } & PROPS>;
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    xsm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
  interface PaletteColor {
    yellow?: string;
  }

  interface SimplePaletteColorOptions {
    yellow?: string;
  }

  interface Palette {
    tangem: Palette["primary"];
  }

  interface PaletteOptions {
    tangem?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "tangem-light": true;
  }
}
