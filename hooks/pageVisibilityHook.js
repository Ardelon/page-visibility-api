"use client";
import { isClient } from "@/utility/rendering";
import { useState, useEffect } from "react";

function usePageVisibility() {
  const mounted = isClient();
  if (!mounted) return "non-visible";
  const [isVisible, setIsVisible] = useState(!document.hidden);

  useEffect(() => {
    function handleVisibilityChange() {
      setIsVisible(document.visibilityState === "visible");
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isVisible;
}
export default usePageVisibility;
