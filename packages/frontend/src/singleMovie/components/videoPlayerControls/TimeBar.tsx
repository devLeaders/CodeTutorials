import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 3px;
  width: 100%;
  background-color: black;
`;
const TimePlayedBar = styled.div<{ videoTime: string }>`
  height: 3px;
  width: ${props => (props.videoTime ? props.videoTime : 0)};
  background-color: orange;
`;

export interface TimeBarProps {
  videoTime: string;
}

const TimeBar: React.SFC<TimeBarProps> = props => {
  const { videoTime } = props;

  return (
    <Wrapper>
      <TimePlayedBar videoTime={videoTime} />
    </Wrapper>
  );
};

export default TimeBar;
