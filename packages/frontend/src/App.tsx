import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./config/routing/Routing";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
    margin: 20px;
  }
  *, *::before, *::after {
      box-sizing: border-box;
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StyledApp className="app">
          <Routing />
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
