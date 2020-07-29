import React from "react";
import styled from "styled-components";
import { Colors } from "../../styles/constans/Colors";
import { FontSize } from "../../styles/constans/FontSize";
import ErrorMsg from "./ErrorMsg";

const Wrapper = styled.div`
  position: relative;
`;
const Field = styled.input<{ icon: string; error: string }>`
  width: 100%;
  outline: 0;
  border: 0;
  transition: 0.5s ease-in;
  border-bottom: ${({ error }) =>
    error ? `2px solid red` : `2px solid ${Colors.nGrey}`};
  padding-bottom: 8px;
  margin-bottom: 50px;
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
  type: string;
  placeholder: string;
  icon: string;
  error: string;
}
const Input: React.FC<FieldInterface> = ({
  field,
  type,
  placeholder,
  icon,
  error,
}) => {
  return (
    <Wrapper>
      {error && <ErrorMsg error={error} />}
      <Field
        type={type}
        placeholder={placeholder}
        icon={icon}
        error={error}
        {...field}
      />
    </Wrapper>
  );
};
export default Input;
