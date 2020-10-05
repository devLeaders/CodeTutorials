import React, { useRef, useEffect } from "react";
import { refsStore } from "../utils/refs.store";
import VideoPlayer from "./compundComponents/VideoPlayer";
import styled from "styled-components";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";
import { useMovieState } from "../hooks/useMovieState";

const SmallVideoPlayer: React.FC = () => {
  const { isMinimized } = useMovieState();;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoData = useRef<any>();

  useEffect(() => {
    refsStore[VideoPlayerName.SMALL] = videoData;
    return () => {
      refsStore[VideoPlayerName.SMALL] = undefined;
    };
  }, [isMinimized]);

  return isMinimized ? (
    <Wrapper ref={containerRef}>
      <VideoPlayer name={VideoPlayerName.SMALL}>
        <VideoPlayer.Video ref={{ videoData, containerRef }}/>
        <VideoPlayer.FullscreenBtn />
        <VideoPlayer.MuteBtn />
        <VideoPlayer.PlayBtn />
        <VideoPlayer.MinimizeBtn />
        <VideoPlayer.Timebar />
      </VideoPlayer>
    </Wrapper>
  ) : null;
};
const Wrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  bottom: 0;
  right: 0;
`;
export default SmallVideoPlayer;
