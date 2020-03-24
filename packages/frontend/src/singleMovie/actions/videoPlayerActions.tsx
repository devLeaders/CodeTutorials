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

export const rewindVideoTime = (video: any, timeskip: number, setVideoTime: any) => {
    video.currentTime += timeskip;
    setVideoTime((video.currentTime / video.duration) * 100);
}



// export const handleVideoShortcuts = (e: any, rewindSeconds:number, isPaused:boolean) => {
//     const keyNumber = e.keyCode
//     if (keyNumber == 32) {
//       e.preventDefault()

//     } else if (keyNumber == 37 && !isPaused) {
//       setTime(-rewindSeconds)
//     }
//     else if (keyNumber == 39 && timeToEnd > timeskip) {
//       if (isPaused) {
//         props.play();
//         playPauseVideo(videoRef.current, isPaused)
//       }
//       setTime(rewindSeconds)
//     }
//   }

//   const video = refsStore.Refs[0].current;
//     const timeToEnd = video.duration - video.currentTime;
//     const keyNumber = e.keyCode
// const keyNumber = e.keyCode
// console.log(timeToEnd)