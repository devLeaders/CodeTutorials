import { refsStore } from "../components/videoPlayer/refs.store"
import { ButtonTypes } from "../enums";
import { playPauseVideo, videoResize, rewindVideoTime } from "./videoPlayerActions"
import { playPause, toogleFullscreen, toggleSmallMode } from "../../store/singleMovie/actions"
import { MouseEvent, ReducerAction } from "react";
import { RootStateOrAny } from "react-redux";


export const runVideoAction = (buttonType: string, videoState: boolean, reduxAction?: any, small?: string | undefined) => {

  const video = refsStore.Refs[0].current;
  const videoContainer = refsStore.Refs[1].current;

  if (buttonType === ButtonTypes.PLAY) {
    //function that plays and pause video
    playPauseVideo(video, videoState);
    reduxAction()
  } else if (buttonType === ButtonTypes.MUTE) {
    video.muted = !videoState;
    reduxAction()
  } else if (buttonType === ButtonTypes.SMALL_MODE) {
    reduxAction()
  }
  else if (buttonType === ButtonTypes.FULLSCREEN) {
    videoResize(videoContainer, videoState);
  }

};

export const changeIsFullscreen = (setIsFullscreen: any) => {
  setIsFullscreen()
}

export const changeVideoTime = (e: MouseEvent, setVideoTime: (num: number) => void, TimeBarRef: any, type?: string) => {
  const video = refsStore.Refs[0].current;
  const TimeBarWidth = TimeBarRef.current.offsetWidth;
  //distance from timbera to left window edge
  const distanceFromLeft = type && TimeBarRef.current.getBoundingClientRect().left


  const mousePosition = type ? e.clientX : e.nativeEvent.offsetX;
  const newTime = type ? ((mousePosition - distanceFromLeft) / TimeBarWidth) * video.duration : (mousePosition / TimeBarWidth) * video.duration;
  video.currentTime = newTime;
  setVideoTime((video.currentTime / video.duration) * 100);

}

export const handleVideoShortcuts = (e: KeyboardEvent, reduxAction: any, videoState: RootStateOrAny, setVideoTime: (num: number) => void, small: string | undefined) => {
  const video = refsStore.Refs[0].current;

  const timeToEnd = video.duration - video.currentTime;
  const key = e.keyCode
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
    // reduxAction()
  }
}

export const getVideoDuration = (setVideoDuration: (num: number) => void) => {
  const video = refsStore.Refs[0].current;

  console.log(video.duration)
  setVideoDuration(video.duration)
}