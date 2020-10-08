import React, { useRef } from "react";
import { useTimeBarActions } from "../../hooks/useTimebarActions";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import { Wrapper } from "../../styles/timebar.styles";
import TimeBarInner from "../DumbComponents/TimeBar";

const Timebar: React.FC = () => {
  const { name } = useVideoPlayerContext();
  const timebarRefInner = useRef<HTMLDivElement | null>(null);
  const timebarRefContainer = useRef<HTMLDivElement | null>(null);
  const { videoProgress, handleMouseMoveAndClick, handleMouseUpDown } = useTimeBarActions(timebarRefInner, timebarRefContainer, name);

  return (
    <Wrapper 
      ref={timebarRefContainer}
      onClick={handleMouseMoveAndClick}  
      onMouseMove={handleMouseMoveAndClick}
      onMouseDown={handleMouseUpDown}>
      <TimeBarInner ref={timebarRefInner} videoProgress={videoProgress} />
    </Wrapper>
  );
};

export default Timebar;
