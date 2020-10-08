import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../../../config/routing/NavigationPath";
import { useMovieState } from "../hooks/useMovieState";
import { BtnWrapper, ButtonsWrapper, Interface, LeftPanel, RightPanel, Wrapper } from "../styles/bigPlayer.styles";
import { refsStore } from "../utils/refs.store";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";
import VideoPlayer from "./compundComponents/VideoPlayer";

const BigVideoPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoData = useRef<any>();
  const { bigIsPaused } = useMovieState();
  const location = useLocation();
  const isMainScreen = location.pathname === Navigation.HOME;

  useEffect(() => {
    if(videoData) {
      refsStore[VideoPlayerName.BIG] = videoData;
    }
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <VideoPlayer name={VideoPlayerName.BIG}>
        <VideoPlayer.Video ref={{ videoData, containerRef }} />

      {!isMainScreen ? 

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
      
        : null }
      </VideoPlayer>
    </Wrapper>
  );
};

export default BigVideoPlayer;
