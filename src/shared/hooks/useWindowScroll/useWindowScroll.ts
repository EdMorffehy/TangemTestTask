import { useCallback, useEffect, useState } from "react";

const useWindowScroll = (currentOffset: number): boolean => {
  const [isOutOfOffset, setIsOutOfOffset] = useState<boolean>(false);

  const handleOnScroll = useCallback((): void => {
    setIsOutOfOffset(window.scrollY > currentOffset);
  }, [currentOffset]);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [handleOnScroll]);

  return isOutOfOffset;
};

export default useWindowScroll;
