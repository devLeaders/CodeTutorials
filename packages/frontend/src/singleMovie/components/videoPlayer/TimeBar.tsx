import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { changeVideoTime } from "../../actions/videoActionController"
import { useSelector, useDispatch } from "react-redux"
import { getMovieState } from "../../actions/ReduxActions"
import { setVideoTime } from "../../../store/singleMovie/actions"

const Wrapper = styled.div`
position: absolute;
bottom: 0;
  height: 3px;
  width: 100%;
  background-color: black;
  cursor: pointer;
`;
const TimePlayedBar = styled.div<{ videoTime: any }>`
  height: 3px;
  width: ${props => (props.videoTime ? props.videoTime : 0)};
  background-color: orange;
`;



const TimeBar: React.SFC = (props: any) => {
  const TimeBarRef: any = useRef()
  const [mouseDown, setMouseDown] = useState(false);
  const videoTime = useSelector(state => getMovieState(state).videoTime)
  const dispatch = useDispatch()
  const newTime = videoTime + "%";

  const setTime = (time: number) => {
    dispatch(setVideoTime(time))
  }
  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  const handleClick = (e: any) => {
    changeVideoTime(e, setTime, TimeBarRef)
  }

  return (
    <Wrapper
      ref={TimeBarRef}
      onClick={handleClick}
      onMouseMove={mouseDown ? handleClick : undefined}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <TimePlayedBar videoTime={newTime} />
    </Wrapper>
  )
}

export default TimeBar;
