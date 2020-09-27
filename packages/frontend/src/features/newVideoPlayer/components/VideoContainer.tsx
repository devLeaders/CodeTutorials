import React, { useRef, useEffect } from "react";

import {refsStore} from "../utils/refs.store"
import VideoPlayer from "./VideoPlayer";

const VideoContainer: any = () => {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refsStore.bigVideoPlayerRef = videoContainerRef?.current
  },[videoContainerRef])

  return (
    <div ref={videoContainerRef}>
      <VideoPlayer></VideoPlayer>
    </div>
  );
};
export default VideoContainer;
