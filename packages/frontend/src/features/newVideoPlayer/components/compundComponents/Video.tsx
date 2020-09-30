import React, { useEffect, useRef } from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import { IVideo } from "../../models/video.type";
import { refsStore } from "../../utils/refs.store";
import VideoStream from "../DumbComponents/VideoStream";

const Video: React.FC<IVideo> = () => {
  const {
    actions: { handleTogglePlay, handleTimeProgress },
    state,
  } = useVideoPlayerContext();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      state.isMinimized ? (refsStore.smallVideoRef = videoRef.current) : (refsStore.bigVideoRef = videoRef.current);
    }
    return () => {
      state.isMinimized ? (refsStore.smallVideoRef = undefined) : (refsStore.bigVideoRef = undefined);
    };
  }, []);

  return <VideoStream ref={videoRef} handleTogglePlay={handleTogglePlay} handleTimeProgress={handleTimeProgress} />;
};
export default Video;
