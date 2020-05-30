import * as React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import {Colors} from "../../../styles/constans/Colors"
import {Device} from "../../../styles/constans/Device"
import Title from "./Title"

const Wrapper = styled.div`
  width: 100%;
  @media ${Device.LAPTOP} {
      position:fixed;
      right:0;
      max-width: 443px;
      border-top: 2px solid ${Colors.BLACK};
      border-bottom: 2px solid ${Colors.BLACK};
  }
`;
const Nav = styled.ul`
  display: flex;
`;    

const items = ["Opis", "Zadania", "Notatki"];

const AsideNavigation: React.SFC = () => {
  const [isActive, setIsActive] = useState("Opis");

  const handleClick = useCallback((e: any) => {
    console.log(e.target.title)
    setIsActive(e.target.title)
  }, [])
  
  return (
    <Wrapper>
      <Nav>
        {items.map((item: string) => (
          <NavItem title={item} handleClick={handleClick} isActive={isActive} key={item}/>
        ))}
      </Nav>
      <Title title="Docker od podstaw"/>
    </Wrapper>
  );
};

export default AsideNavigation;
