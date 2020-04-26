import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { Colors } from "../../common/styles/constans/Colors";

const Btn = styled.button<{isActive: boolean}>`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  border: none;
  outline: none;
  background-color: ${({isActive}) => isActive ? "black" : "white"};
  color: ${({isActive}) => isActive ? "white" : "black"};
  padding: 14px 8px;
  box-shadow: 0px 2px 8px 0px ${Colors.OPACITY_GRAY};
  border-radius: 7px;
  margin-inline: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover{
    transform: scale(1.1)
  }
`;
const CategorieTxt = styled.p`
  font-size: ${FontSize.SMALL};
`;
export interface CategorieBtnProps {
  categorie: string;
}

const CategorieBtn: React.SFC<CategorieBtnProps> = ({ categorie }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <Btn onClick={handleClick} isActive={isActive}>
      <CategorieTxt>{categorie}</CategorieTxt>
    </Btn>
  );
};

export default CategorieBtn;
