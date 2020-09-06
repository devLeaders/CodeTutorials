import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./NavigationPath";
import Movies from "../../features/videos/page/Movies";
import MovieListView from "../../features/videos/page/MovieListView";
import SingleMovieView from "../../features/videos/page/SingleMovieView";
import SignInView from "../../features/auth/page/SignInView";
import SignUpView from "../../features/auth/page/SignUpView";
import ProtectedRoute from "../../features/auth/components/ProtectedRoute";
const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={Navigation.LOGIN} exact component={SignInView} />
      <Route path={Navigation.REGISTER} exact component={SignUpView} />
      <ProtectedRoute
        path={`${Navigation.MOVIES}/:id`}
        exact
        component={SingleMovieView}
      />
      <ProtectedRoute
        path={Navigation.MOVIELIST}
        exact
        component={MovieListView}
      />
      <ProtectedRoute component={Movies} />
    </Switch>
  );
};

export default Routing;
