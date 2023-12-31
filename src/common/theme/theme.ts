import { createTheme } from "@mui/material";

import palette from "./palette";
import breakpoints from "./breakpoints";
import components from "./components";

const theme = createTheme({
  breakpoints,
  components,
  palette
});

export default theme;
