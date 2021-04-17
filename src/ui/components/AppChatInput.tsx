import React from "react";
import { Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { AddIcon, AtSignIcon, CalendarIcon, LinkIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";

export default function AppChatInput() {
  return (
    <Box height="70px" paddingX="15px" backgroundColor="gray.900">
      <Box
        display="flex"
        justifyContent="space-around"
        backgroundColor="gray.600"
        padding="5px"
        borderRadius="8px"
      >
        <IconButton
          aria-label="Attach files"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<AddIcon />}
        />
        <Input
          height="35px"
          backgroundColor="gray.600"
          color="white"
          borderColor="none"
        />
        <IconButton
          aria-label="Attach files"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<CalendarIcon />}
        />
        <IconButton
          aria-label="Select giphy"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<LinkIcon />}
        />
        <IconButton
          aria-label="Select emoji"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<AtSignIcon />}
        />
      </Box>
    </Box>
  );
}
