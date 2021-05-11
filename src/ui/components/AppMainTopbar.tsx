import { IconButton } from "@chakra-ui/button";
import {
  AtSignIcon,
  BellIcon,
  QuestionIcon,
  StarIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../theme/colors";
import AppIconButton from "./AppIconButton";

export default function AppMainTopbar() {
  return (
    <Box
      height="50px"
      backgroundColor={colors.grayLight}
      borderBottomColor="gray"
      borderBottomWidth="1px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="10px"
    >
      <AppMainTopbarChannelName />
      <Box display="flex" alignItems="center" justifyContent="center">
        <AppIconButton
          tooltip="Mute a channel"
          ariaLabel="Mute channel"
          icon={<BellIcon />}
        ></AppIconButton>
        <AppIconButton
          tooltip="Pinned Messages"
          ariaLabel="View pinned messages"
          icon={<AtSignIcon />}
        ></AppIconButton>
        <AppIconButton
          tooltip="Member List"
          ariaLabel="Toggle Memberlist"
          icon={<StarIcon />}
        ></AppIconButton>
        <Input
          placeholder="Search"
          color="white"
          width="150px"
          size="sm"
          borderRadius="md"
          borderColor="transparent"
          backgroundColor={colors.grayDarkest}
          _focus={{
            width: "225px",
          }}
        />
        <AppIconButton
          tooltip="Inbox"
          ariaLabel="See inbox"
          icon={<TimeIcon />}
        ></AppIconButton>
        <AppIconButton
          tooltip="Help"
          ariaLabel="Toggle Memberlist"
          icon={<QuestionIcon />}
        ></AppIconButton>
      </Box>
    </Box>
  );
}

function AppMainTopbarChannelName() {
  return (
    <Box display="flex" alignItems="center" cursor="default">
      <Text
        marginRight="10px"
        fontStyle="italic"
        color="gray.500"
        fontSize="xl"
      >
        #
      </Text>
      <Text color="white">💬-general (Server is hosted on Singapore region)</Text>
    </Box>
  );
}
