import React from "react";
import styled from "styled-components";
import { Colors } from "../../styles/constans/Colors";
import { FontFamily } from "../../styles/constans/FontFamily";
import { FontSize } from "../../styles/constans/FontSize";

const Input = styled.input<{ icon: string }>`
  width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 2px solid ${Colors.nGrey};
  padding-bottom: 8px;
  margin-bottom: 30px;
  font-size: ${FontSize.XXXXMEDIUM};
  background-image: ${({ icon }) => `url(${icon})`};
  background-position: left top;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  padding-left: 25px;

  cursor: pointer;
  &::placeholder {
    color: ${Colors.nGrey};
  }
`;
interface FieldInterface {
  field: any;
  form: any;
  type: string;
  placeholder: string;
  icon: string;
}
const StyledField: React.FC<FieldInterface> = ({
  field,
  form,
  type,
  placeholder,
  icon,
}) => {
  // const { placeholder, icon, type } = props;
  return <Input type={type} placeholder={placeholder} icon={icon} {...field} />;
};
export default StyledField;
