import * as React from "react";
import styled from "styled-components";

import Banner from "../banner/Banner";
import NavBar from "../navBar/NavBar";
import { Device } from "../../../styles/constans/Device";
import { Colors } from "../../../styles/constans/Colors";

const Wrapper = styled.header<{ opacity?: boolean}>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${Colors.WHITE};
  @media ${Device.LAPTOP} {
    background-color: ${({ opacity }) =>
    opacity ? `${Colors.WHITE}` : `${Colors.WHITE}CF`};
     width: calc(100% - 446px);
  }
`;

interface HeaderProps {
  opacity?: boolean;
}

const Header: React.SFC<HeaderProps> = ({ opacity}) => {
  return (
    <Wrapper opacity={opacity}>
      <Banner />
      <NavBar header={true} />
    </Wrapper>
  );
};

export default Header;
