import { handleRef } from "./handleRef";

export const togglePlay = (isPaused: boolean, isMinimized: boolean) => {
  const { video } = handleRef(isMinimized);

  if (video) {
    return isPaused ? video.play() : video.pause();
  }
};
