import React from "react";
import { Route, Switch } from "react-router-dom";
import NAVIGATION from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import NavBarContainer from "../../features/common/components/layout/navBar/NavBarContainer"

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={`${NAVIGATION.MOVIES}/:id`} exact component={SingleMoviePage} />
      <Route path={NAVIGATION.MOVIES} exact component={Movies} />
      <Route component={NavBarContainer   } />
    </Switch>
  );
};

export default Routing;
