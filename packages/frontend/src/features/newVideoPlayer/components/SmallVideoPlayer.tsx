import React, { useRef, useEffect } from "react";
import { refsStore } from "../utils/refs.store";
import VideoPlayer from "./compundComponents/VideoPlayer";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";
import { useMovieState } from "../hooks/useMovieState";
import { Wrapper, Background, PlayBtnWrapper, TimebarWrapper, BtnWrapper } from "../styles/snallPlayer.styles";

const SmallVideoPlayer: React.FC = () => {
  const { isMinimized, smallIsPaused } = useMovieState();;
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
    
      <Background isPaused={smallIsPaused}>
        <PlayBtnWrapper isPaused={smallIsPaused}>
          <VideoPlayer.PlayBtn />
        </PlayBtnWrapper>
        <BtnWrapper isPaused={smallIsPaused}> 
        <VideoPlayer.MinimizeBtn /> 
       </BtnWrapper>
      </Background>     

      <TimebarWrapper>
        <VideoPlayer.Timebar />
      </TimebarWrapper>
      </VideoPlayer>
    </Wrapper>
  ) : null;
};


export default SmallVideoPlayer;
