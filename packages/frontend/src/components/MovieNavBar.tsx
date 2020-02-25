import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import Colors from "../constans/Colors";
import BurgerNavigation from "../components/BurgerNavigation";
import { device } from "../constans/device";

const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  min-height: 7vh;
  width: 100%;
  background-color: ${Colors.nGrey};
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const MovieSearch = styled.input`
  margin-left: 20px;
  height: 25px;
  width: 100px;
`;
const Section = styled.div``;
const BurgerBtn = styled.button`
  cursor: pointer;
  display: flex;
  background-color: ${Colors.nGrey};
  border: 0;
  margin-right: 20px;
  padding: 3px;
  outline: none;
  &:active {
  }
`;
const HamburgerBox = styled.span`
  padding: 4px;
  display: inline-block;
  width: 30px;
  height: 20px;
  position: relative;
  border: none;
`;
const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${(props: { active: boolean }) =>
    props.active ? "transparent" : "#fff"};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.4s ease;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transition: 0.3s ease;
  }
  &:before {
    top: -10px;
    transform: ${(props: { active: boolean }) =>
      props.active ? "translateY(10px) rotate(45deg)" : ""};
  }
  &:after {
    top: 10px;
    transform: ${(props: { active: boolean }) =>
      props.active ? "translateY(-10px) rotate(-45deg)" : ""};
  }
`;
export interface MovieNavBarProps {}

const MovieNavBar: React.SFC<MovieNavBarProps> = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  const handleBurgerMenu = React.useCallback(() => {
    setBurgerIsActive(!burgerIsActive);
  }, [burgerIsActive]);
  return (
    <>
      <NavWrapper>
        <MovieSearch placeholder="Wyszukaj film"></MovieSearch>
        <Section>
          <BurgerBtn onClick={handleBurgerMenu}>
            <HamburgerBox>
              <HamburgerInner active={burgerIsActive}></HamburgerInner>
            </HamburgerBox>
          </BurgerBtn>
        </Section>
      </NavWrapper>
      <BurgerNavigation isActive={burgerIsActive}></BurgerNavigation>
    </>
  );
};

export default MovieNavBar;
