import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import AppRouteProvider from "./routes/AppRouteProvider";

import "@fontsource/sora";
import MainLayout from "./ui/layouts/MainLayout";

const theme = extendTheme({
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <AppRouteProvider></AppRouteProvider>
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
