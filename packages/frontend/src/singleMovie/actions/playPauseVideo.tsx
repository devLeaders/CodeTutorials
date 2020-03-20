export const playPauseVideo = (video: any, isPaused: boolean) => {
  if (isPaused) {
    video.play();
  } else {
    video.pause();
  }
};
