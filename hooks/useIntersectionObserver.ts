"use client";

import { isClient } from "@/utility/rendering";
import { useEffect, useMemo, useState } from "react";

export function useIsIntersecting(ref: Element | null) {
  const isMounted = isClient();
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(() => {
    if (!isMounted) return;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    return new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
  }, [isMounted]);

  useEffect(() => {
    if (ref && observer) {
      observer.observe(ref);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
}
