import React from "react";
import { ITimeBar } from "../../models/video.type";
import { TimePlayedBar } from "../../styles/timebar.styles";

const Timebar = React.forwardRef<HTMLDivElement, ITimeBar>(({ videoProgress }, ref) => {
  return <TimePlayedBar videoProgress={videoProgress} ref={ref} />;
});

export default Timebar;
