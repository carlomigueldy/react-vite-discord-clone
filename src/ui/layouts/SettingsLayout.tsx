import { Box, Divider, Text } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../theme/colors";

export type SettingsLayoutProps = {
  children: React.ReactNode;
};

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Box display="flex" height="100vh">
      <SettingsLeftSidebar />
      <Box flex="2" height="100%" backgroundColor={colors.grayLight}>
        {children}
      </Box>
    </Box>
  );
}

function SettingsLeftSidebar() {
  return (
    <Box
      flex="1"
      display="flex"
      justifyContent="flex-end"
      alignItems="start"
      height="100%"
      backgroundColor={colors.grayDark}
      paddingTop="50px"
      paddingX="15px"
    >
      <Box display="flex" flexDirection="column">
        <SettingsListHeader>User Settings</SettingsListHeader>

        <SettingsListItem label="My Account" active />
        <SettingsListItem label="Privacy & Safety" />
        <SettingsListItem label="Authorized Apps" />
        <SettingsListItem label="Connections" />

        <Divider marginY="15px" />

        <SettingsListHeader>Billing Settings</SettingsListHeader>
        <SettingsListItem>Discord Nitro</SettingsListItem>
        <SettingsListItem>Server Boost</SettingsListItem>
        <SettingsListItem>Gift Inventory</SettingsListItem>
        <SettingsListItem>Billing</SettingsListItem>
      </Box>
    </Box>
  );
}

type SettingsListItemProps = {
  label?: string;
  active?: boolean;
  children?: React.ReactNode;
};

function SettingsListItem({ active, label, children }: SettingsListItemProps) {
  return (
    <Box
      paddingX="5px"
      paddingRight="100px"
      paddingY="5px"
      marginY="2px"
      borderRadius="sm"
      cursor="pointer"
      color={active ? "white" : "gray.400"}
      backgroundColor={active ? colors.lightGray : "transparent"}
      _hover={{ backgroundColor: colors.grayLight }}
    >
      <Text>{!!label ? label : children}</Text>
    </Box>
  );
}

type SettingsListHeaderProps = {
  children?: React.ReactNode;
};

function SettingsListHeader({ children }: SettingsListHeaderProps) {
  return (
    <Text
      color="gray"
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="xs"
      marginY="5px"
    >
      {children}
    </Text>
  );
}
