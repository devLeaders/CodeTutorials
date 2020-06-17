import * as React from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom"

import { Device } from "../../styles/constans/Device";
import { Colors } from "../../styles/constans/Colors";
import NavBar from "./navBar/NavBar";
import Filters from "../../../filters/components/Filters";

export interface AsideProps {}

const Wrapper = styled.aside<{singleMovie?: boolean}>`
  position: fixed;
  right: 0;
  top: 0;
  display: none;
  flex-direction: column;
  height: 100vh;
  @media ${Device.LAPTOP} {
    display: ${({singleMovie}) => singleMovie ? "flex" : "none"};
    border-left: ${({singleMovie}) => singleMovie ? `3px solid ${Colors.BLACK_OPACITY}` : "none"};
  }
  @media ${Device.LAPTOP_L} {
    display: flex;
    border-left: 3px solid ${Colors.BLACK_OPACITY};
  }
`;

export interface AsideProps {
  singleMovie?: boolean;
}

const Aside: React.FC<AsideProps> = ({singleMovie}) => {

  return (
    <Wrapper singleMovie={singleMovie}>
      <NavBar  singleMovie={singleMovie}/>
      <Filters />
    </Wrapper>
  );
};
export default Aside;
