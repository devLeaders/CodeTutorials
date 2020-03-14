import React from "react";
import styled from "styled-components";

const ToogleButton = styled.button`
  margin-top: 5px;
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Img = styled.img`
  opacity: 0.7;
`;

export interface StartStopBtn {
  playStop(): void;
}

const StartStopBtn: React.SFC<StartStopBtn> = props => {
  return (
    <ToogleButton onClick={props.playStop}>
      <Img src="/play.svg" alt="play Stop" />
    </ToogleButton>
  );
};

export default StartStopBtn;
