import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";

import headerImage from "@assets/display21 1.png";
import menuIcon from "@assets/menuicon.svg";

import { Container, Dots, ImageContainer, InfoContainer } from "./AppHeaderContainer.styles";

const AppHeaderContainer: FC = () => (
  <Container>
    <ImageContainer>
      <img src={headerImage} alt='sadadad' />
    </ImageContainer>
    <InfoContainer>
      <div>
        <Typography component='span' fontWeight={600}>
          Black Friday
        </Typography>
        <Typography component='span' sx={{ display: { xs: "none", lg: "inline-block" } }}>
          , 24-27 Nov
        </Typography>
      </div>
      <Dots sx={{ display: { xs: "none", md: "block" } }} />
      <Typography className='yellow'>10%OFF</Typography>
      <Dots sx={{ display: { xs: "none", md: "block" } }} />
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography component='span'>Use code&nbsp;</Typography>
        <Typography component='span' className='yellow'>
          10FRIDAY&nbsp;
        </Typography>
        <Typography component='span' sx={{ display: { xs: "none", lg: "inline-block" } }}>
          at checkout
        </Typography>
      </Box>
    </InfoContainer>
    <div>
      <Button variant='tangem-light' sx={{ display: { xs: "none", sm: "block" } }}>
        Shop now
      </Button>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <img src={menuIcon} alt='sadadad' />
      </Box>
    </div>
  </Container>
);

export default AppHeaderContainer;
