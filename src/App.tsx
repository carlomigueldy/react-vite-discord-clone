import {
  Button,
  ChakraProvider,
  extendTheme,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import AppRouteProvider from "./routes/AppRouteProvider";
import React, { useEffect } from "react";
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
    <>
      <ChakraProvider theme={theme}>
        <AppRouteProvider></AppRouteProvider>

        {/* <BasicUsage /> */}
      </ChakraProvider>
    </>
  );
}

export default App;

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen.call(onOpen);
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Body</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
