import React from "react";
import styled from "styled-components";
import { useState } from "react";

import togglePlayPause from "../../actions/handleplayPause";

const ToogleButton = styled.button`
  margin-left: 10px;
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Img = styled.img`
  opacity: 0.7;
`;

export interface StartStopBtn {
  videoRef: any;
}

const StartStopBtn: React.SFC<StartStopBtn> = props => {
  const [isPaused, setIsPaused] = useState(true);
  const handleTooglePlayPause = () =>
    togglePlayPause(isPaused, setIsPaused, props.videoRef);
  const startStopImg = isPaused ? (
    <Img src="/play.svg" alt="play Stop" />
  ) : (
    <Img src="/pause.svg" alt="play Stop" />
  );
  return (
    <ToogleButton onClick={handleTooglePlayPause}>{startStopImg}</ToogleButton>
  );
};

export default StartStopBtn;
