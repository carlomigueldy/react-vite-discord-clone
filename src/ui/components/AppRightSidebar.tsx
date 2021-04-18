import { Box } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../theme/colors";
import AppMemberList from "./AppMemberList";

export default function AppRightSidebar() {
  return (
    <Box
      width="325px"
      paddingX="5px"
      backgroundColor={colors.grayMedium}
      display="flex"
      flexDirection="column"
      // flexGrow={1}
    >
      <AppMemberList />
    </Box>
  );
}
