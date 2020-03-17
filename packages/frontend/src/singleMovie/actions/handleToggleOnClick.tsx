import * as React from "react";

import { ButtonTypes } from "../enums";

const toggleonClick = (
  isClicked: boolean,
  setIsClicked: any,
  videoRef: any,
  videoContainerRef: any,
  type: string,
  isPaused?: any,
  setIsPaused?: any,
  isMinimized?: any,
  setIsMinimized?: any
) => {
  const video = videoRef.current;
  if (type === ButtonTypes.PLAY) {
    startStopVideo(video, isPaused, setIsPaused);
  } else if (type === ButtonTypes.MUTE) {
    video.muted = isClicked;
  } else if (type === ButtonTypes.FULLSCREEN) {
    videoResize(videoContainerRef, isClicked, setIsClicked);
  } else if (type === ButtonTypes.SMALL_MODE) {
    setIsMinimized(!isMinimized);
    console.log(isMinimized);
  }
  setIsClicked(!isClicked);
};

const videoResize = (
  videoContainerRef: any,
  isClicked: any,
  setIsClicked: any
) => {
  if (isClicked) {
    videoContainerRef.current.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
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
