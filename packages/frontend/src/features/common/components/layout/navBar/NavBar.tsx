import * as React from "react";
import styled from "styled-components";
import { Device } from "../../../styles/constans/Device";
import {Colors} from "../../../styles/constans/Colors";
import BtnsSection from "./BtnsSection";
import UserName from "./UserName"
import UserImg from "./UserImg";


const Wrapper = styled.div<{header?: boolean, singleMovie?: boolean}>`
  display: ${({header}) => header ? "flex" : "none"};
  justify-content: flex-end;
  align-items: center;
  height: 55px;
  max-width:443px;
  @media ${Device.LAPTOP} {
    background-color: ${Colors.VERY_LIGHT_GRAY};
    display: ${({header}) => header ? "none" : "flex"};
    height: 112px;
  }
`;
interface HeaderProps {
  header?: boolean
}
const NavBar: React.FC<HeaderProps> = ({header}) => {
  return (

    <Wrapper header={header}>
      <BtnsSection/>
      <UserName name="Sebastian"/>
      <UserImg />
    </Wrapper>
   
  );
};

export default NavBar;
