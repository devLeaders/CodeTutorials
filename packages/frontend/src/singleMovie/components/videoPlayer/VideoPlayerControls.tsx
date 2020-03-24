import * as React from "react";
import styled from "styled-components";

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


const VideoPlayerControls: React.SFC = () => {
  return (
    <ControlsWrapper>
      <LeftPanel>
        <PlayBtn />
        <Timer />
      </LeftPanel>
      <RightPanel>
        <MuteBtn />
        <MinimizeBtn />
        <FullscreenBtn />
        <Timer />
      </RightPanel>
    </ControlsWrapper>
  );
};

export default VideoPlayerControls;
