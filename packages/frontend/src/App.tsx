import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./config/routing/Routing";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
  *, *::before, *::after {
      box-sizing: border-box;
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StyledApp className="app">
        <StyledMain>
          <Routing />
        </StyledMain>
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
