import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Colors from "../constans/Colors";
import Fonts from "../constans/Fonts";
import FilterMenu from "./FilterMenu";
import { device } from "../constans/device";
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
  width: 60%;
`;

const Button = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: ${Colors.nRed};
  border-radius: 6px;
  border: none;
  color: white;
  outline: none;
  transition: 0.3s ease;
  &.left {
    background-color: ${Colors.nWhite};
  }
  &.isActive {
    width: 7.5rem;
    height: 2.3rem;
    background-color: ${Colors.nLightRed};
  }
  &.isActive span {
    color: ${Colors.nBlack};
  }
  @media ${device.tablet} {
    width: 10rem;
    height: 3rem;
    &.isActive {
      width: 11rem;
      height: 3.5rem;
      background-color: ${Colors.nLightRed};
    }
  }
`;
const Span = styled.span`
  color: white;
  &.left {
    color: black;
  }
  @media ${device.tablet} {
    font-size: ${Fonts.desktopMedium};
  }
`;

const FiltrationBtns: React.SFC<FiltrationBtnsProps> = () => {
  const [filterIsActive, setFilterIsActive] = useState(false);

  const handleFilterOptions = React.useCallback(() => {
    setFilterIsActive(!filterIsActive);
  }, [filterIsActive]);

  return (
    <PositionWrapper>
      <Wrapper>
        <Div>
          <Button className="left">
            <Span className="left">KOLEKCJA</Span>
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
