import { movieState, Actions, MovieActionsTypes } from "./types";

const initialState: movieState = {
  isPaused: true,
  isFullscren: false,
  isMinimized: false
};

export const movieReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case Actions.PLAY: {
      console.log(action, state);
      return { ...state, isPaused: !state.isPaused };
    }
    case Actions.TOGGLE_FULLSCREEN: {
      console.log(action, state);
      return { ...state, isFullscren: !state.isFullscren };
    }
    case Actions.TOGGLE_SMALLMODE: {
      console.log(action, state);
      return { ...state, isMinimized: !state.isMinimized };
    }
    default: {
      return state;
    }
  }
};
