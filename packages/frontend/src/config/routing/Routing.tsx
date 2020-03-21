import React from "react";
import { Route, Switch } from "react-router-dom";
import NAVIGATION from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import UserPanelContainer from "../../features/common/components/layout/userPanel/UserPanelContainer"

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path="/userPanel" component={UserPanelContainer} />
      <Route path={`${NAVIGATION.MOVIES}/:id`} exact component={SingleMoviePage} />
      <Route path={NAVIGATION.MOVIES} exact component={Movies} />
      <Route component={Movies} />
    </Switch>
  );
};

export default Routing;
