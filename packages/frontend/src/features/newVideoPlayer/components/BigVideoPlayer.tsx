import React, { useRef, useEffect } from "react";
import { useMovieState } from "../hooks/useMovieState";
import { BtnWrapper, ButtonsWrapper, Interface, LeftPanel, RightPanel, Wrapper } from "../styles/bigPlayer.styles";
import { refsStore } from "../utils/refs.store";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";
import VideoPlayer from "./compundComponents/VideoPlayer";

const BigVideoPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoData = useRef<any>();
  const { bigIsPaused } = useMovieState();

  useEffect(() => {
    refsStore[VideoPlayerName.BIG] = videoData;
    return () => {
      refsStore[VideoPlayerName.BIG] = undefined;
    };
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <VideoPlayer name={VideoPlayerName.BIG}>
        <VideoPlayer.Video ref={{ videoData, containerRef }} />

       <Interface isPlaying={bigIsPaused}>

        <ButtonsWrapper isPlaying={bigIsPaused}>
          <LeftPanel>
            <BtnWrapper>
              <VideoPlayer.PlayBtn />
            </BtnWrapper>
            <VideoPlayer.CurrentTime />
          </LeftPanel> 
         
          <RightPanel>
            <BtnWrapper>
              <VideoPlayer.MuteBtn />
            </BtnWrapper>
            <BtnWrapper>
              <VideoPlayer.MinimizeBtn />
            </BtnWrapper>
            <BtnWrapper>
              <VideoPlayer.FullscreenBtn />
            </BtnWrapper>
            <VideoPlayer.VideoDuration />
          </RightPanel>

        </ButtonsWrapper>
        <VideoPlayer.Timebar />

      </Interface> 
      </VideoPlayer>
    </Wrapper>
  );
};

export default BigVideoPlayer;
