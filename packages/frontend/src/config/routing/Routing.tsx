import React from "react";
import { Route, Switch } from "react-router-dom";
import {Navigation} from "./NavigationPath";
import Movies from "../../features/videos/page/Movies";
import MovieListView from "../../features/videos/page/MovieListView";
import SingleMovieView from "../../features/videos/page/SingleMovieView";
const Routing: React.FC = () => {
  return (
    <Switch>
      <Route
        path={`${Navigation.MOVIES}/:id`}
        exact
        component={SingleMovieView}
      />
      <Route path={Navigation.MOVIELIST} exact component={MovieListView} />
      <Route component={Movies} />
    </Switch>
  );
};

export default Routing;
