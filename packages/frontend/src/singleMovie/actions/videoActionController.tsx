import { refsStore } from "../components/videoPlayer/refs.store"
import { ButtonTypes } from "../enums";
import { playPauseVideo, videoResize, rewindVideoTime } from "./videoPlayerActions"
import { playPause, toogleFullscreen, toggleSmallMode } from "../../store/singleMovie/actions"
import { Ref, RefObject } from "react";

export const runVideoAction = (buttonType: string, videoState: boolean, reduxAction?: any) => {
  const video = refsStore.Refs[0].current;
  const videoContainer = refsStore.Refs[1].current;

  if (buttonType === ButtonTypes.PLAY) {
    //function that plays and pause video
    playPauseVideo(video, videoState);
  } else if (buttonType === ButtonTypes.MUTE) {
    video.muted = !videoState;
  } else if (buttonType === ButtonTypes.FULLSCREEN) {
    videoResize(videoContainer, videoState);
  }

  reduxAction()
};

export const changeVideoTime = (e: any, setVideoTime: any, TimeBarRef: any) => {
  const video = refsStore.Refs[0].current;
  const progressBarPosition = e.nativeEvent.offsetX;
  const TimeBarWidth = TimeBarRef.current.offsetWidth;
  const newTime = (progressBarPosition / TimeBarWidth) * video.duration;
  video.currentTime = newTime;
  setVideoTime((video.currentTime / video.duration) * 100);
}

export const handleVideoShortcuts = (e: any, reduxAction: any, videoState: any, setVideoTime: any) => {
  const video = refsStore.Refs[0].current;
  const videoContainer = refsStore.Refs[1].current;
  const timeToEnd = video.duration - video.currentTime;
  const key = e.keyCode
  console.log(key)

  if (key == 32) {
    e.preventDefault()
    reduxAction();
    playPauseVideo(video, videoState.isPaused)
  } else if (key == 37 || key == 39) {
    const timeSkip = 5;
    if (key == 39 && timeToEnd > timeSkip) {
      e.preventDefault()
      if (videoState.isPaused) {
        reduxAction()
        playPauseVideo(video, videoState)
      }
      rewindVideoTime(video, timeSkip, setVideoTime)
    } else if (key == 37) {
      rewindVideoTime(video, -timeSkip, setVideoTime)
    }
  } else if (key == 27) {
    console.log(key)
    reduxAction()
  }
}