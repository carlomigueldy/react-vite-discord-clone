import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";
import AppRouteProvider from "./routes/AppRouteProvider";

import "@fontsource/sora"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRouteProvider></AppRouteProvider>
    </ChakraProvider>
  );
}

export default App;
