export interface IInitailContext {
  actions: IActions;
  state: IState;
}

interface IActions {
  handleTogglePlay(): void;
  toggleMute(): void;
  toggleFullscreen(): void;
  handleTimeProgress(): void;
  toggleMinimize(): void;
}

interface IState {
  isPaused: boolean;
  isMinimized: boolean;
  videoTime: number;
  isMuted: boolean;
  isFullscreen: boolean;
}
