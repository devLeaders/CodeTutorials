export interface movieState {
  isFullscreen: boolean;
  isMinimized: boolean;
  videoTime: number;
  isMuted: boolean;
  smallIsPaused:boolean;
  bigIsPaused:boolean;
}

export enum Actions {
  TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN",
  MINIMIZE = "MINIMIZE",
  SET_VIDEO_TIME = "SET_VIDEO_TIME",
  RESET_VIDEO_STATE = "RESET_VIDEO_STATE",
  SET_BIG_IS_PAUSED = "SET_BIG_IS_PAUSED",
  SET_SMALL_IS_PAUSED = "SET_SMALL_IS_PAUSED",
  SET_MUTE ="SET_MUTE",
}

interface MovieFulscreen {
  type: Actions.TOGGLE_FULLSCREEN;
}
interface MovieMinimize {
  type: Actions.MINIMIZE;
}
interface MovieSetTime {
  type: Actions.SET_VIDEO_TIME;
  payload: number;
}
interface MovieResetState {
  type: Actions.RESET_VIDEO_STATE;
}
interface IPaused {
  type: Actions.SET_BIG_IS_PAUSED | Actions.SET_SMALL_IS_PAUSED
}
interface IMute {
  type: Actions.SET_MUTE
}


export type MovieStateType = MovieFulscreen | MovieMinimize | MovieSetTime | MovieResetState | IPaused | IMute;
