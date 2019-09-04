import React from "react";
import { Route, Redirect } from "react-router-dom";

import UserContext from "../contexts/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <UserContext.Consumer>
    {context => (
      <Route
        {...rest}
        render={props =>
          context.token ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )}
  </UserContext.Consumer>
);

export default PrivateRoute;
