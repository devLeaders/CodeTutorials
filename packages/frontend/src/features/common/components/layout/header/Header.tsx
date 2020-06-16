import * as React from "react";
import styled from "styled-components";

import Banner from "../banner/Banner";
import NavBar from "../navBar/NavBar";

const Wrapper = styled.header`
  display: flex;
`;


const Header: React.SFC = () => {
  return (
    <Wrapper>
      <Banner />
      <NavBar header={true} />
    </Wrapper>
  );
};

export default Header;
