"use client";

import usePageVisibility from "@/hooks/pageVisibilityHook";
import { isClient } from "@/utility/rendering";
import { useEffect, useRef } from "react";
import { clientData } from "./data";
import PageWelcoming from "@/components/units/PageWelcoming";

function Video() {
  const mounted = isClient();

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
    <div className="page-position">
      <PageWelcoming {...clientData} />
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
