import * as React from "react";
import styled from "styled-components";

import Banner from "../banner/Banner";
import NavBar from "../navBar/NavBar";

const Wrapper = styled.header`
  display: flex;
`;

interface HeaderProps {
  homePage?: boolean;
}

const Header: React.SFC<HeaderProps> = ({homePage}) => {
  return (
    <Wrapper>
      <Banner homePage={homePage}/>
      <NavBar header={true} />
    </Wrapper>
  );
};

export default Header;
