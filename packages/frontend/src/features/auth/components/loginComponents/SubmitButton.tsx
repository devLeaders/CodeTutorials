
import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import {Colors} from '../../../common/styles/constans/Colors';

const Btn = styled.button`
  width: 100%;
  height: 60px;
  color: ${Colors.nGrey};
  width: 100%;
  background-color: ${Colors.nRed};
  font-family:${FontFamily.openSansFont};
  font-size: ${FontSize.subtitleMobile};
  text-decoration: none;
  text-align: right;
  border: none;
  border-radius: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: block;
  z-index: 0;

  &:before{
    display: block;
    position: absolute;
    content: "";
    width: 110%;
    height: 0;
    padding-bottom: 110%;
    border-radius: 50%;
    top: 0%;
    left: 50%;
    background-color: ${Colors.nGrey};
    opacity: .1;
    transform: translate(-50%, -50%) scale(0, 0);
    transition: transform .3s ease 0s;
    z-index: -1;
}
  &:hover{
    cursor: pointer;
    color: ${Colors.nWhite};
    &:before{
      opacity: 0.15;
      transform: translate(-50%, -50%) scale(1, 1);
      transition: transform .3s ease 0s};
      }
`;

const Arrow = styled.span`
position: absolute;
right: 30px;
`;

const SubmitButton: React.FC = (props: any) => {

  return (
    <Btn type="submit">Zaloguj<Arrow>></Arrow></Btn>
  )
}

export default SubmitButton;