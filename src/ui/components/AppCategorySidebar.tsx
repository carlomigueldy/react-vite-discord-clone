import {
  ChevronDownIcon,
  InfoOutlineIcon,
  RepeatIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CategoryList from "./AppCategoryList";

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
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX="5px"
        backgroundColor="gray.900"
        borderBottomColor="gray"
        borderBottomWidth="1px"
      >
        <Menu>
          <MenuButton
            as={Button}
            color="white"
            width="full"
            backgroundColor="transparent"
            rightIcon={<ChevronDownIcon />}
            _hover={{ background: "none" }}
            _active={{ background: "none" }}
          >
            <Text maxW="225px" isTruncated>
              Aviation Software Development
            </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <CategoryList />

      <BottomSection />
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
