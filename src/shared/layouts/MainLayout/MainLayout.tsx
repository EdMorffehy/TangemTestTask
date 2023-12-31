import { FC, useEffect, useState } from "react";
import { Container, ContainerProps } from "@mui/material";

import { useWindowScroll } from "@hooks";
import { getLocalStorage, setLocalStorage } from "@services";

import Notification from "../../dialogs/Notification";
import StorageKeysEnum from "../../enum/storageKeys";

const MainLayout: FC<ContainerProps> = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isOut = useWindowScroll(60);

  const handleOnCloseNotice = (): void => {
    setLocalStorage(StorageKeysEnum.NOTICE, 1);
    setIsOpen(false);
  };

  useEffect(() => {
    const isNoticeOpen = getLocalStorage<1 | 0>(StorageKeysEnum.NOTICE);
    setIsOpen(isOut && !isNoticeOpen);
  }, [isOut]);

  return (
    <Container {...props} style={{ minHeight: "200vh" }}>
      <Notification isOpen={isOpen} onClose={handleOnCloseNotice} />
    </Container>
  );
};

export default MainLayout;
