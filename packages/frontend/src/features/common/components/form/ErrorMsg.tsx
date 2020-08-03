import React from "react";
import styled from "styled-components";
import { Colors } from "../../styles/constans/Colors";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: -27px;
  width: 100%;
  color: ${Colors.nRed};
  text-align: center;
  transition: 0.2s ease-in;
  opacity: 0.7;
`;

interface ErrorPopUpInterface {
  error: string;
}

const ErrorMsg: React.FC<ErrorPopUpInterface> = ({ error }) => {
  return (
    <Wrapper>
      <h2>{error}</h2>
    </Wrapper>
  );
};
export default ErrorMsg;
