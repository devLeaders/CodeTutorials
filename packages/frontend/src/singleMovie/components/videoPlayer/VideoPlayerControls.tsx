import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { ButtonTypes } from "../../enums";

import VideoPlayerBtn from "./VideoPlayerBtn";
import Timer from "./Timer";
import MuteBtn from "../videoPlayer/videoPlayerButtons/MuteBtn"
import PlayBtn from "../videoPlayer/videoPlayerButtons/PlayBtn"
import FullscreenBtn from "../videoPlayer/videoPlayerButtons/FullscreenBtn"
import MinimizeBtn from "../videoPlayer/videoPlayerButtons/MinimizeBtn"

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 3px;
`;

const LeftPanel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightPanel = styled.div`
  height: 100%;
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
        <PlayBtn />
        <Timer videoTime={videoTime} />
      </LeftPanel>
      <RightPanel>
        <MuteBtn />
        <MinimizeBtn />
        <FullscreenBtn />
        <Timer videoDuration={videoDuration} />
      </RightPanel>
    </ControlsWrapper>
  );
};

export default VideoPlayerControls;
