import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function AppCategorySidebar() {
  return (
    <Box
      width="400px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="gray.700"
    >
      <Box
        height="50px"
        backgroundColor="gray.800"
        borderBottomColor="gray"
        borderBottomWidth="1px"
      />
      <Box flexGrow={1}>Hey</Box>
      <Box height="50px" backgroundColor="gray.800" />
    </Box>
  );
}
