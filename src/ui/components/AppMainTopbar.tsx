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
      <Box display="flex">
        <AppIconButton
          ariaLabel="Mute channel"
          icon={<BellIcon />}
        ></AppIconButton>
        <AppIconButton
          ariaLabel="View pinned messages"
          icon={<AtSignIcon />}
        ></AppIconButton>
        <AppIconButton
          ariaLabel="Toggle Memberlist"
          icon={<StarIcon />}
        ></AppIconButton>
        <Input placeholder="Search" color="white" />
        <AppIconButton
          ariaLabel="See inbox"
          icon={<TimeIcon />}
        ></AppIconButton>
        <AppIconButton
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
      <Text color="white">💬-general</Text>
    </Box>
  );
}
