import * as React from "react";
import styled from "styled-components";
import Colors from "../common/styles/constans/Colors";

const Wrapper = styled.div`
  position: absolute;
  background-color: ${Colors.nBlack};
  height: 200px;
  width: 100%;
  transform: translateY(-100%);
  transition: 0.4s ease-in-out;
  opacity: 0;
  &.isActive {
    z-index: 2;
    opacity: 0.9;
    transform: translateY(25%);
  }
`;

const Nav = styled.nav``;

export interface FilterMenuProps {
  isActive: boolean;
}

const FilterMenu: React.SFC<FilterMenuProps> = props => {
  return (
    <Wrapper className={props.isActive ? "isActive" : ""}>
      <Nav></Nav>;
    </Wrapper>
  );
};

export default FilterMenu;
