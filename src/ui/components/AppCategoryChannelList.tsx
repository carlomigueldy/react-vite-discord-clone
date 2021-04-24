import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router";
import AppChannelListItem from "./AppChannelListItem";

export default function AppCategoryChannelList() {
  return (
    <Box marginY="5px">
      <Text color="white" fontSize="xs" fontWeight="bold" marginBottom="5px">
        <ChevronRightIcon /> {"🛫 Main".toUpperCase()}
      </Text>
      <AppChannelListItem active label="💬-general" />
      <AppChannelListItem label="🎙️-announcement" />
      <AppChannelListItem label="🔵-tasks" />
      <AppChannelListItem label="🧰-guide" />
      <AppChannelListItem label="🤯-help" />
      <AppChannelListItem label="🚫-absent-notice" />
      <AppChannelListItem label="📄-report-drafts" />
      <AppChannelListItem label="💸-invoice" />
      <AppChannelListItem label="🔧-needs-hotfix" />
      <AppChannelListItem label="🚀-schema-updates" />
    </Box>
  );
}
