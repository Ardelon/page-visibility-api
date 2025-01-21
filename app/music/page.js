"use client";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";
import usePageVisibility from "../../hooks/pageVisibilityHook.js";
export default function Music() {
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

  return (
    <div className="video">
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
