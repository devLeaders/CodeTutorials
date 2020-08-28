import { refsStore } from "../refs.store";
import { ButtonTypes } from "../enums";
import {
  playPauseVideo,
  videoResize,
  rewindVideoTime,
} from "./videoPlayerActions";
import {
  changeState,
  setIsFullscreen,
  setTime,
} from "../../../config/redux/videoPlayer/actions";
import { MouseEvent } from "react";
import { RootStateOrAny } from "react-redux";

export const runVideoAction = (
  buttonType: string,
  videoState: boolean,
  small?: string | undefined
) => {
  const video = small
    ? refsStore.RefsSmall[0].current
    : refsStore.Refs[0].current;
  const videoContainer = small
    ? refsStore.RefsSmall[1].current
    : refsStore.Refs[1].current;
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

    if (!refsStore.RefsSmall[0].current.paused) {
      playPauseVideo(
        refsStore.RefsSmall[0].current,
        refsStore.RefsSmall[0].current.paused
      );
    }
  }

  if (buttonType !== ButtonTypes.FULLSCREEN) {
    changeState(buttonType, small);
  }
};

export const changeIsFullscreen = (small?: string) => {
  if (!small) {
    setIsFullscreen();
  }
};

export const changeVideoTime = (
  e: MouseEvent,
  TimeBarRef: any,
  type?: string,
  small?: string | undefined
) => {
  //TODO: ogarnąć refsStore.Refs[0].current i RefsSmall[0].current bo nie macie tu penosci ze current nie jest undefined
  const video = small
    ? refsStore.RefsSmall[0].current
    : refsStore.Refs[0].current;
  const TimeBarWidth = TimeBarRef.current.offsetWidth;
  //distance from timbar to left window edge
  const distanceFromLeft =
    type && TimeBarRef.current.getBoundingClientRect().left;

  const mousePosition = type ? e.clientX : e.nativeEvent.offsetX;
  const newVideoTime = type
    ? ((mousePosition - distanceFromLeft) / TimeBarWidth) * video.duration
    : (mousePosition / TimeBarWidth) * video.duration;
  video.currentTime = newVideoTime;
  // setVideoTime(Math.floor((video.currentTime / video.duration) * 100));
  const time = Math.floor((video.currentTime / video.duration) * 100);
  setTime(time, small);
};

export const handleVideoShortcuts = (
  e: KeyboardEvent,
  reduxAction: any,
  videoState: RootStateOrAny
) => {
  const video = refsStore.Refs[0].current;
  const timeToEnd = video.duration - video.currentTime;
  const key = e.keyCode;
  if (key === 32) {
    e.preventDefault();
    reduxAction();
    playPauseVideo(video, videoState.isPaused);
  } else if (key === 37 || key === 39) {
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
  const video = refsStore.Refs[0].current;
  setVideoDuration(video.duration);
};
