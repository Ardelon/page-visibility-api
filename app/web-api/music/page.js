"use client";
import { useLayoutEffect, useRef, useState } from "react";
import usePageVisibility from "../../../hooks/pageVisibilityHook.js";
import { isClient } from "@/utility/rendering.ts";
function Music() {
  const mounted = isClient();

  const audioRef = useRef();

  const [playOnHide, setPlayOnHide] = useState(false);
  const isDocumentVisible = usePageVisibility();

  const changePlayOnHide = () => {
    setPlayOnHide((state) => !state);
  };
  useLayoutEffect(() => {
    if (isDocumentVisible) {
      audioRef.current.play();
    } else {
      if (!playOnHide) {
        audioRef.current.pause();
      }
    }
  }, [isDocumentVisible, playOnHide]);
  if (!mounted) return null;
  return (
    <div className="page-position">
      <h2>Music Page</h2>
      <audio
        ref={audioRef}
        controls
        src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"
      ></audio>
      <div className="music-div">
        <label>Play while not visible</label>
        <input
          className="input"
          type="checkbox"
          checked={playOnHide}
          onChange={changePlayOnHide}
        />
      </div>
    </div>
  );
}

export default Music;
