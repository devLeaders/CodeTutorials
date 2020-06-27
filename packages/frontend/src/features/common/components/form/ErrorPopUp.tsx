import React from "react";
import styled from "styled-components";
import { fontWeight } from "../../styles/constans/fontWeight";
import { FontSize } from "../../styles/constans/FontSize";
import { Colors } from "../../styles/constans/Colors";
import { Device } from "../../styles/constans/Device";
const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: -5px;
  background-color: ${Colors.nRed};
  min-height: 27px;
  width: 27px;
  padding: 4px 10px;
  border-radius: 10px;
  color: ${Colors.WHITE};
  display: flex;
  transition: 0.2s ease-in;
  justify-content: center;
  :hover {
    justify-content: space-between;
    border-radius: 5px;
    width: 100%;
  }
  @media ${Device.MOBILE_L} {
    max-height: 27px;
  }
`;
const ErrMsg = styled.h2`
  display: none;
  opacity: 0;
  transition: 1s ease-in;
  ${Wrapper}:hover & {
    opacity: 1;
    display: block;
  }
`;
const Error = styled.div`
  font-size: ${FontSize.XXMEDIUM};
  margin: auto 0;
  font-weight: ${fontWeight.BOLD};
`;
interface ErrorPopUpInterface {
  error: string;
}

const ErrorPopUp: React.FC<ErrorPopUpInterface> = ({ error }) => {
  return (
    <Wrapper>
      <ErrMsg>{error}</ErrMsg>
      <Error>X</Error>
    </Wrapper>
  );
};
export default ErrorPopUp;
