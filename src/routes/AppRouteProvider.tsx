import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppMainLayout from "../ui/layouts/MainLayout";
import SettingsLayout from "../ui/layouts/SettingsLayout";
import IndexView from "../ui/views/IndexView";
import NotFoundView from "../ui/views/NotFoundView";
import SettingsView from "../ui/views/SettingsView";

const AppRouteProvider = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/app" exact />

        <Route path="/app/:path?">
          <Switch>
            <AppMainLayout>
              <Route path="/" component={IndexView} exact></Route>
            </AppMainLayout>
          </Switch>
        </Route>

        <Route path="/settings/:path?">
          <Switch>
            <SettingsLayout>
              <Route path="/" component={SettingsView} exact />
            </SettingsLayout>
          </Switch>
        </Route>

        <Route path="*" component={NotFoundView}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouteProvider;
