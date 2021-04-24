import { SearchIcon } from "@chakra-ui/icons";
import { Box, Divider, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../theme/colors";

export type SettingsLayoutProps = {
  children: React.ReactNode;
};

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Box display="flex" height="100vh">
      <SettingsLeftSidebar />
      <Box
        flex="2"
        height="100%"
        backgroundColor={colors.grayLight}
        overflowY="scroll"
        paddingX="30px"
        paddingY="50px"
        color="white"
      >
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
      paddingY="50px"
      paddingX="15px"
      overflow="hidden"
      _hover={{
        overflowY: "scroll",
      }}
    >
      <Box display="flex" flexDirection="column">
        <SettingsListHeader>User Settings</SettingsListHeader>

        <SettingsListItem label="My Account" active />
        <SettingsListItem label="Privacy & Safety" />
        <SettingsListItem label="Authorized Apps" />
        <SettingsListItem label="Connections" />

        <AppSettingsDivider />

        <SettingsListHeader>Billing Settings</SettingsListHeader>
        <SettingsListItem>Discord Nitro</SettingsListItem>
        <SettingsListItem>Server Boost</SettingsListItem>
        <SettingsListItem>Gift Inventory</SettingsListItem>
        <SettingsListItem>Billing</SettingsListItem>

        <AppSettingsDivider />

        <SettingsListHeader>App Settings</SettingsListHeader>
        <SettingsListItem>Appearance</SettingsListItem>
        <SettingsListItem>Accessibility</SettingsListItem>
        <SettingsListItem>Voice & Video</SettingsListItem>
        <SettingsListItem>Text & Images</SettingsListItem>
        <SettingsListItem>Notifications</SettingsListItem>
        <SettingsListItem>Keybinds</SettingsListItem>
        <SettingsListItem>Language</SettingsListItem>
        <SettingsListItem>Windows Settings</SettingsListItem>
        <SettingsListItem>Streamer Mode</SettingsListItem>
        <SettingsListItem>Advanced</SettingsListItem>

        <AppSettingsDivider />

        <SettingsListHeader>Gaming Settings</SettingsListHeader>
        <SettingsListItem>Game Activity</SettingsListItem>
        <SettingsListItem>Overlay</SettingsListItem>

        <AppSettingsDivider />

        <SettingsListHeader>Change Log</SettingsListHeader>
        <SettingsListItem>HypeSquad</SettingsListItem>

        <AppSettingsDivider />

        <SettingsListItem color="red.600" hoverBackgroundColor="red.900">Log Out</SettingsListItem>

        <AppSettingsDivider />

        <HStack>
          <SearchIcon color="white" />
          <SearchIcon color="white" />
          <SearchIcon color="white" />
        </HStack>
      </Box>
    </Box>
  );
}

type SettingsListItemProps = {
  label?: string;
  active?: boolean;
  children?: React.ReactNode;
  color?: string;
  hoverBackgroundColor?: string;
};

function SettingsListItem({
  active,
  label,
  color,
  hoverBackgroundColor,
  children,
}: SettingsListItemProps) {
  return (
    <Box
      paddingX="5px"
      paddingRight="100px"
      paddingY="5px"
      marginY="2px"
      borderRadius="sm"
      cursor="pointer"
      color={!!color ? color : active ? "white" : "whiteAlpha.500"}
      backgroundColor={active ? colors.lightGray : "transparent"}
      _hover={{
        backgroundColor: !!hoverBackgroundColor
          ? hoverBackgroundColor
          : colors.grayLight,
      }}
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

function AppSettingsDivider() {
  return (
    <Box>
      <Divider marginY="15px" />
    </Box>
  );
}
