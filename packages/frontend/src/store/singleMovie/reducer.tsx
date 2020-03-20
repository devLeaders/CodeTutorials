import { movieState, Actions, MovieActionsTypes } from "./types";

const initialState: movieState = {
  isPaused: true,
  isFullscreen: false,
  isMinimized: false
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
    default: {
      return state;
    }
  }
};
