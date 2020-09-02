import { refsStore } from "../refs.store";
import { ButtonTypes } from "../enums";
import { playPauseVideo, videoResize, rewindVideoTime } from "./videoPlayerActions";
import {
  changeState,
  setIsFullscreen,
  setTime,
  playPauseSmall,
  playPause,
} from "../../../config/redux/videoPlayer/actions";
import { MouseEvent } from "react";
import { RootStateOrAny } from "react-redux";

export const runVideoAction = (buttonType: string, videoState: boolean, small?: string | undefined) => {
  const video = small ? refsStore.VideoRefs[0] : refsStore.VideoRefs[1];
  const videoContainer = small ? refsStore.ContainerRefs[0] : refsStore.ContainerRefs[1];
  if (buttonType === ButtonTypes.PLAY) {
    playPauseVideo(video, videoState);
  } else if (buttonType === ButtonTypes.MUTE) {
    video.muted = !videoState;
  } else if (buttonType === ButtonTypes.FULLSCREEN) {
    videoResize(videoContainer, videoState);
  } else if (buttonType === ButtonTypes.SMALL_MODE) {
    if (!videoState) {
      playPauseVideo(video, videoState);
    }

    if (!refsStore.VideoRefs[0].paused) {
      playPauseVideo(refsStore.VideoRefs[0], refsStore?.VideoRefs[0].paused);
    }
  }

  if (buttonType != ButtonTypes.FULLSCREEN) {
    changeState(buttonType, small);
  }
};

export const changeIsFullscreen = (small?: string) => {
  if (!small) {
    setIsFullscreen();
  }
};
interface IVideoTime {
  current: HTMLDivElement | null
}

export const changeVideoTime = (e: MouseEvent, TimeBarRef: IVideoTime, type?: string, small?: string | undefined) => {
  const video = small ? refsStore.VideoRefs[0] : refsStore.VideoRefs[1];
  if (TimeBarRef.current) {
    const TimeBarWidth = TimeBarRef.current.offsetWidth;
    //distance from timbar to left window edge
    const distanceFromLeft = TimeBarRef.current.getBoundingClientRect().left; //&&type
    const mousePosition = type ? e.clientX : e.nativeEvent.offsetX;
    let newVideoTime = type
      ? ((mousePosition - distanceFromLeft) / TimeBarWidth) * video.duration
      : (mousePosition / TimeBarWidth) * video.duration;
    video.currentTime = newVideoTime;
    // setVideoTime(Math.floor((video.currentTime / video.duration) * 100));
    const time = Math.floor((video.currentTime / video.duration) * 100);
    setTime(time, small);

  }
  
};

export const handleVideoShortcuts = (e: KeyboardEvent, reduxAction: any, videoState: RootStateOrAny) => {
  const video = refsStore.VideoRefs[1];
  const timeToEnd = video?.duration - video?.currentTime;
  const key = e.keyCode;
  if (key === 32) {
    e.preventDefault();
    reduxAction();
    console.log(video, videoState.isPaused)
    playPauseVideo(video, videoState.isPaused);
  } else if ((key === 37 || key === 39)) {
    const timeSkip = 5;
    if (key === 39 && timeToEnd > timeSkip) {
      e.preventDefault();
      if (videoState.isPaused) {
        reduxAction();
        playPauseVideo(video, videoState);
      }
      rewindVideoTime(video, timeSkip);
    } else if (key === 37) {
      rewindVideoTime(video, -timeSkip);
    }
  } else if (key === 27) {
    // reduxAction()
  }
};

export const getVideoDuration = (setVideoDuration: (num: number) => void) => {
  const video = refsStore.VideoRefs[1];
  setVideoDuration(video.duration);
};
