import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";

export default function AppMemberRightSidebar() {
  return (
    <Box
      width="325px"
      paddingX="5px"
      paddingTop="15px"
      backgroundColor="gray.700"
    >
      <Box
        display="flex"
        alignItems="center"
        padding="5px"
        borderRadius="3px"
        cursor="pointer"
        _hover={{
          backgroundColor: "gray.600",
        }}
      >
        <Avatar size="sm" />
        <Box width="10px" />
        <Text display="flex" color="white">
          carlomigueldy{" "}
          <Box marginX="5px">
            <Tooltip aria-label="server owner tooltip" label="Server owner">
              👑
            </Tooltip>
          </Box>
        </Text>
      </Box>
    </Box>
  );
}
