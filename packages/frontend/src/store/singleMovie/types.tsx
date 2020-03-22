export interface movieState {
  isPaused: boolean;
  isFullscreen: boolean;
  isMinimized: boolean;
  isMuted: boolean;
}

export enum Actions {
  PLAY = "play",
  TOGGLE_FULLSCREEN = "fullscreen",
  TOGGLE_SMALLMODE = "smallMode",
  MUTE_UNMUTE = "mute"
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

export type MoviePlayPauseType = MoviePlayPause;
export type MovieToggleFullscreenType = MovieToggleFullscreen;
export type MovieToggleSmallModeType = MovieToggleSmallMode;
export type MovieMuteUnMuteType = MovieMuteUnMute;
