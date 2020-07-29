import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { loginSubmit } from "../action/authAction";
import { Navigation } from "../../../config/routing/NavigationPath";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const checkToken = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (checkToken) {
          return <Component {...props} />;
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
      }}
    />
  );
};
