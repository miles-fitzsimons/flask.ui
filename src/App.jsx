import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import WineList from "./WineList";

import UserProvider from "./Providers/UserProvider";

const App = () => (
  <BrowserRouter>
    <Switch>
      <UserProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/winelist" component={WineList} />
        <Route exact path="/addwine" component={NotFound} />
        <Route exact path="/notfound" component={NotFound} />
      </UserProvider>
    </Switch>
  </BrowserRouter>
);

export default App;

const NotFound = () => <h1>404 Not Found.</h1>;
