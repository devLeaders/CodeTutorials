import React from "react";
import { Route, Switch } from "react-router-dom";

import NAVIGATION from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import VideoDescription from "../../features/videos/components/singleVideoComponents/VideoDescription"

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={`${NAVIGATION.MOVIES}/:id`} exact component={SingleMoviePage} />
      <Route path={NAVIGATION.MOVIES} exact component={Movies} />
      <Route component={VideoDescription} />
    </Switch>
  );
};

export default Routing;
