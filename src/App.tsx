import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AppRouteProvider from "./routes/AppRouteProvider";
import React from "react";
import "./App.css";
import "@fontsource/sora";

const theme = extendTheme({
  fonts: {
    heading: `Sora, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif`,
    body: `Sora, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif`,
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
