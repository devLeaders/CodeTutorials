import { Actions, MovieStateType } from "./types";

export const reset = (): MovieStateType => {
  return {
    type: Actions.RESET_VIDEO_STATE,
  };
};
export const setVideoTime = (time: number): MovieStateType => {
  return {
    type: Actions.SET_VIDEO_TIME,
    payload: time,
  };
};
export const handleFullscreen = (): MovieStateType => {
  return {
    type: Actions.TOGGLE_FULLSCREEN,
  };
};
export const minimizeVideo = (): MovieStateType => {
  return {
    type: Actions.MINIMIZE,
  };
};
