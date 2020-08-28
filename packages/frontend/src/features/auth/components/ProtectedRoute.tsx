import React, { Component, ReactType } from "react";
import { Route, Redirect } from "react-router-dom";
import { Navigation } from "../../../config/routing/NavigationPath";

interface ProtectedProps {
  component: ReactType;
  path?: string;
  exact?: boolean;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedProps) => {
  const token = sessionStorage.getItem("token");
  const handleTokenCheck = () => {
    if (token) return <Component />;
    else return <Redirect to={Navigation.LOGIN} />;
  };
  return <Route {...rest} render={() => handleTokenCheck()} />;
};
export default ProtectedRoute;
