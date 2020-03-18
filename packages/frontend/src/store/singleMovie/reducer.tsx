import { movieState, Actions, MovieActionsTypes } from "./types";

const initialState: movieState = {
  isPaused: true,
  isFullscren: false,
  isMinimized: false
};

export const movieReducer = (
  state = initialState,
  action: MovieActionsTypes
) => {
  switch (action.type) {
    case Actions.PLAY: {
      console.log(action, state);
      return { isPaused: !state.isPaused };
    }
    default: {
      return state;
    }
  }
};
