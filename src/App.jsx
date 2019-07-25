import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Wine from "./Wine";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/wine" component={Wine} />
    </Switch>
  </BrowserRouter>
);

export default App;
