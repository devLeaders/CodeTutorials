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

// const handleProgressBarClick = (e: any) => {
//     changeVideoTimeOnClick(e)
// }

// const changeVideoTimeOnClick = (e: any, video:any) => {
//     const video = videoRef.current;
//     const progressBarPosition = e.nativeEvent.offsetX;
//     const TimeBarWidth = TimeBarRef.current.offsetWidth;
//     const newTime = (progressBarPosition / TimeBarWidth) * video.duration;
//     video.currentTime = newTime;
//     setVideoTime((video.currentTime / video.duration) * 100);
// };
