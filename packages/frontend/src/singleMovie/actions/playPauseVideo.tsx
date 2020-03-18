export const playPauseVideo = (video: any, isPaused: boolean) => {
  console.log(video);
  if (isPaused) {
    video.play();
  } else {
    video.pause();
  }
};
