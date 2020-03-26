import * as React from "react";
import styled from "styled-components";

import Timer from "./Timer";
import MuteBtn from "../videoPlayer/videoPlayerButtons/MuteBtn"
import PlayBtn from "../videoPlayer/videoPlayerButtons/PlayBtn"
import FullscreenBtn from "../videoPlayer/videoPlayerButtons/FullscreenBtn"
import MinimizeBtn from "../videoPlayer/videoPlayerButtons/MinimizeBtn"
import { device } from "../../../constans/device"

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
  margin-left: 15px;
  @media ${device.TABLET}{
      margin-left: 34px;
  }
  @media ${device.LAPTOP}{
      margin-left: 60px;
  }
`;
const RightPanel = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  @media ${device.TABLET}{
    margin-right: 17px;
  }
  @media ${device.LAPTOP}{
    margin-right: 22px;
  }
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
