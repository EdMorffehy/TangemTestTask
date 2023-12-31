import { FC } from "react";
import { Box, BoxProps } from "@mui/material";

import { AppHeaderContainer } from "../../containers";

const RootLayout: FC<BoxProps> = ({ children, ...props }) => (
  <Box {...props}>
    <AppHeaderContainer />
    {children}
  </Box>
);

export default RootLayout;
