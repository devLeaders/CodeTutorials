import * as React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";
import { useState, useEffect } from "react";

import { getMovieState } from "../../actions/ReduxActions"
import moment, { duration } from "moment"
import { getVideoDuration } from "../../actions/videoActionController"

const Time = styled.p`
  font-size: 8px;
  color: white;
`;

interface TimerProps {
  duration?: string
}

const Timer: React.SFC<TimerProps> = () => {
  const [videoDuration, setVideoDuration] = useState(0)
  const videoTime = Math.floor(useSelector(state => getMovieState(state).videoTime) / 10)
  const currentTime = moment(videoTime, "ss").format("mm:ss")

  return (
    <div >
      <Time>{currentTime}</Time>
    </div>
  );
};

export default Timer;
