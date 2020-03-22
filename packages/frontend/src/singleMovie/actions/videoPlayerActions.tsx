export const playPauseVideo = (video: any, isPaused: boolean) => {
    if (isPaused) {
        video.play();
    } else {
        video.pause();
    }
};

export const videoResize = (videoContainer: any, isFullscreen: any) => {
    if (!isFullscreen) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};
