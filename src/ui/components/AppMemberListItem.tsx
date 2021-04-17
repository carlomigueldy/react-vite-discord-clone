import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";

export type AppMemberListItemProps = {
  name: string;
  isOwner?: boolean;
};

export default function AppMemberListItem({
  name,
  isOwner,
}: AppMemberListItemProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="5px"
      marginY="5px"
      borderRadius="3px"
      cursor="pointer"
      _hover={{
        backgroundColor: "gray.600",
      }}
    >
      <Avatar size="sm" />
      <Box width="10px" />
      <Text color="white">{name}</Text>
      {isOwner ? (
        <Box marginX="5px">
          <Tooltip aria-label="server owner tooltip" label="Server owner">
            👑
          </Tooltip>
        </Box>
      ) : null}
    </Box>
  );
}
