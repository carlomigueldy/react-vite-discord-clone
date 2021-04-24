import { Text } from "@chakra-ui/layout";
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

export const DEFAULT_CHANNEL_ID = "4caf111f-ed31-4e81-8735-f92d5860c878";
export const DEFAULT_SERVER_ID = "a246a23f-c43b-446d-a1ba-7219c53b94c6";
export const DEFAULT_REDIRECT_ROUTE = `/servers/${DEFAULT_SERVER_ID}/channels/${DEFAULT_CHANNEL_ID}`;
export const OTHER_REDIRECT_ROUTE = `/servers/98382d04-9d6d-4b98-9dd8-9c980a4e5b0c/channels/cd9d9bbb-4202-4aa1-88ec-21c17d809301`;

const AppRouteProvider = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to={DEFAULT_REDIRECT_ROUTE} exact />

        <Route path="/servers/:path?">
          <Switch>
            {/* <Redirect from="/servers" to={DEFAULT_REDIRECT_ROUTE} exact /> */}

            <AppMainLayout>
              <Route
                path="/servers/:serverId/channels/:channelId"
                component={IndexView}
                exact
              ></Route>
            </AppMainLayout>

            <Route path="*" component={NotFoundView}></Route>
          </Switch>
        </Route>

        <Route path="/settings/:path?">
          <Switch>
            <SettingsLayout>
              <Route path="/settings/" component={SettingsView} exact />
            </SettingsLayout>

            <Route path="*" component={NotFoundView}></Route>
          </Switch>
        </Route>

        <Route path="*" component={NotFoundView}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouteProvider;
