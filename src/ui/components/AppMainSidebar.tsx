import { Avatar } from "@chakra-ui/avatar";
import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../theme/colors";

export default function AppMainSidebar() {
  return (
    <Box
      width="100px"
      paddingX="5px"
      paddingTop="15px"
      overflowX="hidden"
      backgroundColor={colors.grayDarkest}
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflowY="hidden"
    >
      <Avatar height="40px" width="40px" />
      <Divider marginY="15px" width="30px" />
      <Avatar size="md" cursor="pointer" backgroundColor="red" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="blue" marginY="5px" />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="green"
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="orange"
        marginY="5px"
      />
      <Avatar size="md" cursor="pointer" backgroundColor="pink" marginY="5px" />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="violet"
        marginY="5px"
      />
      <Avatar size="md" cursor="pointer" backgroundColor="cyan" marginY="5px" />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="yellow"
        marginY="5px"
      />
    </Box>
  );
}
