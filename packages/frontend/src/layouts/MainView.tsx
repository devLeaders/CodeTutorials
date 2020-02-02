import React from 'react';
<<<<<<< HEAD
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import NAVIGATION from '../layouts/NavigationPath'

const MainView: React.FC = () => {

    return (
        <Switch>
            <Route path={NAVIGATION.HOMEPAGE} exact component={HomePage} />
            <Route path={NAVIGATION.MOVIES} component={Movies} />
            <Route path={NAVIGATION.SERIES} component={Series} />
        </Switch>
=======
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
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69
    );
}

export default MainView;