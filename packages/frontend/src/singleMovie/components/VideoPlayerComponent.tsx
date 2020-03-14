import React, { Component, useState } from "react";
import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoint";
import StartStopBtn from "./videoPlayerControls/StartStopBtn";
import TimeBar from "./videoPlayerControls/TimeBar";
import handleplayPause from "../actions/handleplayPause";
import togglePlayPause from "../actions/handleplayPause";

const VideoPlayerContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const VideoPlayer = styled.video`
  width: 100%;

  @media screen and (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
    width: 60%;
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 70px;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  transition: all 0.2s;
  ${VideoPlayerContainer}:hover & {
    transform: translateY(0);
  }
`;

export interface VideoPlayerComponentProps {}

export interface VideoPlayerComponentState {
  paused: boolean;
}

class VideoPlayerComponent extends React.Component<
  VideoPlayerComponentProps,
  VideoPlayerComponentState
> {
  state = { paused: true };
  private togglePlayPause = () => {
    const { paused } = this.state;
    this.setState({
      paused: !paused
    });

    // video.play();
  };
  render() {
    return (
      <VideoPlayerContainer>
        <video>
          <source
            ref="video"
            src="http://localhost:3300/videos/video"
            type="video/mp4"
          ></source>
        </video>
        <ControlsWrapper>
          <TimeBar />
          <StartStopBtn playStop={this.togglePlayPause} />
        </ControlsWrapper>
      </VideoPlayerContainer>
    );
  }
}

export default VideoPlayerComponent;
