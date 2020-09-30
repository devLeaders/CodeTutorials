import React from "react";
import styled from "styled-components";
import { ITimeBar } from "../../models/video.type";

const Timebar = React.forwardRef<HTMLDivElement, ITimeBar>(({ videoProgress }, ref) => {
  return <TimePlayedBar videoProgress={videoProgress} ref={ref} />;
});

const TimePlayedBar = styled.div<{ videoProgress: string }>`
  width: ${({ videoProgress }) => (videoProgress ? videoProgress : 0)};
  height: 4px;
  background-color: purple;
`;
export default Timebar;
