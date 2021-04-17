import { Box } from "@chakra-ui/layout";
import React from "react";
import AppMemberList from "./AppMemberList";

export default function AppMemberRightSidebar() {
  return (
    <Box
      width="325px"
      paddingX="5px"
      backgroundColor="gray.700"
      display="flex"
      flexDirection="column"
      // flexGrow={1}
    >
      <AppMemberList />
    </Box>
  );
}
