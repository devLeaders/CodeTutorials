import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './layouts/Navigation';
import MainView from './layouts/MainView';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.nav`
  flex-grow: 1;
  text-align: center;
`

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledApp className="app">
        <StyledNav>
          {<Navigation />}
        </StyledNav>
        <StyledMain>
          {<MainView />}
        </StyledMain>

      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
