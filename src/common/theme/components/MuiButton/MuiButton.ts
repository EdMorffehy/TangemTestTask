import { Components } from "@mui/material/styles/components";

const MuiButton: Components["MuiButton"] = {
  variants: [
    {
      props: { variant: "tangem-light" },
      style: {
        backgroundColor: "#FFF",
        borderRadius: "14px",
        backdropFilter: "blur(12px)",
        color: "#0B0B0B",
        textShadow: "0px 0px 30px rgba(102, 204, 255, 0.20)",
        fontWeight: 500,
        padding: "10px 19px",
        lineHeight: "110%",
        "&:hover": {
          backgroundColor: "#FFF",
          boxShadow: "inset 0 0 2px 0 rgb(0, 0, 0)"
        }
      }
    }
  ]
};

export default MuiButton;
