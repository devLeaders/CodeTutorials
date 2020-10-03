import React, { useRef, useEffect } from "react";
import { refsStore } from "../utils/refs.store";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";
import VideoPlayer from "./compundComponents/VideoPlayer";

const BigVideoPlayer: React.FC = () => {
  const containerRef = useRef<any>();
  const ref = useRef<any>();

  useEffect(() => {
    console.log('ref')
    refsStore[VideoPlayerName.BIG] = ref;
    return () => {
      // refsStore.bigVideoPlayerRef = undefined;
    };
  }, []);

  return (
    <div ref={containerRef}>
      <VideoPlayer name={VideoPlayerName.BIG}>
        <VideoPlayer.Video ref={{ ref, containerRef }} />
        <VideoPlayer.FullscreenBtn />
        <VideoPlayer.MuteBtn />
        <VideoPlayer.PlayBtn />
        {/* <VideoPlayer.MinimizeBtn />
        <VideoPlayer.Timebar /> */}
      </VideoPlayer>
    </div>
  );
};
export default BigVideoPlayer;
