import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function AppCategorySidebar() {
  return (
    <Box width="400px" backgroundColor="gray.700">
      <Box
        height="50px"
        backgroundColor="gray.800"
        borderBottomColor="gray"
        borderBottomWidth="1px"
      />
      <Heading>Hey</Heading>
    </Box>
  );
}
