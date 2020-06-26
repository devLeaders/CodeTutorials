import React from "react";
import { Route, Switch } from "react-router-dom";
import NAVIGATION from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import MovieListView from "../../features/videos/page/MovieListView";
import SingleMovieView from "../../features/videos/page/SingleMovieView";
import SignInView from "../../features/auth/page/SignInView";
import SignUpView from "../../features/auth/page/SignUpView";

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route
        path={`${NAVIGATION.MOVIES}/:id`}
        exact
        component={SingleMovieView}
      />
      <Route path={NAVIGATION.MOVIELIST} exact component={MovieListView} />
      <Route path={NAVIGATION.LOGIN} exact component={SignInView} />
      <Route path={NAVIGATION.REGISTER} exact component={SignUpView} />
      <Route component={Movies} />
    </Switch>
  );
};

export default Routing;
