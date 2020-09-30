import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { refsStore } from "../utils/refs.store";
import VideoPlayer from "./compundComponents/VideoPlayer";
import styled from "styled-components";
import { IMovieState } from "../models/video.type";

const SmallVideoPlayer: React.FC = () => {
  const { isMinimized } = useSelector((state: IMovieState) => state.newMovie);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoContainerRef.current !== null) {
      refsStore.smallVideoPlayerRef = videoContainerRef.current;
    }
    return () => {
      refsStore.smallVideoPlayerRef = undefined;
    };
  }, []);

  return isMinimized ? (
    <Wrapper ref={videoContainerRef}>
      <VideoPlayer>
        <VideoPlayer.FullscreenBtn />
        <VideoPlayer.MuteBtn />
        <VideoPlayer.PlayBtn />
        <VideoPlayer.MinimizeBtn />
        <VideoPlayer.Video />
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
