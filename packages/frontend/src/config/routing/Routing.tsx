import React from "react";
import { Route, Switch } from "react-router-dom";
import NAVIGATION from "./NavigationPath";
import SingleMoviePage from "../../features/videos/page/SingleMoviePage";
import Movies from "../../features/videos/page/Movies";
import Temp from "../../features/videos/page/Temp"
import Filters from "../../features/filters/components/Filters"

const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path={`${NAVIGATION.MOVIES}/:id`} exact component={SingleMoviePage} />
      <Route path={NAVIGATION.MOVIES} exact component={Movies} />
      <Route component={Temp} />
    </Switch>
  );
};

export default Routing;
