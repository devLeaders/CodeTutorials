import { movieState, Actions } from "./types";

const initialState: movieState = {
  isPaused: true,
  isFullscreen: false,
  isMinimized: false,
  isMuted: false,
  videoTime: 0,
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
      return { ...state, isMinimized: !state.isMinimized };
    }
    case Actions.MUTE_UNMUTE: {
      return { ...state, isMuted: !state.isMuted };
    }
    case Actions.SET_VIDEO_TIME: {
      console.log(action.payload)
      return { ...state, videoTime: action.payload };
    }
    default: {
      return state;
    }
  }
};
