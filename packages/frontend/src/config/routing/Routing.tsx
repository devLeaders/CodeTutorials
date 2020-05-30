import React from "react";
import { Route, Switch } from "react-router-dom";
import NAVIGATION from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import MovieListView from "../../features/videos/page/MovieListView"
import SingleMovieView from "../../features/videos/page/SingleMovieView";
const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={`${NAVIGATION.MOVIES}/:id`} exact component={SingleMoviePage} />
      <Route path={NAVIGATION.MOVIELIST} exact component={MovieListView} />
      <Route path={NAVIGATION.MOVIES} exact component={Movies} />
      <Route path='/movie' exact component={SingleMovieView}/>
      <Route component={Movies} />
    </Switch>
  );
};

export default Routing;
