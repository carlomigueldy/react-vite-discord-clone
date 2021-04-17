import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import AppRouteProvider from "./routes/AppRouteProvider";

import "@fontsource/sora";
import AppMainLayout from "./ui/layouts/MainLayout";

const theme = extendTheme({
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppMainLayout>
        <AppRouteProvider></AppRouteProvider>
      </AppMainLayout>
    </ChakraProvider>
  );
}

export default App;
