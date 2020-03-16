import * as React from "react";

import { ButtonTypes } from "../enums";

const toggleonClick = (
  isClicked: boolean,
  setIsClicked: any,
  videoRef: any,
  type: string,
  isPaused?: any,
  setIsPaused?: any
) => {
  const video = videoRef.current;
  if (type === ButtonTypes.PLAY) {
    startStopVideo(video, isPaused, setIsPaused);
  } else if (type === ButtonTypes.MUTE) {
    video.muted = isClicked;
  } else if (type === ButtonTypes.FULLSCREEN) {
  }
  setIsClicked(!isClicked);
};

const startStopVideo = (video: any, isPaused: boolean, setIsPaused: any) => {
  if (isPaused) {
    video.play();
  } else {
    video.pause();
  }
  setIsPaused(!isPaused);
};

export default toggleonClick;
