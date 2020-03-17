import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 6px;
  width: 100%;
  background-color: black;
  cursor: pointer;
`;
const TimePlayedBar = styled.div<{ videoTime: string }>`
  height: 6px;
  width: ${props => (props.videoTime ? props.videoTime : 0)};
  background-color: orange;
`;

export interface TimeBarProps {
  ref: any;
  videoTime: string;
  click(e: any): void;
}

const TimeBar: React.ForwardRefExoticComponent<TimeBarProps> = React.forwardRef<
  HTMLDivElement
>((props: any, ref: any) => {
  const [mouseDown, setMouseDown] = useState(false);
  const { videoTime, click, move } = props;

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <Wrapper
      onClick={e => click(e)}
      onMouseMove={e => mouseDown && click(e)}
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <TimePlayedBar videoTime={videoTime} />
    </Wrapper>
  );
});

export default TimeBar;
