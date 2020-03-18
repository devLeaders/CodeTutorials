export const videoResize = (videoContainerRef: any, isClicked: any) => {
  if (isClicked) {
    videoContainerRef.current.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
