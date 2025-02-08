"use client";

import { useIsIntersecting } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";

function RandomBlock() {
  const ref = useRef(null);
  const [counter, setCounter] = useState<number>(0);
  const isIntersecting = useIsIntersecting(ref.current);

  useEffect(() => {
    if (isIntersecting) setCounter((counter) => counter + 1);
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        lineHeight: "200px",
        fontSize: "24px",
        position: "relative",
        background: `rgb(${Math.max(240 - counter * 5)}, ${Math.max(
          248 - counter * 5
        )},${Math.max(255 - counter * 5)} )`,
        color: `${counter > 25 ? "white" : "black"}`,
      }}
      className="palette-div"
    >
      {counter}
    </div>
  );
}

export default RandomBlock;
