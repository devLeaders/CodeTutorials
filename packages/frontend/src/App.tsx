import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./config/routing/Routing";
import  { createGlobalStyle } from "styled-components";

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





const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
          <Routing />
    </BrowserRouter>
  );
};

export default App;
