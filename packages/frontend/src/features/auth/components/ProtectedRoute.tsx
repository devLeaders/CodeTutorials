import React, { Component, ReactType, useCallback } from "react";
import { Route, Redirect } from "react-router-dom";
import { Navigation } from "../../../config/routing/NavigationPath";
interface ProtectedProps {
  component: ReactType;
  path?: string;
  exact?: boolean;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedProps) => {
  const handleTokenCheck = useCallback(() => {
    const token = sessionStorage.getItem("token");
    if (token) return <Component />;
    else return <Redirect to={Navigation.LOGIN} />;
  }, [rest]);

  return <Route {...rest} render={handleTokenCheck} />;
};
export default ProtectedRoute;
