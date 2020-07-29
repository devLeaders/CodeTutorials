import * as React from "react";
import styled from "styled-components";

import { Device } from "../../../styles/constans/Device";
import { BtnsType } from "./BtnsSection";
import { usePopUp } from "../../../hooks/usePopUp";

const Img = styled.img<{ name: string }>`
  width: 37px;
  margin-right: 13px;
  margin-left: 13px;
  cursor: pointer;

  @media ${Device.TABLET} {
    width: 50px;
  }
`;

const UserImg: React.SFC = () => {
  const { showPopUp } = usePopUp();

  return (
    <Img
      src="/img/navBarImg/Oval.png"
      name={BtnsType.USER}
      onClick={showPopUp}
    />
  );
};

export default UserImg;
