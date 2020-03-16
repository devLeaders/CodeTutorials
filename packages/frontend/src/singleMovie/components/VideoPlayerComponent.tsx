import React, { Component, useState, useRef } from "react";
import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoint";
import StartStopBtn from "./videoPlayerControls/StartStopBtn";
import TimeBar from "./videoPlayerControls/TimeBar";

const VideoPlayerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const VideoPlayer = styled.video`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
    width: 60%;
  }
`;

const InterfaceWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  bottom: 0;
  width: 100%;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  transition: all 0.2s;
  ${VideoPlayerContainer}:hover & {
    transform: translateY(0);
  }
`;
const ControlsWrapper = styled.div`
  padding: 3px;
`;

export interface VideoPlayerComponentProps {}

const VideoPlayerComponent: React.SFC<VideoPlayerComponentProps> = () => {
  const videoRef: any = useRef();
  return (
    <VideoPlayerContainer>
      <VideoPlayer ref={videoRef}>
        <source
          src="http://localhost:3300/videos/video"
          type="video/mp4"
        ></source>
      </VideoPlayer>
      <InterfaceWrapper>
        <ControlsWrapper>
          <StartStopBtn videoRef={videoRef} />
        </ControlsWrapper>
        <TimeBar />
      </InterfaceWrapper>
    </VideoPlayerContainer>
  );
};

export default VideoPlayerComponent;
