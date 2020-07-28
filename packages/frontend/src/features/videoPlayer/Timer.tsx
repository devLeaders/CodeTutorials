import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

import { getMovieState } from "./actions/ReduxActions";
import moment from "moment";
import { Device } from "../common/styles/constans/Device";

const Time = styled.p`
  font-size: 8px;
  color: white;
  @media ${Device.TABLET} {
    font-size: 10px;
  }
  @media ${Device.LAPTOP} {
    font-size: 18px;
  }
`;

interface TimerProps {
  duration?: string;
}

const Timer: React.SFC<TimerProps> = () => {
  const videoTime = Math.floor(
    useSelector((state) => getMovieState(state).videoTime) / 10
  );
  const currentTime = moment(videoTime, "ss").format("mm:ss");

  return <Time>{currentTime}</Time>;
};

export default Timer;
