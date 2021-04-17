import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import AppMemberListItem from "./AppMemberListItem";

export type AppMemberGroup = {
  label: string;
  count?: number;
};

export default function AppMemberGroup({ label, count }: AppMemberGroup) {
  return (
    <Box marginBottom="25px">
      <Text color="gray.400" fontSize="xs" fontWeight="bold">
        {`${label} - ${count ?? 0}`.toUpperCase()}
      </Text>
      <AppMemberListItem name="carlomigueldy" isOwner />
      <AppMemberListItem name="Erisly" />
      <AppMemberListItem name="Dank Member" />
      <AppMemberListItem name="Groovy" />
    </Box>
  );
}
