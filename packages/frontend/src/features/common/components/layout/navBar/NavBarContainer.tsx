import * as React from "react";
import styled from "styled-components";
import { Device } from "../../../styles/constans/Device";
import {Colors} from "../../../styles/constans/Colors";
import BtnsSection from "./BtnsSection";
import UserName from "./UserName"
import UserImg from "./UserImg";


const NavBarWrapper = styled.div`
display:flex;
flex-direction:column;
background-color: ${Colors.VERY_LIGHT_GRAY};
position:relative;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 55px;
  background-color: ${Colors.VERY_LIGHT_GRAY};
  @media ${Device.LAPTOP} {
    height: 112px;
  }
`;

const NavBarContainer: React.FC<any> = () => {
  return (
    <NavBarWrapper>
    <Wrapper>
      <BtnsSection />
      <UserName name="Sebastian"/>
      <UserImg />
    </Wrapper>

     </NavBarWrapper>
  );
};

export default NavBarContainer;
