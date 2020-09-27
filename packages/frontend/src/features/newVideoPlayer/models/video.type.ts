import { PropsWithChildren } from "react";
import { IVideo } from "./videoContainer.type";

export interface IVideoPlayerComposition {
  PlayBtn: PropsWithChildren<any>;
  Video: PropsWithChildren<any>;
}
export interface IVideoPlayer {}
