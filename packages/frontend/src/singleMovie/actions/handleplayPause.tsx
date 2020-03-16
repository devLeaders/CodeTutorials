import * as React from "react";

const togglePlayPause = (
  isPaused: boolean,
  setIsPaused: any,
  videoRef: any
) => {
  const video = videoRef.current;
  if (isPaused) {
    video.play();
  } else {
    video.pause();
  }
  setIsPaused(!isPaused);
};

export default togglePlayPause;
