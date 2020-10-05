import { KeyboardEvent } from "react";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";

export interface IInitailContext {
  actions: IActions;
  state: IState;
  name: VideoPlayerName;
}

interface IActions {
  playPause(): void;
  muteUnmute(): void;
  setFullscreen(): void;
  handleMinimize(): void;
  handleTimeProgressions(): void;
  handleKeyActions(e:any): void;
  handleMouseOver(e:any, ref:any): void;
}

interface IState {
  isMinimized: boolean;
  videoTime: number;
  isMuted: boolean;
  isFullscreen: boolean;
  smallIsPaused:boolean;
  bigIsPaused:boolean;
}
