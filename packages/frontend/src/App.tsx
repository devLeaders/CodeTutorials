import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './layouts/Navigation';

import MainView from './layouts/MainView';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          {<Navigation />}
        </nav>
        <main>
          {<MainView />}
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
