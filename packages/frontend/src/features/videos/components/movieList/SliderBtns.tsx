import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  top: 50%;
  right: 1%;
  z-index: 2;
  left: ${(props: { left?: any }) => (props.left ? "1%" : "")};
`;
const Img = styled.img<{name: string}>`
  color: white;
`;

export enum Directions {
  LEFT = "left",
  RIGHT = "right"
}

export interface SliderBtnsProps {
  onClick: any
}

const SliderBtns: React.SFC<SliderBtnsProps> = ({onClick}) => {
  return (
    <>
      <Button left onClick={onClick}>
        <Img src="img/left.svg" alt="arrow" name={Directions.LEFT}/>
      </Button>
      <Button onClick={onClick}>
        <Img src="img/right.svg" alt="arrow" name={Directions.RIGHT}/>
      </Button>
    </>
  );
};

export default SliderBtns;
