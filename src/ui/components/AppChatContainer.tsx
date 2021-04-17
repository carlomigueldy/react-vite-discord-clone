import React from "react";
import { Box } from "@chakra-ui/layout";
import AppPlaceholderItem from "./AppPlaceholderItem";
import AppChatInput from "./AppChatInput";

export default function AppChatContainer() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        height="0px"
        overflowY="scroll"
        paddingX="15px"
      >
        <AppPlaceholderItem />
        <AppPlaceholderItem />
        <AppPlaceholderItem />
        <AppPlaceholderItem />
        <AppPlaceholderItem />
      </Box>

      <AppChatInput />
    </Box>
  );
}
