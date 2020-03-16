import React, { Component, useState, useRef } from "react";
import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoint";
import TimeBar from "./videoPlayerControls/TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";

const VideoPlayerContainer = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
    width: 60%;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const InterfaceWrapper = styled.div<{ paused: boolean }>`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s;
  transform: ${props => (props.paused ? "translateY(0)" : "translateY(100%)")};
  ${VideoPlayerContainer}:hover & {
    transform: translateY(0);
  }
`;

export interface VideoPlayerComponentProps {}

const VideoPlayerComponent: React.SFC<VideoPlayerComponentProps> = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [videoTime, setVideoTime] = useState("");
  const videoRef: any = useRef();
  const video = videoRef.current;

  const handleTimePlayed = () => {
    setVideoTime((video.currentTime / video.duration) * 100 + "%");
    console.log(videoTime);
  };

  return (
    <VideoPlayerContainer>
      <VideoPlayer ref={videoRef} onTimeUpdate={handleTimePlayed}>
        <source
          src="http://localhost:3300/videos/video"
          type="video/mp4"
        ></source>
      </VideoPlayer>
      <InterfaceWrapper paused={isPaused}>
        <VideoPlayerControls
          videoRef={videoRef}
          setIsPaused={setIsPaused}
          isPaused={isPaused}
        />
        <TimeBar videoTime={videoTime} />
      </InterfaceWrapper>
    </VideoPlayerContainer>
  );
};

export default VideoPlayerComponent;
