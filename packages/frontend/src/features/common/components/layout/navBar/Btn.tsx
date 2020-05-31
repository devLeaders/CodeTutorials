import * as React from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import {changeType} from '../../../../../config/redux/actions'
import { Device } from "../../../styles/constans/Device";

const Wrapper = styled.button`
  display: flex;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
const BtnImg = styled.img`
  @media ${Device.tablet} {
    width: 28px;
  }
  @media ${Device.LAPTOP} {
    width: 34px;
  }
`;

export interface BtnProps {
  src: string;
  value: string;
}

const Btn: React.SFC<BtnProps> = ({ src, value }) => {
  const dispatch = useDispatch()
  return (
    <Wrapper onClick={() => dispatch(changeType(value))}>
      <BtnImg src={src} />
    </Wrapper>
  );
};

export default Btn;
