import React, { useRef } from "react";
import styled from "styled-components";
import { useTimeBarActions } from "../../hooks/useTimebarActions";
import { useVideoPlayerActions } from "../../hooks/useVideoPlayerActions";
import TimeBarInner from "../DumbComponents/TimeBar";

const Timebar: React.FC = () => {
  const timebarRefInner = useRef<HTMLDivElement | null>(null);
  const timebarRefContainer = useRef<HTMLDivElement | null>(null);
  const { state } = useVideoPlayerActions();
  useTimeBarActions(timebarRefInner, timebarRefContainer);

  const time: string = state.videoTime * 10 + "%";
  return (
    <Wrapper ref={timebarRefContainer}>
      <TimeBarInner ref={timebarRefInner} videoProgress={time} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 8px;
  background: grey;
  cursor: pointer;
`;
export default Timebar;
