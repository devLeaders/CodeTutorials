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
    display: ${({singleMovie, header}) => (singleMovie && header) ? "none" : "flex" };
    background-color: ${({singleMovie}) => singleMovie ? `${Colors.VERY_LIGHT_GRAY}` : "none" };
    height: 112px;
  }
  @media ${Device.LAPTOP_L} {
    background-color: ${Colors.VERY_LIGHT_GRAY};
    display: ${({header}) => header ? "none" : "flex"};
  }
`;
interface HeaderProps {
  header?: boolean
  singleMovie?: boolean
}
const NavBar: React.FC<HeaderProps> = ({header, singleMovie}) => {
  return (

    <Wrapper header={header} singleMovie={singleMovie}>
      <BtnsSection singleMovie={singleMovie}/>
      <UserName name="Sebastian"/>
      <UserImg />
    </Wrapper>
   
  );
};

export default NavBar;
