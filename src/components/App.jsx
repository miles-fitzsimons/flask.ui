import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddWine from "./AddWine";
import Home from "./Home";
import WineList from "./WineList";

import PrivateRoute from "./PrivateRoute";

import UserProvider from "../providers/UserProvider";

const App = () => (
  <BrowserRouter>
    <Switch>
      <UserProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/winelist" component={WineList} />
        <PrivateRoute exact path="/addwine" component={AddWine} />
        <Route exact path="/notfound" component={NotFound} />
      </UserProvider>
    </Switch>
  </BrowserRouter>
);

export default App;

const NotFound = () => <h1>404 Not Found.</h1>;
