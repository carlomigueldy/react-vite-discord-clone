import React from "react";
import { Box } from "@chakra-ui/layout";
import AppChatContainer from "./AppChatContainer";
import AppMainTopbar from "./AppMainTopbar";
import AppRightSidebar from "./AppRightSidebar";
import { colors } from "../theme/colors";

export default function AppMainContent() {
  return (
    <Box
      backgroundColor={colors.grayLight}
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <AppMainTopbar />

      <Box flexGrow={1} display="flex" justifyContent="space-between">
        <AppChatContainer />

        <AppRightSidebar />
      </Box>
    </Box>
  );
}
