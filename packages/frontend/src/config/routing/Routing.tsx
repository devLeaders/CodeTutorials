import React from "react";
import { Route, Switch } from "react-router-dom";
import NAVIGATION from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import AsideNav from "../../features/common/components/layout/asideNav/asideNav"

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={`${NAVIGATION.MOVIES}/:id`} exact component={SingleMoviePage} />
      <Route path={NAVIGATION.MOVIES} exact component={Movies} />
      <Route component={AsideNav} />
    </Switch>
  );
};

export default Routing;
