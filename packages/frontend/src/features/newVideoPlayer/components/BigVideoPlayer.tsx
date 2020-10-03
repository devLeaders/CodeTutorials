import React, { useRef, useEffect } from "react";
import { refsStore } from "../utils/refs.store";
import VideoPlayer from "./compundComponents/VideoPlayer";

const BigVideoPlayer: React.FC = () => {
  const ref = useRef<any>();

  useEffect(() => {
      refsStore.bigVideoPlayerRef = ref;
    return () => {
      refsStore.bigVideoPlayerRef = undefined;
    };
  }, []);

  return (
    <div>
      <VideoPlayer>
        <VideoPlayer.Video ref={ref}/>
        {/* <VideoPlayer.FullscreenBtn /> */}
        <VideoPlayer.MuteBtn />
        <VideoPlayer.PlayBtn />
        {/* <VideoPlayer.MinimizeBtn />
        <VideoPlayer.Timebar /> */}
      </VideoPlayer>
    </div>
  );
};
export default BigVideoPlayer;
