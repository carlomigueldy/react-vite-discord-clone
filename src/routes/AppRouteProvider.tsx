import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexView from "../ui/views/IndexView";

const AppRouteProvider = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexView}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouteProvider;
