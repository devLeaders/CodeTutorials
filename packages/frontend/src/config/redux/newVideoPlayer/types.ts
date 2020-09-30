export interface movieState {
  isFullscreen: boolean;
  isMinimized: boolean;
  videoTime: number;
}

export enum Actions {
  TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN",
  MINIMIZE = "MINIMIZE",
  SET_VIDEO_TIME = "SET_VIDEO_TIME",
  RESET_VIDEO_STATE = "RESET_VIDEO_STATE",
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
export type MovieStateType = MovieFulscreen | MovieMinimize | MovieSetTime | MovieResetState;
