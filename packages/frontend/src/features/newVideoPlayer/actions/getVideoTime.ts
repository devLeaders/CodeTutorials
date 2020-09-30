import { handleRef } from "./handleRef";

export const getVideoTime = (isMinimized: boolean, videoTime: number) => {
  const { video } = handleRef(isMinimized);
  let time: number = videoTime;
  if (video) {
    time = video.currentTime;
  }
  return time;
};
