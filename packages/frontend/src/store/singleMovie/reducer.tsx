import { movieState, Actions } from "./types";

const initialState: movieState = {
  isPaused: true,
  isFullscreen: false,
  isMinimized: false,
  isMuted: false,
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.PLAY: {
      console.log(state, action)
      return { ...state, isPaused: !state.isPaused };
    }
    case Actions.TOGGLE_FULLSCREEN: {
      console.log(state, action)
      return { ...state, isFullscreen: !state.isFullscreen };
    }
    case Actions.TOGGLE_SMALLMODE: {
      console.log(state, action)
      return { ...state, isMinimized: !state.isMinimized };
    }
    case Actions.MUTE_UNMUTE: {
      console.log(state, action)
      return { ...state, isMuted: !state.isMuted };
    }
    default: {
      return state;
    }
  }
};
