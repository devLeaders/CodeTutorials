import * as React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";
import { useState, useEffect } from "react";

import { getMovieState } from "../../actions/ReduxActions"
import moment, { duration } from "moment"
import { getVideoDuration } from "../../actions/videoActionController"
import { device } from "../../../constans/device"



const Time = styled.p`
  font-size: 8px;
  color: white;
  @media ${device.TABLET}{
    font-size: 10px
  }
  @media ${device.LAPTOP}{
    font-size: 18px
  }
`;

interface TimerProps {
  duration?: string
}

const Timer: React.SFC<TimerProps> = () => {
  const [videoDuration, setVideoDuration] = useState(0)
  const videoTime = Math.floor(useSelector(state => getMovieState(state).videoTime) / 10)
  const currentTime = moment(videoTime, "ss").format("mm:ss")

  return (

    <Time>{currentTime}</Time>

  );
};

export default Timer;
