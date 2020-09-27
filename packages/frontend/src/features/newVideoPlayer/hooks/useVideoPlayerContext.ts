import { useContext } from "react";
import { VideoPlayerContext } from "../utils/videoPlayer.context";

export const useVideoPlayerContext = () => {
  const context = useContext(VideoPlayerContext);
  if (!context) {
    throw new Error("VideoPlayer compound components cannot be rendered outside VideoPlayer component");
  }
  return context;
};
