export interface movieState {
  isPaused: boolean;
  isFullscreen: boolean;
  isMinimized: boolean;
  isMuted: boolean;
  videoTime: number;
  videoType: string;
}

export enum Actions {
  PLAY = "play",
  TOGGLE_FULLSCREEN = "fullscreen",
  TOGGLE_SMALLMODE = "smallMode",
  MUTE_UNMUTE = "mute",
  SET_VIDEO_TIME = "setVideoTime",
  SET_VIDEO_TYPE = "setVideoType"
}

interface MoviePlayPause {
  type: Actions.PLAY;
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
  payload: number
}
interface SetVideoType {
  type: Actions.SET_VIDEO_TYPE;
}

export type MoviePlayPauseType = MoviePlayPause;
export type MovieToggleFullscreenType = MovieToggleFullscreen;
export type MovieToggleSmallModeType = MovieToggleSmallMode;
export type MovieMuteUnMuteType = MovieMuteUnMute;
export type SetVideoTimeType = SetVideoTime;
export type SetVideoTypeType = SetVideoType;
