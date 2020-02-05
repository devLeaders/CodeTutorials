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
  width: 12vw;
  height: 6vh;
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
        <BurgerBtn onClick={handleBurgerMenu}></BurgerBtn>
      </NavWrapper>
      <BurgerNavigation isActive={burgerIsActive}></BurgerNavigation>
    </>
  );
};

export default MovieNavBar;
