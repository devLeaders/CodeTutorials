import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import Colors from "../constans/Colors";
import BurgerNavigation from "../components/BurgerNavigation";

export interface MovieNavBarProps {}

const NavWrapper = styled.div`
  display: flex;
  height: 8vh;
  width: 100%;
  background-color: ${Colors.nBlack};
  justify-content: space-around;
  align-items: center;
  z-index: 2;
`;

const MovieSearch = styled.input`
  height: 4vh;
  width: 50vw;
`;

const BurgerBtn = styled.button`
  cursor: pointer;
  display: flex;
  background-color: black;
  border: 0;
  margin: 0;
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
  background-color: black;
`;
const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: #fff;
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
  }
  &:after {
    top: 10px;
  }
  &.isActive {
    background-color: transparent;
    &:before {
      transform: translateY(10px) rotate(45deg);
    }
    &:after {
      transform: translateY(-10px) rotate(-45deg);
    }
  }
`;

const MovieNavBar: React.SFC<MovieNavBarProps> = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const handleBurgerMenu = () => {
    setBurgerIsActive(!burgerIsActive);
  };
  return (
    <>
      <NavWrapper>
        <BurgerBtn onClick={handleBurgerMenu}></BurgerBtn>
        <MovieSearch placeholder="Wyszukaj film"></MovieSearch>
        <BurgerBtn onClick={handleBurgerMenu}>
          <HamburgerBox>
            <HamburgerInner
              className={burgerIsActive ? "isActive" : ""}
            ></HamburgerInner>
          </HamburgerBox>
        </BurgerBtn>
      </NavWrapper>
      <BurgerNavigation isActive={burgerIsActive}></BurgerNavigation>
    </>
  );
};

export default MovieNavBar;
