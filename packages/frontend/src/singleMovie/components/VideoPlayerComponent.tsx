import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { breakPoint } from "../../utils/breakPoint";
import TimeBar from "./videoPlayerControls/TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";
import SmallModeInterface from "./SmallModeInterface"
import { playPauseVideo } from "../actions/playPauseVideo";

// const VideoPlayerContainer = styled.div<{ minimized: boolean }>`
//   position: ${props => (props.minimized ? "absolute" : "relative")};
//   right: ${props => (props.minimized ? "30px" : "")};
//   bottom: ${props => (props.minimized ? "0px" : "")};



const VideoPlayerContainer = styled.div.attrs((props: { minimized: boolean }): any => ({
  position: props.minimized ? "absolute" : "relative",
  right: props.minimized ? "30px" : "",
  bottom: props.minimized ? "10px" : "",
  height: props.minimized ? "200px" : "",
  width: props.minimized ? "300px" : ""
}))`
  position: ${props => props.position};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  max-height: ${props => props.height};
  max-width: ${props => props.width};
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

const InterfaceWrapper = styled.div<{ paused: boolean; fullscren: boolean; isMin: boolean }>`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${props => (props.isMin ? "100%" : "")};
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s;
  z-index: ${props => (props.isMin ? "-1" : "")};
  transform: ${props => props.isMin ? "translateY(0)" : (props.paused ? "translateY(0)" : "translateY(100%)")};
  ${VideoPlayerContainer}:hover & {
    transform: ${props => (!props.isMin ? "translateY(0)" : "")};
    z-index: ${props => (props.isMin ? "1" : "")};
  }
`;

export interface VideoPlayerComponentProps {
  movie: {
    isPaused: boolean;
    isMinimized: boolean;
    isFullscreen: boolean;
  };
  play: any;
}

const VideoPlayerComponent: React.SFC<VideoPlayerComponentProps> = (
  props
): any => {
  const { isPaused, isMinimized, isFullscreen } = props.movie;
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef: any = useRef();
  const videoContainerRef: any = useRef();
  const TimeBarRef: any = useRef();
  const video = videoRef.current;
  const timePlayed = videoTime + "%";

  const handleTimeProgress = () => {
    setVideoTime((video.currentTime / video.duration) * 100);
  };

  const handleVideoClick = () => {
    props.play();
    playPauseVideo(videoRef.current, isPaused);
  };
  const handleInterfaceClick = () => {
    if (isMinimized === true) {
      props.play();
      playPauseVideo(videoRef.current, isPaused)
    }
  };

  const changeVideoTimeOnClick = (e: any) => {
    const progressBarPosition = e.nativeEvent.offsetX;
    const TimeBarWidth = TimeBarRef.current.offsetWidth;
    const newTime = (progressBarPosition / TimeBarWidth) * video.duration;
    video.currentTime = newTime;
    setVideoTime((video.currentTime / video.duration) * 100);
  };

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

      <InterfaceWrapper paused={isPaused} fullscren={isFullscreen} isMin={isMinimized} onClick={handleInterfaceClick}>
        {isMinimized ?
          <SmallModeInterface videoTime={videoTime}
            videoRef={videoRef}
            videoContainerRef={videoContainerRef}
            videoDuration={videoDuration}
          />
          : <VideoPlayerControls
            videoTime={videoTime}
            videoRef={videoRef}
            videoContainerRef={videoContainerRef}
            videoDuration={videoDuration}

          />}
        <TimeBar
          isMin={isMinimized}
          ref={TimeBarRef}
          videoTime={timePlayed}
          click={e => changeVideoTimeOnClick(e)}
        />
      </InterfaceWrapper>
    </VideoPlayerContainer>
  );
};

const mapStateToProps = (state: any) => {
  return { movie: state.movie };
};

const mapDispatchToProps = (dispatch: any) => {
  return { play: () => { dispatch({ type: "play" }) } };
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerComponent);
