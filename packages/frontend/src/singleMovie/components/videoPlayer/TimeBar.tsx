import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
position: absolute;
bottom: 0;
  height: 3px;
  width: 100%;
  background-color: black;
  cursor: pointer;
`;
const TimePlayedBar = styled.div<{ videoTime: string }>`
  height: 3px;
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
  const { videoTime, click } = props;

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <Wrapper
      onClick={click}
      onMouseMove={mouseDown ? click : undefined}
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <TimePlayedBar videoTime={videoTime} />
    </Wrapper>
  );
});

export default TimeBar;
