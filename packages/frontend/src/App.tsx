import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./layouts/Navigation";
import Routing from "./layouts/Routing";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import VideoPlayer from "./singleMovie/components/videoPlayer/VideoPlayerComponent"

const GlobalStyle = createGlobalStyle`
  @import url('"https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"');

  body{
    font-family: 'Bebas Neue', cursive; 
    margin: 0;
    padding: 0;
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
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
      <VideoPlayer small="small" />
    </BrowserRouter>
  );
};

export default App;
