import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { changeVideoTime } from "../../actions/videoActionController"
import { useSelector, useDispatch } from "react-redux"
import { getMovieState } from "../../actions/ReduxActions"
import { setVideoTime, setSmallVideoTime } from "../../../store/singleMovie/actions"
import { device } from "../../../constans/device"

const Wrapper = styled.div<{ small: string | undefined }>`
  position: absolute;
  top: ${props => props.small ? "100%" : "0"};
  height: 2px;
  width: 100%;
  background-color: black;
  cursor: pointer;
  transform: translateY(-100%);
  @media ${device.TABLET}{
    top: 100%;
    height: 3px;
  }
  @media ${device.LAPTOP}{
    height: 4px;
  }
`;
const TimePlayedBar = styled.div<{ videoTime: any }>`
  height: 2px;
  width: ${props => (props.videoTime ? props.videoTime : 0)};
  background-color: purple;
  @media ${device.TABLET}{
    height: 3px;
  }
  @media ${device.LAPTOP}{
    height: 4px;
  }
`;

interface TimeBarProps {
  small?: string;
}

const TimeBar: React.SFC<TimeBarProps> = (props) => {
  const { small } = props
  const TimeBarRef: any = useRef()
  const [mouseDown, setMouseDown] = useState(false);
  const videoTime = useSelector(state => getMovieState(state).videoTime)
  const smallVideoTime = useSelector(state => getMovieState(state).smallVideoTime)
  const isMinimized = useSelector(state => getMovieState(state).isMinimized)
  const dispatch = useDispatch()
  const newTime = small ? smallVideoTime + "%" : videoTime + "%";

  const setTime = (time: number) => {
    if (small) {
      dispatch(setSmallVideoTime(time))
    } else {
      dispatch(setVideoTime(time))
    }
  }
  const handleMouseDown = () => {
    setMouseDown(true);
    // console.log("ok")
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  const handleClick = (e: any) => {
    changeVideoTime(e, setTime, TimeBarRef, "", small)
  }
  const handleOnMouseMove = (e: any) => {
    if (mouseDown) {
      changeVideoTime(e, setTime, TimeBarRef, "onMove", small)
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleOnMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  })

  return (
    <Wrapper
      small={small}
      ref={TimeBarRef}
      onClick={handleClick}
      onMouseMove={mouseDown ? handleOnMouseMove : undefined}
      onMouseDown={handleMouseDown}
    >
      <TimePlayedBar videoTime={newTime} />
    </Wrapper>
  )
}

export default TimeBar;
