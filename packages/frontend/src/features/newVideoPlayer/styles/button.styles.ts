import styled from "styled-components";

export const Btn = styled.button<{ icon: string }>`
  width: 40px;
  height: 40px;
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;
  border: 0;
  background-position: center;
  cursor: pointer;
  outline: none;
`;
