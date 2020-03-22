import { Actions, MoviePlayPauseType, MovieToggleFullscreenType, MovieToggleSmallModeType, MovieMuteUnMuteType } from "./types";

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

