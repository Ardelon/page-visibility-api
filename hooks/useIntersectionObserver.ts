"use client";

import { useEffect, useMemo, useState } from "react";
import { useMounted } from "./useMounted";

export function useIsIntersecting(ref: Element | null) {
  const isMounted = useMounted();
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
  }, [observer, ref, isMounted]);

  return isIntersecting;
}
