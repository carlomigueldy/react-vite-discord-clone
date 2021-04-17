import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box display="flex">
      <Box
        width="100px"
        height="100vh"
        position="fixed"
        backgroundColor="gray.700"
        overflowX="hidden"
        top="0"
        left="0"
        padding="5px"
      >
        <Heading color="white">AP</Heading>
      </Box>
      <Box
        marginLeft="100px"
        width="225px"
        height="100vh"
        position="fixed"
        backgroundColor="gray.600"
        overflowX="hidden"
        top="0"
        left="0"
        padding="5px"
      >
        <Heading color="white">App</Heading>
      </Box>

      <VStack marginLeft="325px" width="100%">
        <Box
          marginLeft="325px"
          width="100%"
          height="50px"
          backgroundColor="gray.500"
          top="0"
          position="fixed"
        >
          Hey
        </Box>
        <Box paddingTop="50px">{children}</Box>
      </VStack>
    </Box>
  );
}
