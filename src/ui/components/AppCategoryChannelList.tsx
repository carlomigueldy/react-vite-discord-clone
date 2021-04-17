import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import ChannelListItem from "./AppChannelListItem";

export default function CategoryChannelList() {
  return (
    <Box marginY="5px">
      <Text color="white" fontSize="xs" fontWeight="bold" marginBottom="5px">
        <ChevronRightIcon /> {"🛫 Main".toUpperCase()}
      </Text>
      <ChannelListItem active label="💬-general" />
      <ChannelListItem label="🎙️-announcement" />
      <ChannelListItem label="🔵-tasks" />
      <ChannelListItem label="🧰-guide" />
      <ChannelListItem label="🤯-help" />
      <ChannelListItem label="🚫-absent-notice" />
      <ChannelListItem label="📄-report-drafts" />
      <ChannelListItem label="💸-invoice" />
      <ChannelListItem label="🔧-needs-hotfix" />
      <ChannelListItem label="🚀-schema-updates" />
    </Box>
  );
}
