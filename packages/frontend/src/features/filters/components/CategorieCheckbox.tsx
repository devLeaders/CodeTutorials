import  React, {useCallback} from "react";
import styled, {css} from "styled-components";
import { Field } from "formik";

import { FontSize } from "../../common/styles/constans/FontSize";
import { Colors } from "../../common/styles/constans/Colors";
import { Device } from "../../common/styles/constans/Device";


const CheckboxLabel = styled.label<{ isActive: boolean }>`
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
  transition: ease 0.2s;
  &:hover {
    transform: scale(1.1);
  };

  ${({isActive}) => (
    isActive && css`
      background-color: ${Colors.BLACK};
      color: ${Colors.WHITE};
    `
  )}
`;

const InvisibleCheckbox = styled.input`
  display: none;
`;
const CategorieTxt = styled.p`
  font-size: ${FontSize.SMALL};
  @media ${Device.tablet} {
    font-size: ${FontSize.paragraphDesktop};
  }
`;

const filterActive = (activeCategories: Array<number>, value: number) =>
    activeCategories.filter((item: number) => item != value);


export interface CategorieBtnProps {
  name: string;
  categories: any;
  value: number;
  setValues: any
  submit: any
  // React.MouseEvent
}

const CategorieCheckbox: React.SFC<CategorieBtnProps> = ({
  name,
  categories,
  value,
  setValues,
  submit
}) => {
  

  const handleChange = useCallback((e: any) => {
    const value = parseInt(e.target.value)
    categories.includes(value)
      ? (setValues({categories: filterActive(categories, value)}))
      : (setValues({categories: [...categories, value]}));
    submit()
  }, [categories]);

  return (
    <Field name={name}>
      {() => (
        <CheckboxLabel isActive={categories.includes(value)}>
          <InvisibleCheckbox
            type="checkbox"
            value={value}
            checked={categories.includes(value)}
            onChange={handleChange}
          />
          <CategorieTxt>{name}</CategorieTxt>
        </CheckboxLabel>
      )}
    </Field>
  );
};

export default CategorieCheckbox;
