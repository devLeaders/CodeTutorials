export interface movieState {
  isPaused: boolean;
  isFullscreen: boolean;
  isMinimized: boolean;
}

export enum Actions {
  PLAY = "play",
  TOGGLE_FULLSCREEN = "fullscreen",
  TOGGLE_SMALLMODE = "smallMode"
}

interface MovieActions {
  type: Actions.PLAY;
}

export type MovieActionsTypes = MovieActions;
