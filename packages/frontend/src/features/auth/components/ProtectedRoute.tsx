import React, { Component, ReactType } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { Navigation } from "../../../config/routing/NavigationPath";

interface ProtectedProps {
  component: ReactType;
  path?: string;
  exact?: boolean;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedProps) => {
  const token = localStorage.getItem("token");
  const handleTokenCheck = (props: RouteProps) => {
    if (token) {
      return <Component />;
    } else {
      return (
        <Redirect
          to={{
            pathname: Navigation.LOGIN,
            state: {
              from: props.location,
            },
          }}
        />
      );
    }
  };

  return <Route {...rest} render={(props) => handleTokenCheck(props)} />;
};
export default ProtectedRoute;
