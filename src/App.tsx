import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import AppRouteProvider from "./routes/AppRouteProvider";

import "@fontsource/sora";
import AppMainLayout from "./ui/layouts/MainLayout";
import SettingsLayout from "./ui/layouts/SettingsLayout";

const theme = extendTheme({
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <AppMainLayout>
        <AppRouteProvider></AppRouteProvider>
      </AppMainLayout> */}

      <SettingsLayout>
        <AppRouteProvider></AppRouteProvider>
      </SettingsLayout>
    </ChakraProvider>
  );
}

export default App;
