import * as React from "react";

import { ButtonTypes } from "../enums";

const toggleonClick = (
  isClicked: boolean,
  setIsClicked: any,
  videoRef: any,
  type: string
) => {
  const video = videoRef.current;
  if (type === ButtonTypes.PLAY) {
    startStopVideo(video, isClicked);
  } else if (type === ButtonTypes.MUTE) {
    muteUnmuteVideo(video, isClicked);
  }
  setIsClicked(!isClicked);
};

const startStopVideo = (video: any, isClicked: boolean) => {
  if (isClicked) {
    video.play();
  } else {
    video.pause();
  }
};

const muteUnmuteVideo = (video: any, isClicked: boolean) => {
  video.muted = isClicked;
};

export default toggleonClick;
