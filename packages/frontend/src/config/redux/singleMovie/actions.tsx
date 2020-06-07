import {
  Actions,
  MoviePlayPauseType,
  MovieToggleFullscreenType,
  MovieToggleSmallModeType,
  MovieMuteUnMuteType,
  SetVideoTimeType,
  SetSmallVideoTimeType,
  MoviePlayPauseSmallType
} from "./types";
import Store from "../store";
import { ButtonTypes } from "../../../features/videoPlayer/enums";

export function playPause(): MoviePlayPauseType {
  return {
    type: Actions.PLAY
  };
}


export function toogleFullscreen(): MovieToggleFullscreenType {
  return {
    type: Actions.TOGGLE_FULLSCREEN
  };
}


export function toggleSmallMode(): MovieToggleSmallModeType {
  return {
    type: Actions.TOGGLE_SMALLMODE
  };
}


export function muteUnmute(): MovieMuteUnMuteType {
  return {
    type: Actions.MUTE_UNMUTE
  };
}

export function setVideoTime(time: number): SetVideoTimeType {
  return {
    type: Actions.SET_VIDEO_TIME,
    payload: time
  };
}

export function setSmallVideoTime(time: number): SetSmallVideoTimeType {
  return {
    type: Actions.SET_SMALL_VIDEO_TIME,
    payload: time
  };
}
export function playPauseSmall(): MoviePlayPauseSmallType {
  return {
    type: Actions.PLAY_SMALL
  };
}

export const changeState = (buttonType: string, small?: string) => {
  let reduxAction: any;
  if (buttonType === ButtonTypes.PLAY) {
    if (small) {
      reduxAction = playPauseSmall
    } else {
      reduxAction = playPause
    }
  } else if (buttonType === ButtonTypes.MUTE) {
    reduxAction = muteUnmute
  } else if (buttonType === ButtonTypes.SMALL_MODE) {
    reduxAction = toggleSmallMode
  }

  Store.dispatch(reduxAction())
}

export const setTime = (time: number, small?: string) => {
  let setT
  small ? setT = setSmallVideoTime(time) :  setT = setVideoTime(time)
  Store.dispatch(setT)
}

export const setIsFullscreen = (small?: string) => {
  Store.dispatch(toogleFullscreen())
}



