import React, { Component } from "react";
import styled from "styled-components";
import { breakPoint } from "../../utils/breakPoint";

const VideoPlayerContainer = styled.div``;

const VideoPlayer = styled.video`
  width: 100%;

  @media screen and (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
    width: 60%;
  }
`;

const ControlsWrapper = styled.div``;

const TimeBar = styled.div``;
const StartStopBtn = styled.button``;

export interface VideoPlayerComponentProps {}

const VideoPlayerComponent: React.SFC<VideoPlayerComponentProps> = () => {
  return (
    <VideoPlayerContainer>
      <VideoPlayer>
        <source
          src="http://localhost:3300/videos/video"
          type="video/mp4"
        ></source>
      </VideoPlayer>
      <ControlsWrapper>
        <TimeBar></TimeBar>
        <StartStopBtn></StartStopBtn>
      </ControlsWrapper>
    </VideoPlayerContainer>
  );
};

export default VideoPlayerComponent;
