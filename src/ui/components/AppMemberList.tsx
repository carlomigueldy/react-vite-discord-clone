import { Box } from "@chakra-ui/layout";
import React from "react";
import AppMemberGroup from "./AppMemberGroup";

export default function AppMemberList() {
  return (
    <Box
      paddingTop="15px"
      flexGrow={1}
      height="0px"
      display="flex"
      overflowY="scroll"
      flexDirection="column"
      paddingX="5px"
    >
      <AppMemberGroup label="Novice" />
      <AppMemberGroup label="Angular Team Member" />
      <AppMemberGroup label="Google Developer Expert" />
      <AppMemberGroup label="Flutter Team Member" />
    </Box>
  );
}

