import { movieState, Actions } from "./types";

const initialState: movieState = {
  isPaused: true,
  isFullscreen: false,
  isMinimized: false,
  isMuted: false,
  videoTime: 0,
  videoType: "",
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.PLAY: {
      console.log(state)
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
      return { ...state, videoTime: action.payload };
    }
    case Actions.SET_VIDEO_TYPE: {
      return { ...state, videoType: action.payload };
    }
    default: {
      return state;
    }
  }
};
