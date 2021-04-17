import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexView from "../ui/views/IndexView";
import NotFoundView from "../ui/views/NotFoundView";

const AppRouteProvider = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexView}></Route>
        <Route path="*" component={NotFoundView}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouteProvider;
