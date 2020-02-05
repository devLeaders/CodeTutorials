import * as React from "react";
import styled from "styled-components";
import Colors from "../constans/Colors";
export interface FiltrationBtnsProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.3rem;
  width: 100%;
`;

const Button = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: ${Colors.nRed};
  border: 2px solid red;
  color: white;

  &:hover {
    background-color: red;
  }
`;

const FiltrationBtns: React.SFC<FiltrationBtnsProps> = () => {
  return (
    <Wrapper>
      <Button>KOLEKCJA</Button>
      <Button>FILTRUJ</Button>
    </Wrapper>
  );
};

export default FiltrationBtns;
