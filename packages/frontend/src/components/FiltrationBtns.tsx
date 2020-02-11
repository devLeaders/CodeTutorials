import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Colors from "../constans/Colors";
import FilterMenu from "./FilterMenu";
export interface FiltrationBtnsProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.1rem;
  width: 100%;
`;
const PositionWrapper = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
`;
const Div = styled.div`
  width: 50%;
`;

const Button = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: ${Colors.nGrey};
  border: none;
  border-radius: 7%;
  color: white;
  opacity: 0.3;
  outline: none;
  transition: 0.3s ease;
  &.isActive {
    width: 7.5rem;
    height: 2.3rem;
    opacity: 1;
    background-color: ${Colors.nWhite};
  }
  &.isActive span {
    color: ${Colors.nBlack};
  }
`;
const Span = styled.span`
  color: white;
`;

const FiltrationBtns: React.SFC<FiltrationBtnsProps> = () => {
  const [filterIsActive, setFilterIsActive] = useState(false);
  const handleFilterOptions = () => {
    setFilterIsActive(!filterIsActive);
  };

  return (
    <PositionWrapper>
      <Wrapper>
        <Div>
          <Button
          // onClick={handleFilterOptions}
          // className={filterIsActive ? "isActive" : ""}
          >
            <Span>KOLEKCJA</Span>
          </Button>
        </Div>
        <Div>
          <Button
            onClick={handleFilterOptions}
            className={filterIsActive ? "isActive" : ""}
          >
            <Span>FILTRUJ</Span>
          </Button>
        </Div>
        <FilterMenu isActive={filterIsActive}></FilterMenu>
      </Wrapper>
    </PositionWrapper>
  );
};

export default FiltrationBtns;
