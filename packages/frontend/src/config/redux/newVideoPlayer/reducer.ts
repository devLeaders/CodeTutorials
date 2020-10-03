import { movieState, MovieStateType, Actions } from "./types";

const initialState: movieState = {
  isMinimized: false,
  isFullscreen: false,
  isMuted:false,
  videoTime: 0,
  smallIsPaused:false,
  bigIsPaused:false,
};

export const newMovieReducer = (state = initialState, action: MovieStateType) => {
  switch (action.type) {
    case Actions.MINIMIZE: {
      return { ...state, isMinimized: !state.isMinimized };
    }
    case Actions.TOGGLE_FULLSCREEN: {
      return { ...state, isFullscreen: !state.isFullscreen };
    }
    case Actions.SET_VIDEO_TIME: {
      return { ...state, videoTime: action.payload };
    }
    case Actions.RESET_VIDEO_STATE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
