import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: 34,
  bottom: 34,
  [theme.breakpoints.down("lg")]: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "17px",
    right: 17,
    bottom: 17
  },
  [theme.breakpoints.down("xsm")]: {
    paddingLeft: 0,
    right: 0,
    bottom: 10
  },
  "&.open": {
    animation: `$opening 300ms ${theme.transitions.easing.easeInOut}`
  },
  "&.close": {
    animation: `$closing 300ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    transform: "translateY(200%)"
  },
  "@keyframes opening": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
      transform: "translateY(0)"
    },
    "100%": {
      opacity: 0,
      transform: "translateY(200%)"
    }
  }
}));

export const CloseIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 15,
  right: 15,
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    top: 10,
    right: 10
  }
}));
