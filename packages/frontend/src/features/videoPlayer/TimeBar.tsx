import * as React from "react";
import { useRef, } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"
import { getMovieState } from "./actions/ReduxActions"
import { Device } from "../common/styles/constans/Device"
import { useTimeBarAction } from "./actions/EventController"

const Wrapper = styled.div<{ small: string | undefined }>`
  position: absolute;
  top: ${props => props.small ? "100%" : "0"};
  height: 2px;
  width: 100%;
  background-color: black;
  cursor: pointer;
  transform: translateY(-100%);
  @media ${Device.TABLET}{
    top: 100%;
    height: 3px;
  }
  @media ${Device.LAPTOP}{
    height: 4px;
  }
`;
const TimePlayedBar = styled.div.attrs<{videoTime:string}>((props) => ({
  style: {
      width: props.videoTime ? props.videoTime : 0},
  }))<{videoTime:string}>`
    height: 2px;
    background-color: purple;
    @media ${Device.TABLET}{
      height: 3px;
    }
    @media ${Device.LAPTOP}{
      height: 4px;
    }  
`;

interface TimeBarProps {
  small?: string;
}

const TimeBar: React.FC<TimeBarProps> = (props) => {
  const { small } = props
  const TimeBarContainer = useRef<HTMLDivElement>(null)
  const TimeBarRef = useRef<HTMLDivElement>(null)
  const videoTime = useSelector(state => getMovieState(state).videoTime)
  const smallVideoTime = useSelector(state => getMovieState(state).smallVideoTime)
  const newTime = small ? smallVideoTime + "%" : videoTime + "%";
  const { handleMouseUpDown, handleMouseMoveAndClick } = useTimeBarAction(TimeBarRef, TimeBarContainer, small)


  return (
    <Wrapper
      small={small}
      ref={TimeBarContainer}
      onClick={handleMouseMoveAndClick}
      onMouseMove={handleMouseMoveAndClick}
      onMouseDown={handleMouseUpDown}
    >
      <TimePlayedBar videoTime={newTime} ref={TimeBarRef}/>
    </Wrapper>
  )
}

export default TimeBar;
