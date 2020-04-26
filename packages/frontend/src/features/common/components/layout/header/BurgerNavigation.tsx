import * as React from "react";
import styled from "styled-components";
import {Colors} from "../../../styles/constans/Colors";
import { Device } from "../../../styles/constans/Device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 60%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${Colors.nBlack};
  transition: transform 0.6s ease;
  border: 1px solid #666;
  border-top: 3px solid white;
  color: #ccc;
  opacity: 0.9;
  transform: ${(props: { active: boolean }) =>
    props.active ? "translateY(25%)" : "translateY(-100%)"};
  @media ${Device.mobileM} {
    transform: ${(props: { active: boolean }) =>
    props.active ? "translateY(40%)" : "translateY(-100%)"};
  }
  @media ${Device.tablet} {
    height: 300px;
    width: 40%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 80%;
`;
const BurgerNavItem = styled.li`
  padding: 10px 7px;
  height: 25%;
  width: 100%;
  list-style-type: none;
  &:hover {
    background-color: ${Colors.nGrey};
  }
  @media ${Device.tablet} {
    font-size: 20px;
  }
`;
const Footer = styled.footer`
  height: 20%;
  width: 100%;
  padding: 10px 7px;
  &:hover {
    background-color: ${Colors.nGrey};
  }
  @media ${Device.tablet} {
    font-size: 20px;
  }
`;
export interface BurgerNavigationProps {
  isActive: boolean;
}

const BurgerNavigation: React.SFC<BurgerNavigationProps> = props => {
  return (
    <Wrapper active={props.isActive}>
      <Nav>
        <BurgerNavItem>MOJE PAKIETY</BurgerNavItem>
        <BurgerNavItem>MOJE URZĄDZENIA</BurgerNavItem>
        <BurgerNavItem>MOJE DANE</BurgerNavItem>
        <BurgerNavItem>POMOC</BurgerNavItem>
      </Nav>
      <Footer>WYLOGUJ</Footer>
    </Wrapper>
  );
};

export default BurgerNavigation;
