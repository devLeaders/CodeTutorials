import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 10px;
  width: 90%;
  background-color: black;
`;
const TimePlayed = styled.div`
  height: 10px;
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
