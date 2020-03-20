export const videoResize = (videoContainerRef: any, isFullscreen: any) => {
  if (!isFullscreen) {
    videoContainerRef.current.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
