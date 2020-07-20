import { movieState, Actions } from "./types";

const initialState: movieState = {
  isPaused: true,
  smallIsPaused: true,
  isFullscreen: false,
  isMinimized: false,
  isMuted: false,
  videoTime: 0,
  smallVideoTime: 0,
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.PLAY: {
      return { ...state, isPaused: !state.isPaused };
    }
    case Actions.TOGGLE_FULLSCREEN: {
      return { ...state, isFullscreen: !state.isFullscreen };
    }
    case Actions.TOGGLE_SMALLMODE: {
      console.log(state.smallIsPaused)
      return { ...state, isMinimized: !state.isMinimized };
    }
    case Actions.MUTE_UNMUTE: {
      return { ...state, isMuted: !state.isMuted };
    }
    case Actions.SET_VIDEO_TIME: {
      return { ...state, videoTime: action.payload };
    }
    case Actions.SET_SMALL_VIDEO_TIME: {
      return { ...state, smallVideoTime: action.payload };
    }
    case Actions.PLAY_SMALL: {
      return { ...state, smallIsPaused: !state.smallIsPaused };
    }
    case Actions.RESET_VIDEO_STATE: {
      return {
        isPaused: true,
        smallIsPaused: true,
        isFullscreen: false,
        isMinimized: false,
        isMuted: false,
        videoTime: 0,
        smallVideoTime: 0,
      };
    }
    default: {
      return state;
    }
  }
};
