import React, { useRef, useEffect } from "react";

import { refsStore } from "../utils/refs.store";
import Video from "./DumbComponents/Video";
import VideoPlayer from "./compundComponents/VideoPlayer";

const BigVideoPlayer: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refsStore.bigVideoPlayerRef = videoContainerRef;
  }, [videoContainerRef]);

  return (
    <div ref={videoContainerRef}>
      <VideoPlayer>
        <VideoPlayer.Video>
          <Video/>
        </VideoPlayer.Video>
      </VideoPlayer>
    </div>
  );
};
export default BigVideoPlayer;
