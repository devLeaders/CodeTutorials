import * as React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 37px;
  height: 36px;
  margin-right: 13px;
  margin-left: 13px;
`;

const UserImg: React.SFC = () => {
  return <Img src="/img/navBarImg/Oval.png" />;
};

export default UserImg;
