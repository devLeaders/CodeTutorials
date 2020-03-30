import { Actions, MoviePlayPauseType, MovieToggleFullscreenType, MovieToggleSmallModeType, MovieMuteUnMuteType, SetVideoTimeType, SetSmallVideoTimeType, MoviePlayPauseSmallType } from "./types";

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


