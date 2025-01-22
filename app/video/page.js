"use client";

import usePageVisibility from "@/hooks/pageVisibilityHook";
import { useMounted } from "@/hooks/useMounted";
import { useEffect, useRef } from "react";

function Video() {
  const mounted = useMounted();

  const videoRef = useRef(null);
  const isDocumentVisible = usePageVisibility();

  useEffect(() => {
    if (isDocumentVisible) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isDocumentVisible]);
  if (!mounted) return null;
  return (
    <div className="video">
      <video
        controls
        loop
        ref={videoRef}
        autoPlay
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      ></video>
    </div>
  );
}

export default Video;
