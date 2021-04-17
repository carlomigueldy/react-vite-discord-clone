import React from "react";
import { Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { AddIcon, AtSignIcon, CalendarIcon, LinkIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import AppIconButton from "./AppIconButton";

export default function AppChatInput() {
  return (
    <Box height="70px" paddingX="15px" backgroundColor="gray.900">
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        backgroundColor="gray.600"
        padding="5px"
        borderRadius="8px"
      >
        <AppIconButton
          ariaLabel="Attach files"
          size="sm"
          withBackground
          icon={<AddIcon />}
        />
        <Box marginX="3px" />
        <Input
          height="35px"
          backgroundColor="gray.600"
          color="white"
          borderColor="none"
        />
        <AppIconButton ariaLabel="Attach files" icon={<CalendarIcon />} />
        <AppIconButton ariaLabel="Select giphy" icon={<LinkIcon />} />
        <AppIconButton ariaLabel="Select emoji" icon={<AtSignIcon />} />
      </Box>
    </Box>
  );
}
