import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

export interface TimerProps {
  videoTime?: any;
  videoDuration?: any;
}
const Time = styled.p`
  color: white;
`;

const Timer: React.SFC<TimerProps> = props => {
  const { videoTime, videoDuration } = props;
  let seconds;
  let minutes;
  if (videoTime !== undefined) {
    seconds = Math.floor((videoTime % (10 * 60)) / 10);
    minutes = Math.floor((videoTime % (10 * 60 * 60)) / (10 * 60));
  } else {
    seconds = Math.floor((videoDuration % (1 * 60)) / 1);
    minutes = Math.floor((videoDuration % (1 * 60 * 60)) / (1 * 60));
  }
  let timeSeconds = seconds < 10 ? `0${seconds}` : seconds;
  let timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return (
    <div>
      <Time>{`${timeMinutes}:${timeSeconds}`}</Time>
    </div>
  );
};

export default Timer;
