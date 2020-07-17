import React from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { Colors } from "../../common/styles/constans/Colors";
import { Device } from "../../common/styles/constans/Device";

const CheckboxLabel = styled.label`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  border: none;
  outline: none;
  background-color: ${Colors.WHITE};
  color: ${Colors.BLACK};
  padding: 14px 8px;
  box-shadow: 0px 2px 8px 0px ${Colors.OPACITY_GRAY};
  border-radius: 7px;
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  cursor: pointer;
  z-index: 10;
  transition: ease 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const CategorieTxt = styled.p`
  font-size: ${FontSize.SMALL};
  @media ${Device.tablet} {
    font-size: ${FontSize.paragraphDesktop};
  }
`;

const InvisibleCheckbox = styled.input`
  display: none;
  &:checked + ${CheckboxLabel} {
    background-color: black;
    & ${CategorieTxt}{
      color: white
    }
  }
`;


export interface CategorieBtnProps {
  value: number;
  text: string;
  checked:boolean;
  field: any;
}

const CategorieCheckbox: React.SFC<CategorieBtnProps> = ({
  value,
  text,
  checked,
  field,
}) => {
  return (
    <>
      <InvisibleCheckbox
        type="checkbox"
        id={value}
        name={field.name}
        checked={checked}
        {...field}
      />
      <CheckboxLabel htmlFor={value.toString()}>
        <CategorieTxt>{text}</CategorieTxt>
      </CheckboxLabel>
    </>
  );
};

export default CategorieCheckbox;
