import { Avatar, Box } from "@chakra-ui/react";
import React from "react";

export default function AppPlaceholderItem() {
  return (
    <Box display="flex" marginY="15px">
      <Avatar></Avatar>

      <Box width="15px"></Box>

      <Box
        height="225px"
        width="500px"
        borderRadius="sm"
        backgroundColor="gray.500"
      ></Box>
    </Box>
  );
}
