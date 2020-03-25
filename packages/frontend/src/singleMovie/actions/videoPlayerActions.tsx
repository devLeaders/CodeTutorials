export const playPauseVideo = (video: HTMLVideoElement, isPaused: boolean) => {
    if (isPaused) {
        video.play();
    } else {
        video.pause();
    }
};

export const videoResize = (videoContainer: HTMLDivElement, isFullscreen: boolean) => {
    if (!isFullscreen) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};

export const rewindVideoTime = (video: HTMLVideoElement, timeskip: number, setVideoTime: (num: number) => void) => {
    video.currentTime += timeskip;
    setVideoTime((video.currentTime / video.duration) * 100);
}


