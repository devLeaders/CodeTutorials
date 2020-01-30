import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';
import Series from '../pages/Series';

const MainView: React.FC = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/filmy" component={Movies} />
            <Route path="/seriale" component={Series} />
        </>
    );
}

export default MainView;