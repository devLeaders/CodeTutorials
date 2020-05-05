import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./config/routing/Routing";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
  button{
    font-family: 'Montserrat', sans-serif;
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
          <Routing />
    </BrowserRouter>
  );
};

export default App;
