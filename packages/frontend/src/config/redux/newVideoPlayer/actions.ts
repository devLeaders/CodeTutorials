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

export const setBigIsPaused = (): MovieStateType => {
  return {
    type: Actions.SET_BIG_IS_PAUSED,
  }
};

export const setSmallIsPaused = (): MovieStateType => {
  return {
    type: Actions.SET_SMALL_IS_PAUSED,
  }
};

export const setMuteUnmute = (): MovieStateType => {
  return {
    type: Actions.SET_MUTE,
  }
};