export interface movieState {
  isPaused: boolean;
  isFullscren: boolean;
  isMinimized: boolean;
}

export enum Actions {
  PLAY = "play"
}

interface MovieActions {
  type: Actions.PLAY;
}

export type MovieActionsTypes = MovieActions;
