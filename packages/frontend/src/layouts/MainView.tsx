import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Series from '../pages/Series';
import NAVIGATION from '../layouts/NavigationPath'
import SingleMoviePage from '../pages/SingleMoviePage';
import Login from '../pages/Login';
import Movies from '../pages/Movies';
import {ProtectedRoute} from '../components/LoginComponents/ProtectedRoute';
const MainView: React.FC = () => {

    return (
        <Switch>
            <Route path={NAVIGATION.HOMEPAGE} exact component={HomePage} />
            <ProtectedRoute path={`${NAVIGATION.MOVIES}`} component={Movies} />
            <Route path={`${NAVIGATION.MOVIES}/:id`} component={SingleMoviePage} />
            <ProtectedRoute path={NAVIGATION.SERIES} component={Series} />
            <Route path={NAVIGATION.LOGIN} component={Login} />
        </Switch>
    );
}

export default MainView;