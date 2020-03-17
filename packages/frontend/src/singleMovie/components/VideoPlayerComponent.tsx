import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoint";
import TimeBar from "./videoPlayerControls/TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";
import { relative } from "path";

const VideoPlayerContainer = styled.div<{ minimized: boolean }>`
  position: ${props => (props.minimized ? "absolute" : "relative")};
  right: ${props => (props.minimized ? "30px" : "")};
  bottom: ${props => (props.minimized ? "0px" : "")};
  overflow: hidden;
  @media screen and (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
    width: 60%;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const InterfaceWrapper = styled.div<{ paused: boolean; fullscren: boolean }>`
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
  const [isMinimized, setIsMinimized] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isFullscren, setIsFullscren] = useState(false);
  const videoRef: any = useRef();
  const videoContainerRef: any = useRef();
  const TimeBarRef: any = useRef();
  const video = videoRef.current;
  const timePlayed = videoTime + "%";

  const handleTimeProgress = () => {
    setVideoTime((video.currentTime / video.duration) * 100);
  };

  const chceckSize = () => {
    if (document.fullscreenElement) {
      setIsFullscren(true);
      console.log(isFullscren);
    } else {
      setIsFullscren(false);
      console.log(isFullscren);
    }
  };

  const handleVideoClick = () => {
    setIsPaused(!isPaused);
    if (isPaused) {
      video.play();
    } else {
      video.pause();
    }
    chceckSize();
    setVideoDuration(video.duration);
    console.log(video.duration);
  };

  const changeVideoTimeOnClick = (e: any) => {
    const progressBarPosition = e.nativeEvent.offsetX;
    const TimeBarWidth = TimeBarRef.current.offsetWidth;
    const newTime = (progressBarPosition / TimeBarWidth) * video.duration;
    video.currentTime = newTime;
    setVideoTime((video.currentTime / video.duration) * 100);
  };
  useEffect(() => {
    chceckSize();
  }, [isPaused]);

  return (
    <VideoPlayerContainer ref={videoContainerRef} minimized={isMinimized}>
      <VideoPlayer
        ref={videoRef}
        onTimeUpdate={handleTimeProgress}
        onClick={handleVideoClick}
      >
        <source
          src="http://localhost:3300/videos/video"
          type="video/mp4"
        ></source>
      </VideoPlayer>
      <InterfaceWrapper paused={isPaused} fullscren={isFullscren}>
        <VideoPlayerControls
          videoTime={videoTime}
          videoRef={videoRef}
          videoContainerRef={videoContainerRef}
          setIsPaused={setIsPaused}
          isPaused={isPaused}
          videoDuration={videoDuration}
          isMinimized={isMinimized}
          setIsMinimized={setIsMinimized}
        />
        <TimeBar
          ref={TimeBarRef}
          videoTime={timePlayed}
          click={e => changeVideoTimeOnClick(e)}
        />
      </InterfaceWrapper>
    </VideoPlayerContainer>
  );
};

export default VideoPlayerComponent;
