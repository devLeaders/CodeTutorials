import React from "react";
import { Route, Switch } from "react-router-dom";
import {Navigation} from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import MovieListView from "../../features/videos/page/MovieListView"
import Temp from "../../features/videos/page/Temp"

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={`${Navigation.MOVIES}/:id`} exact component={SingleMoviePage} />
      <Route path={Navigation.MOVIES} exact component={Movies} />
      <Route path={Navigation.MOVIELIST} exact component={MovieListView} />
      <Route component={Temp} />
     
    </Switch>
  );
};

export default Routing;
