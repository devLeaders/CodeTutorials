import * as React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";

import { getMovieState } from "../../actions/ReduxActions"
import * as moment from "moment"

const Time = styled.p`
  font-size: 8px;
  color: white;
`;

const Timer: React.SFC = () => {
  const videoTime = useSelector(state => getMovieState(state).videoTime)


  return (
    <div>
      <Time></Time>
    </div>
  );
};

export default Timer;
