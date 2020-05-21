import * as React from "react";
import styled from "styled-components";
import { Device } from "../../../styles/constans/Device";
import {Colors} from "../../../styles/constans/Colors";
import BtnsSection from "./BtnsSection";
import UserName from "./UserName"
import UserImg from "./UserImg";
import Filters from '../../../../filters/components/Filters'
const NavBarWrapper = styled.div`
display:flex;
flex-direction:column;
/* background-color: ${Colors.VERY_LIGHT_GRAY}; */
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
const StyledFilters= styled.div`
  display: ${(props:{active:boolean}) => props.active ? 'block' : 'none'};
  position:fixed;
  right:0;
  top:55px;
  z-index:3;

  @media ${Device.tablet} {
    position:relative;
    right:0;
}
`

const NavBarContainer: React.FC<any> = (props:{filterIsOpen:boolean}) => {
  return (
    <NavBarWrapper>
    <Wrapper>
      <BtnsSection />
      <UserName name="Sebastian"/>
      <UserImg />
    </Wrapper>
    <StyledFilters active={props.filterIsOpen}>
     <Filters />
     </StyledFilters>
     </NavBarWrapper>
  );
};

export default NavBarContainer;
