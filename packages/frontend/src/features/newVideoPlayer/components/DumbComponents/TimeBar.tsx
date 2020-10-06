import React from "react";
import styled from "styled-components";
import { Device } from "../../../common/styles/constans/Device";
import { ITimeBar } from "../../models/video.type";

const Timebar = React.forwardRef<HTMLDivElement, ITimeBar>(({ videoProgress }, ref) => {
  return <TimePlayedBar videoProgress={videoProgress} ref={ref} />;
});

const TimePlayedBar = styled.div<{ videoProgress: string }>`
  width: ${({ videoProgress }) => (videoProgress ? videoProgress : 0)};
  height: 2px;
  background-color: purple;
  @media ${Device.TABLET}{
    height: 3px;
  };
  @media ${Device.LAPTOP}{
    height: 4px;
  };
  
`;
export default Timebar;
