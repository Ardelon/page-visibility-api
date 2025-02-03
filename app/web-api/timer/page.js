"use client";

import usePageVisibility from "@/hooks/pageVisibilityHook";
import { useMounted } from "@/hooks/useMounted";
import { useEffect, useRef, useState } from "react";

function Timer() {
  const mounted = useMounted();
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

  if (!mounted) return null;

  return (
    <div className="page-position">
      <h2>Timer Page</h2>
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

export default Timer;
