import React from "react";
import styled from "styled-components";
import { FontFamily } from "../../styles/constans/FontFamily";
import { FontSize } from "../../styles/constans/FontSize";
import { Colors } from "../../styles/constans/Colors";

const Btn = styled.button`
  width: 100%;
  height: 60px;
  color: ${Colors.nGrey};
  background-color: ${Colors.LIGHT_PURPLE};
  font-family: ${FontFamily.MONTSERRAT};
  font-size: ${FontSize.MEDIUM};
  border: none;
  border-radius: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 0;
  &:before {
    position: absolute;
    content: "";
    width: 110%;
    height: 0;
    padding-bottom: 110%;
    border-radius: 50%;
    top: 0%;
    left: 50%;
    background-color: ${Colors.nGrey};
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(0, 0);
    transition: transform 0.3s ease 0s;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    color: ${Colors.nWhite};
    &:before {
      opacity: 0.15;
      transform: translate(-50%, -50%) scale(1, 1);
    }
  }
`;

const Arrow = styled.span`
  position: absolute;
  right: 30px;
`;
interface SubmitButtonInterface {
  title: string;
}

const SubmitButton: React.FC<SubmitButtonInterface> = ({ title }) => {
  return (
    <Btn type='submit'>
      {title}
      <Arrow>></Arrow>
    </Btn>
  );
};

export default SubmitButton;
