import { useEffect, useState } from "react";

export const useCurrentHeight = (): number => {
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    setHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return height;
};
