import { FC } from "react";
import { Box } from "@mui/material";

import noticeDesktopIcon from "@assets/notification-desktop.svg";
import noticeMobileIcon from "@assets/notification-mobile.svg";
import closeIcon from "@assets/close.svg";

import { CloseIcon, Container } from "./Notification.styles";

interface INotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Notification: FC<INotificationProps> = ({ isOpen, onClose }) => (
  <Container className={isOpen ? "open" : "close"}>
    <Box sx={{ display: { xs: "none", xsm: "block" }, height: { xs: "200px", md: "250px", lg: "auto" } }}>
      <img src={noticeDesktopIcon} alt='noticeDesktopIcon' />
      <CloseIcon onClick={onClose}>
        <img src={closeIcon} alt='closeIcon' />
      </CloseIcon>
    </Box>
    <Box width='100%' maxHeight={349} sx={{ display: { xs: "block", xsm: "none" } }}>
      <img src={noticeMobileIcon} alt='noticeMobileIcon' />
      <CloseIcon onClick={onClose}>
        <img src={closeIcon} alt='closeIcon' />
      </CloseIcon>
    </Box>
  </Container>
);

export default Notification;
