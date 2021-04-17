import { InfoOutlineIcon, RepeatIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function AppCategorySidebar() {
  return (
    <Box
      width="400px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="gray.700"
    >
      <Box
        height="50px"
        backgroundColor="gray.900"
        borderBottomColor="gray"
        borderBottomWidth="1px"
      />

      <CategoryList />

      <BottomSection />
    </Box>
  );
}

function CategoryList() {
  return (
    <Box
      flexGrow={1}
      height="0"
      display="flex"
      flexDirection="column"
      paddingTop="10px"
      paddingX="5px"
    >
      <CategoryItem active label="💬-general" />
      <CategoryItem label="🎙️-announcement" />
      <CategoryItem label="🔵-tasks" />
      <CategoryItem label="🧰-guide" />
      <CategoryItem label="🤯-help" />
      <CategoryItem label="🚫-absent-notice" />
      <CategoryItem label="📄-report-drafts" />
      <CategoryItem label="💸-invoice" />
      <CategoryItem label="🔧-needs-hotfix" />
      <CategoryItem label="🚀-schema-updates" />
    </Box>
  );
}

type CategoryItemProps = {
  label: string;
  active?: boolean;
};

function CategoryItem({ label, active }: CategoryItemProps) {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      padding="5px"
      backgroundColor={active ? "gray.500" : "transparent"}
      borderRadius="3px"
      marginY="2px"
      cursor="pointer"
      _hover={{
        backgroundColor: "gray.600",
      }}
    >
      <Text marginRight="10px" fontStyle="italic" fontSize="xl">
        #
      </Text>
      <Text color="white">{label}</Text>
      <Box></Box>
    </Box>
  );
}

function BottomSection() {
  return (
    <Box
      paddingY="12px"
      paddingX="5px"
      display="flex"
      justifyContent="center"
      backgroundColor="gray.800"
    >
      <Center>
        <Avatar size="sm" />
      </Center>
      <Box marginX="10px">
        <Text color="white">carlomigueldy</Text>
        <Text color="gray.500" fontSize="xs">
          #1240
        </Text>
      </Box>
      <HStack>
        <IconButton
          aria-label="Mute mic"
          borderRadius="50%"
          size="sm"
          icon={<InfoOutlineIcon />}
        ></IconButton>
        <IconButton
          aria-label="Mute mic"
          borderRadius="50%"
          size="sm"
          icon={<RepeatIcon />}
        ></IconButton>
        <IconButton
          aria-label="Mute mic"
          borderRadius="50%"
          size="sm"
          icon={<SettingsIcon />}
        ></IconButton>
      </HStack>
    </Box>
  );
}
