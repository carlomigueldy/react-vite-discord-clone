import React from "react";
import { Box } from "@chakra-ui/layout";
import AppChatContainer from "./AppChatContainer";
import AppMainTopbar from "./AppMainTopbar";
import AppMemberRightSidebar from "./AppMemberRightSidebar";

export default function AppMainContent() {
  return (
    <Box
      backgroundColor="gray.900"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <AppMainTopbar />

      <Box flexGrow={1} display="flex" justifyContent="space-between">
        <AppChatContainer />

        <AppMemberRightSidebar />
      </Box>
    </Box>
  );
}
