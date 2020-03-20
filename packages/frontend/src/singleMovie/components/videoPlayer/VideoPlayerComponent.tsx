import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { breakPoint } from "../../../utils/breakPoint";
import TimeBar from "./TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";
import SmallModeInterface from "./SmallModeInterface"
import { playPauseVideo } from "../../actions/playPauseVideo";

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoPlayerContainer = styled.div.attrs((props: { minimized: boolean }): any => ({
  position: props.minimized ? "fixed" : "relative",
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
  &:hover {
    .small {
      visibility: visible;
      opacity: 1;
    }
  }

  &:hover ${VideoPlayer} {
    filter: ${props => props.minimized ? "brightness(50%)" : ""};
  }
`;

const InterfaceWrapper = styled.div<{ paused: boolean; isMin: boolean }>`
  display: ${props => !props.isMin ? "flex" : "block"};
  position: ${props => props.isMin ? "" : "absolute"};
  bottom: 0;
  width: 100%;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s;
  transform: ${props => props.isMin ? "translateY(0)" : (props.paused ? "translateY(0)" : "translateY(100%)")};
  ${VideoPlayerContainer}:hover & {
    transform: ${props => (!props.isMin ? "translateY(0)" : "")};
  }
`;

export interface VideoPlayerComponentProps {
  movie: {
    isPaused: boolean;
    isMinimized: boolean;
    isFullscreen: boolean;
  };
  play: any;
  anotherSite?: any
  single?: any
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
  const timeskip = 5;

  const handleTimeProgress = () => {
    setVideoTime((video.currentTime / video.duration) * 100);
    setVideoDuration(video.duration)
  };

  const handleVideoClick = () => {
    props.play();
    playPauseVideo(videoRef.current, isPaused);
  };

  const handleKeyDown = (e: any) => {
    const video = videoRef.current
    const timeToEnd = video.duration - video.currentTime;
    const key = e.keyCode
    console.log(timeToEnd)
    if (key == 32) {
      e.preventDefault()
      props.play();
      playPauseVideo(videoRef.current, isPaused)
    } else if (key == 37 && !isPaused) {
      setTime(-timeskip)
    }
    else if (key == 39 && timeToEnd > timeskip) {
      if (isPaused) {
        props.play();
        playPauseVideo(videoRef.current, isPaused)
      }
      setTime(timeskip)
    }
  }
  const handleProgressBarClick = (e: any) => {
    changeVideoTimeOnClick(e)
  }

  const changeVideoTimeOnClick = (e: any) => {
    const video = videoRef.current;
    const progressBarPosition = e.nativeEvent.offsetX;
    const TimeBarWidth = TimeBarRef.current.offsetWidth;
    const newTime = (progressBarPosition / TimeBarWidth) * video.duration;
    video.currentTime = newTime;
    setVideoTime((video.currentTime / video.duration) * 100);
  };

  const setTime = (time: any) => {
    const video = videoRef.current
    video.currentTime += time;
    setVideoTime((video.currentTime / video.duration) * 100);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => { window.removeEventListener("keydown", handleKeyDown) }
  }, [isPaused])

  return (
    <VideoPlayerContainer
      ref={videoContainerRef}
      minimized={isMinimized}
    >
      <VideoPlayer
        ref={videoRef}
        onTimeUpdate={handleTimeProgress}
        onClick={handleVideoClick}
      >
        <source
          src="http://localhost:3300/videos/video"
          type="video/mp4">
        </source>
      </VideoPlayer>

      {isMinimized ?
        <SmallModeInterface
          videoRef={videoRef}
          videoContainerRef={videoContainerRef}
        />
        : <InterfaceWrapper
          paused={isPaused}
          isMin={isMinimized}
        >

          <VideoPlayerControls
            videoTime={videoTime}
            videoRef={videoRef}
            videoContainerRef={videoContainerRef}
            videoDuration={videoDuration}
          />

          <TimeBar
            ref={TimeBarRef}
            videoTime={timePlayed}
            click={handleProgressBarClick}
          />
        </InterfaceWrapper>}

      {isMinimized &&
        <TimeBar
          ref={TimeBarRef}
          videoTime={timePlayed}
          click={handleProgressBarClick}
        />}

    </VideoPlayerContainer >
  );
};

const mapStateToProps = (state: any) => {
  return { movie: state.movie };
};

const mapDispatchToProps = (dispatch: any) => {
  return { play: () => { dispatch({ type: "play" }) } };
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerComponent);
