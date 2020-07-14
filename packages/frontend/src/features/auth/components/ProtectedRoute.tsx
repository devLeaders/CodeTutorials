import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NAVIGATION from "../../../config/routing/NavigationPath";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const checkToken = localStorage.getItem("token");
  const handleTokenCheck = (props: any) => {
    if (checkToken) {
      return <Component {...props} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: NAVIGATION.LOGIN,
            state: {
              from: props.location,
            },
          }}
        />
      );
    }
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        handleTokenCheck(props);
      }}
    />
  );
};
