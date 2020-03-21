import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { breakPoint } from "../../../utils/breakPoint";
import TimeBar from "./TimeBar";
import { playPauseVideo } from "../../actions/playPauseVideo";
import Interface from "./interface"

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
  &:hover {
    .interfaceWrapper {
      transform: translateY(0)
    }
  }

  &:hover ${VideoPlayer} {
    filter: ${props => props.minimized ? "brightness(50%)" : ""};
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
  const videoRef: any = useRef();
  const videoContainerRef: any = useRef();
  const TimeBarRef: any = useRef();
  const [videoTime, setVideoTime] = useState(0);
  const video = videoRef.current;
  const timeskip = 5;


  const handleTimeProgress = () => {
    setVideoTime((video.currentTime / video.duration) * 100);
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
      <Interface
        videoRef={videoRef}
        videoContainerRef={videoContainerRef}
        TimeBarRef={TimeBarRef}
        isPaused={isPaused}
        isMinimized={isMinimized}
        setVideoTime={setVideoTime}
        videoTime={videoTime}
      />
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
