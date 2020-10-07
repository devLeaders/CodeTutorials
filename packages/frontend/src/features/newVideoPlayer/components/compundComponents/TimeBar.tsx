import React, { useRef } from "react";
import styled from "styled-components";
import { Colors } from "../../../common/styles/constans/Colors";
import { Device } from "../../../common/styles/constans/Device";
import { useTimeBarActions } from "../../hooks/useTimebarActions";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import TimeBarInner from "../DumbComponents/TimeBar";

const Timebar: React.FC = () => {
  const { name } = useVideoPlayerContext();
  const timebarRefInner = useRef<HTMLDivElement | null>(null);
  const timebarRefContainer = useRef<HTMLDivElement | null>(null);
  const { videoProgress } = useTimeBarActions(timebarRefInner, timebarRefContainer, name);

  return (
    <Wrapper ref={timebarRefContainer}>
      <TimeBarInner ref={timebarRefInner} videoProgress={videoProgress} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width:100%;
  height: 2px;
  bottom: 18px;
  background-color: ${Colors.nBlack};
  cursor: pointer;
  z-index:2;
  @media ${Device.TABLET}{
    height: 3px;
  };
  @media ${Device.LAPTOP}{
    height: 4px;
  };
`;
export default Timebar;
