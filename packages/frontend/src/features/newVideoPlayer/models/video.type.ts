import { PropsWithChildren, ReactNode } from "react";

export interface IVideoPlayerComposition {
  PlayBtn: PropsWithChildren<any>;
  Video: PropsWithChildren<any>;
  FullscreenBtn: PropsWithChildren<any>;
  MuteBtn: PropsWithChildren<any>;
  Timebar: PropsWithChildren<any>;
  MinimizeBtn: PropsWithChildren<any>;
}
export interface IVideoPlayer {
  name:string
}

export interface IMovieState {
  newMovie: {
    isFullscreen: boolean;
    isMinimized: boolean;
    videoTime: number;
  };
}
export interface IVideo {
  children: ReactNode;
}
export interface IButton {
  action(): void;
  icon: string;
}
export interface ITimeBar {
  ref: HTMLDivElement | null;
  videoProgress: string;
}
export interface IVideoProps {
  togglePlay(): void;
}
