import { refsStore } from "../components/videoPlayer/refs.store"
import { ButtonTypes } from "../enums";
import { playPauseVideo, videoResize } from "./videoPlayerActions"
import { playPause, toogleFullscreen, toggleSmallMode } from "../../store/singleMovie/actions"

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
  } else if (ButtonTypes.SMALL_MODE) {
    if (videoState) {
      videoResize(videoContainer, videoState);
    }
  }

  reduxAction()
};