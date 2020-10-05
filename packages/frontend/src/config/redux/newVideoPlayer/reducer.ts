import { movieState, MovieStateType, Actions } from "./types";

const initialState: movieState = {
  isMinimized: false,
  isFullscreen: false,
  isMuted: false,
  videoTime: 0,
  smallIsPaused:true,
  bigIsPaused:true,
};

export const newMovieReducer = (state = initialState, action: MovieStateType) => {
  switch (action.type) {
    case Actions.MINIMIZE: {
      return { ...state, isMinimized: !state.isMinimized };
    }
    case Actions.SET_MUTE: {
      return { ...state, isMuted: !state.isMuted };
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
    case Actions.SET_BIG_IS_PAUSED: {
      return {...state, bigIsPaused: !state.bigIsPaused}
    }
    case Actions.SET_SMALL_IS_PAUSED: {
      return {...state, smallIsPaused: !state.smallIsPaused}
    }
    default: {
      return state;
    }
  }
};
