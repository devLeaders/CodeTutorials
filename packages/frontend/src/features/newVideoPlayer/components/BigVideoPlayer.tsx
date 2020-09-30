import React, { useRef, useEffect } from "react";
import { refsStore } from "../utils/refs.store";
import VideoPlayer from "./compundComponents/VideoPlayer";

const BigVideoPlayer: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoContainerRef.current !== null) {
      refsStore.bigVideoPlayerRef = videoContainerRef.current;
    }
    return () => {
      refsStore.bigVideoPlayerRef = undefined;
    };
  }, []);

  return (
    <div ref={videoContainerRef}>
      <VideoPlayer>
        <VideoPlayer.FullscreenBtn />
        <VideoPlayer.MuteBtn />
        <VideoPlayer.PlayBtn />
        <VideoPlayer.MinimizeBtn />
        <VideoPlayer.Video />
        <VideoPlayer.Timebar />
      </VideoPlayer>
    </div>
  );
};
export default BigVideoPlayer;
