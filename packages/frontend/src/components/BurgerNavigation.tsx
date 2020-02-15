import * as React from "react";
import styled from "styled-components";
import Colors from "../constans/Colors";
import { device } from "../constans/device";

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
  transform: translateY(-100%);
  transition: transform 0.6s ease;
  border: 1px solid #666;
  border-top: 3px solid white;
  color: #ccc;
  opacity: 0.9;
  transform: ${(props: { active: boolean }) =>
    props.active ? "translateY(25%)" : ""};
  @media ${device.mobileM} {
    transform: ${(props: { active: boolean }) =>
      props.active ? "translateY(40%)" : ""};
  }
  @media ${device.tablet} {
    height: 300px;
    width: 40%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Li = styled.li`
  padding: 10px 7px;
  list-style-type: none;
  &:hover {
    color: #fff;
    background-color: black;
  }
  @media ${device.tablet} {
    font-size: 20px;
    padding: 20px 12px;
  }
`;
const Footer = styled.footer`
  align-self: center;
  @media ${device.tablet} {
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
        <Li>MOJE PAKIETY</Li>
        <Li>MOJE URZĄDZENIA</Li>
        <Li>MOJE DANE</Li>
        <Li>POMOC</Li>
      </Nav>
      <Footer>WYLOGUJ</Footer>
    </Wrapper>
  );
};

export default BurgerNavigation;
