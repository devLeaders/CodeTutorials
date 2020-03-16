import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 3px;
  width: 100%;
  background-color: black;
`;
const TimePlayed = styled.div`
  height: 3px;
  width: 40px;
  background-color: orange;
`;

export interface TimeBarProps {}

const TimeBar: React.SFC<TimeBarProps> = () => {
  return (
    <Wrapper>
      <TimePlayed />
    </Wrapper>
  );
};

export default TimeBar;
