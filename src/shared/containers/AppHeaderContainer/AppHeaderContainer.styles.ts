import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "54px",
  paddingInline: theme.spacing(1),
  background: "linear-gradient(180deg, #101010 0%, #0B0B0B 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    paddingInline: theme.spacing(3)
  }
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down("md")]: {
    marginLeft: "-60px"
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-85px"
  }
}));
export const InfoContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.tangem.light,
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "& .yellow": {
    fontWeight: 600,
    color: theme.palette.tangem.yellow
  },
  [theme.breakpoints.down("sm")]: {
    gap: "4px"
  }
}));

export const Dots = styled(Box)(({ theme }) => ({
  width: "3px",
  height: "3px",
  borderRadius: "100%",
  background: theme.palette.tangem.light,
  opacity: 0.15
}));
