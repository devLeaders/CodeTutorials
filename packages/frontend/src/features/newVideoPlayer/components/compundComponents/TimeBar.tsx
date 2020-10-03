import React, { useRef } from "react";
import styled from "styled-components";
import { useTimeBarActions } from "../../hooks/useTimebarActions";
import TimeBarInner from "../DumbComponents/TimeBar";

const Timebar: React.FC = () => {
  const timebarRefInner = useRef<HTMLDivElement | null>(null);
  const timebarRefContainer = useRef<HTMLDivElement | null>(null);

  useTimeBarActions(timebarRefInner, timebarRefContainer);

  return (
    <Wrapper ref={timebarRefContainer}>
      <TimeBarInner ref={timebarRefInner} videoProgress={"12"} />
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
