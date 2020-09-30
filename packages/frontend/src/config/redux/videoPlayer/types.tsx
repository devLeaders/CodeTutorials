export interface movieState {
  isPaused: boolean;
  smallIsPaused: boolean;
  isFullscreen: boolean;
  isMinimized: boolean;
  isMuted: boolean;
  videoTime: number;
  smallVideoTime: number;
}

export enum Actions {
  PLAY = "play",
  PLAY_SMALL = "play small",
  TOGGLE_FULLSCREEN = "fullscreen",
  TOGGLE_SMALLMODE = "smallMode",
  MUTE_UNMUTE = "mute",
  SET_VIDEO_TIME = "setVideoTime",
  SET_SMALL_VIDEO_TIME = "setSmallVideoTime",
  RESET_VIDEO_STATE = "resetVideoState",
}

interface MoviePlayPause {
  type: Actions.PLAY;
}
interface MoviePlayPauseSmall {
  type: Actions.PLAY_SMALL;
}
interface MovieToggleFullscreen {
  type: Actions.TOGGLE_FULLSCREEN;
}
interface MovieToggleSmallMode {
  type: Actions.TOGGLE_SMALLMODE;
}
interface MovieMuteUnMute {
  type: Actions.MUTE_UNMUTE;
}
interface SetVideoTime {
  type: Actions.SET_VIDEO_TIME;
  payload: number;
}
interface SetSmallVideoTime {
  type: Actions.SET_SMALL_VIDEO_TIME;
  payload: number;
}
interface ResetVideoState {
  type: Actions.RESET_VIDEO_STATE;
}

export type MoviePlayPauseType = MoviePlayPause;
export type MoviePlayPauseSmallType = MoviePlayPauseSmall;
export type MovieToggleFullscreenType = MovieToggleFullscreen;
export type MovieToggleSmallModeType = MovieToggleSmallMode;
export type MovieMuteUnMuteType = MovieMuteUnMute;
export type SetVideoTimeType = SetVideoTime;
export type SetSmallVideoTimeType = SetSmallVideoTime;
export type ResetVideoStateType = ResetVideoState;
