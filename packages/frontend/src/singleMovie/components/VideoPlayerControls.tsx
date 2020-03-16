import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { ButtonTypes } from "../enums";

import VideoPlayerBtn from "./videoPlayerControls/VideoPlayerBtn";

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3px;
`;
const LeftPanel = styled.div``;
const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
`;

export interface VideoPlayerControlsProps {
  videoRef: any;
  setIsPaused: any;
  isPaused: boolean;
}

const VideoPlayerControls: React.SFC<VideoPlayerControlsProps> = props => {
  return (
    <ControlsWrapper>
      <LeftPanel>
        <VideoPlayerBtn
          videoRef={props.videoRef}
          mainImg="/play.svg"
          afterClickImg="/pause.svg"
          type={ButtonTypes.PLAY}
          setIsPaused={props.setIsPaused}
          isPaused={props.isPaused}
        />
      </LeftPanel>
      <RightPanel>
        <VideoPlayerBtn
          videoRef={props.videoRef}
          mainImg="/mute.svg"
          afterClickImg="/unMute.svg"
          type={ButtonTypes.MUTE}
        />
        <VideoPlayerBtn
          videoRef={props.videoRef}
          mainImg="/smallmode.svg"
          afterClickImg="/normalscreen.svg"
          type={ButtonTypes.SMALL_MODE}
        />
        <VideoPlayerBtn
          videoRef={props.videoRef}
          mainImg="/fullscreen.svg"
          afterClickImg="/smallscreen.svg"
          type={ButtonTypes.FULLSCREEN}
        />
      </RightPanel>
    </ControlsWrapper>
  );
};

export default VideoPlayerControls;
