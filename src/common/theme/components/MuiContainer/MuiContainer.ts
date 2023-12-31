import { Components } from "@mui/material/styles/components";
import { createTheme } from "@mui/material";

const MuiContainer: Components["MuiContainer"] = {
  styleOverrides: {
    root: {
      paddingInline: 0,
      [createTheme({}).breakpoints.up("md")]: {
        paddingInline: "34px",
        maxWidth: "none"
      },
      [createTheme({}).breakpoints.between("sm", "md")]: {
        paddingInline: "17px"
      }
    }
  }
};

export default MuiContainer;
