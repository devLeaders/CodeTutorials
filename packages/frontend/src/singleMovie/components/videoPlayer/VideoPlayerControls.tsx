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
  padding: 5px;
  align-items: center;
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
        <Timer duration="duration" />
      </RightPanel>
    </ControlsWrapper>
  );
};

export default VideoPlayerControls;
