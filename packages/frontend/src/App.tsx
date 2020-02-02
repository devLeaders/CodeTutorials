import React from 'react';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import Navigation from './layouts/Navigation';
import MainView from './layouts/MainView';
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vw;
  display: flex;
  flex-direction: column;
`;

const StyledNav = styled.nav`
  height: 300px;
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.nav`
  flex-grow: 1;
  text-align: center;
`
=======
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './layouts/Navigation';
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69

import MainView from './layouts/MainView';
const App: React.FC = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <StyledApp className="app">
        <StyledNav>
          {<Navigation />}
        </StyledNav>
        <StyledMain>
          {<MainView />}
        </StyledMain>

      </StyledApp>
=======
      <div className="app">
        <nav>
          {<Navigation />}
        </nav>
        <main>
          {<MainView />}
        </main>

      </div>
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69
    </BrowserRouter>
  );
}

export default App;
