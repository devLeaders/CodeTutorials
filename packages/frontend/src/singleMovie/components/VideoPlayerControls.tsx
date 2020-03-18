import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { ButtonTypes } from "../enums";

import VideoPlayerBtn from "./videoPlayerControls/VideoPlayerBtn";
import Timer from "./Timer";

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3px;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightPanel = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export interface VideoPlayerControlsProps {
  videoRef: any;
  videoContainerRef: any;
  videoTime: number;
  videoDuration: number;
}

const VideoPlayerControls: React.SFC<VideoPlayerControlsProps> = props => {
  const { videoRef, videoContainerRef, videoTime, videoDuration } = props;
  return (
    <ControlsWrapper>
      <LeftPanel>
        <VideoPlayerBtn
          videoRef={videoRef}
          videoContainerRef={videoContainerRef}
          mainImg="/play.svg"
          afterClickImg="/pause.svg"
          type={ButtonTypes.PLAY}
        />
        <Timer videoTime={videoTime} />
      </LeftPanel>
      <RightPanel>
        <VideoPlayerBtn
          videoRef={videoRef}
          videoContainerRef={videoContainerRef}
          mainImg="/mute.svg"
          afterClickImg="/unMute.svg"
          type={ButtonTypes.MUTE}
        />
        <VideoPlayerBtn
          videoRef={videoRef}
          videoContainerRef={videoContainerRef}
          mainImg="/smallmode.svg"
          afterClickImg="/normalscreen.svg"
          type={ButtonTypes.SMALL_MODE}
        />
        <VideoPlayerBtn
          videoRef={videoRef}
          videoContainerRef={videoContainerRef}
          mainImg="/fullscreen.svg"
          afterClickImg="/smallscreen.svg"
          type={ButtonTypes.FULLSCREEN}
        />
        <Timer videoDuration={videoDuration} />
      </RightPanel>
    </ControlsWrapper>
  );
};

export default VideoPlayerControls;
