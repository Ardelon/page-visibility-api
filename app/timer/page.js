"use client";

import usePageVisibility from "@/hooks/pageVisibilityHook";
import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const isDocumentVisible = usePageVisibility();
  const counterInterval = useRef(null);
  const timerInterval = useRef(null);

  useEffect(() => {
    if (isDocumentVisible) {
      counterInterval.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      timerInterval.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 100);
    } else {
      clearInterval(counterInterval.current);
      clearInterval(timerInterval.current);
    }
  }, [isDocumentVisible]);

  return (
    <div className="video">
      <div className="music-div">
        <label>Second Counter</label>
        <div>{counter}</div>
      </div>
      <div className="music-div">
        <label>10 ms Counter</label>
        <div>{timer}</div>
      </div>
    </div>
  );
}
