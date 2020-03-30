import * as React from "react";
import { useRef, } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux"
import { getMovieState } from "../../actions/ReduxActions"
import { device } from "../../../constans/device"
import { useTimeBarAction } from "../../actions/EventController"

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
  const videoTime = useSelector(state => getMovieState(state).videoTime)
  const smallVideoTime = useSelector(state => getMovieState(state).smallVideoTime)
  const dispatch = useDispatch()
  const newTime = small ? smallVideoTime + "%" : videoTime + "%";
  const { handleMouseUpDown, handleMouseMoveAndClick } = useTimeBarAction(TimeBarRef, small)


  return (
    <Wrapper
      small={small}
      ref={TimeBarRef}
      onClick={handleMouseMoveAndClick}
      onMouseMove={handleMouseMoveAndClick}
      onMouseDown={handleMouseUpDown}
    >
      <TimePlayedBar videoTime={newTime} />
    </Wrapper>
  )
}

export default TimeBar;
