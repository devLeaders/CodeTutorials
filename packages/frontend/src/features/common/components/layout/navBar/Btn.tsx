import * as React from "react";
import styled from "styled-components";


import { Device } from "../../../styles/constans/Device";

const Wrapper = styled.button`
  display: flex;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
const BtnImg = styled.img`
  @media ${Device.TABLET} {
    width: 28px;
  }
  @media ${Device.LAPTOP} {
    width: 34px;
  }
`;

export interface BtnProps {
  src: string;
  name: string
  showPopUp(e: any): void 
}

const Btn: React.SFC<BtnProps> = ({ src, name, showPopUp }) => {

  return (
    <Wrapper onClick={showPopUp} name={name}>
      <BtnImg src={src}/>
    </Wrapper>
  );
};

export default Btn;
