import * as React from "react";
import styled from "styled-components";

import { Device } from "../../../styles/constans/Device";

const Img = styled.img`
  width: 37px;
  margin-right: 13px;
  margin-left: 13px;
  @media ${Device.TABLET} {
    width: 50px;
  }
`;

const UserImg: React.SFC = () => {
  return <Img src="/img/navBarImg/Oval.png" />;
};

export default UserImg;
