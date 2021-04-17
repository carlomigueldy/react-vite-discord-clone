import { Box, Text } from "@chakra-ui/layout";
import React from "react";

export default function AppMainTopbar() {
  return (
    <Box
      height="50px"
      backgroundColor="gray.800"
      borderBottomColor="gray"
      borderBottomWidth="1px"
      display="flex"
      paddingX="10px"
    >
      <Box display="flex" alignItems="center">
        <Text marginRight="10px" fontStyle="italic" color="gray.500" fontSize="xl">
          #
        </Text>
        <Text color="white">💬-general</Text>
      </Box>
    </Box>
  );
}
