import * as React from "react";
import styled from "styled-components";
import Colors from "../constans/Colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 60%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: ${Colors.nBlack};
  transform: translateY(-100%);
  transition: transform 0.6s ease;
  border: 1px solid #aaa;
  border-top: 3px solid white;
  color: #ccc;
  opacity: 0.9;

  &.isActive {
    transform: translateY(25%);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Li = styled.li`
  padding: 2vh 1vw;
  list-style-type: none;
  &:hover {
    color: #fff;
  }
`;
const Footer = styled.footer`
  align-self: center;
`;
export interface BurgerNavigationProps {
  isActive: boolean;
}

const BurgerNavigation: React.SFC<BurgerNavigationProps> = props => {
  return (
    <Wrapper className={props.isActive ? "isActive" : ""}>
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
