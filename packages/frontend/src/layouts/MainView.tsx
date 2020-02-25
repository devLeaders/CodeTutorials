import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Series from '../pages/Series';
import NAVIGATION from '../layouts/NavigationPath'
import SingleMoviePage from '../pages/SingleMoviePage';

const MainView: React.FC = () => {

    return (
        <Switch>
            <Route path={NAVIGATION.HOMEPAGE} exact component={HomePage} />
            <Route path={`${NAVIGATION.MOVIES}/:id`} component={SingleMoviePage} />
            <Route path={NAVIGATION.SERIES} component={Series} />
        </Switch>
    );
}

export default MainView;