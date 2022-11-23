import { MutableRefObject, useEffect, useMemo, useState } from "react";

export const useIntersectionObserver = (ref: MutableRefObject<null>): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      setIsIntersecting(entries.isIntersecting);
    });

    ref.current && observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};
