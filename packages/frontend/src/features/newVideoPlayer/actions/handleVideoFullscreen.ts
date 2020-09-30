import { handleRef } from "./handleRef";

export const handleVideoFullscreen = (isFullscreen: boolean, isMinimized: boolean) => {
  const { videoContainer } = handleRef(isMinimized);

  if (videoContainer) {
    return !isFullscreen ? videoContainer.requestFullscreen() : document.exitFullscreen();
  }
};
