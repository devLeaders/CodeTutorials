import * as React from "react";
import styled from "styled-components";
import { Device } from "../../../styles/constans/Device";
import {Colors} from "../../../styles/constans/Colors";
import BtnsSection from "./BtnsSection";
import UserName from "./UserName"
import UserImg from "./UserImg";


const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 55px;
  background-color: ${Colors.VERY_LIGHT_GRAY};
  max-width:443px;
  @media ${Device.LAPTOP} {
    height: 112px;
  }
`;

const NavBarContainer: React.FC<any> = () => {
  return (

    <Wrapper>
      <BtnsSection />
      <UserName name="Sebastian"/>
      <UserImg />
    </Wrapper>
   
  );
};

export default NavBarContainer;
