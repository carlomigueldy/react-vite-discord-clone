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
import { supabase } from "../../app/supabase";
import { useAuth } from "../../hooks/useAuth";
import { colors } from "../theme/colors";
import AppCategoryList from "./AppCategoryList";
import AppIconButton from "./AppIconButton";

export default function AppLeftSidebar() {
  return (
    <Box
      width="300px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor={colors.grayMedium}
    >
      <AppLeftSidebarTopbar />

      <AppCategoryList />

      <BottomSection />
    </Box>
  );
}

function AppLeftSidebarTopbar() {
  async function loginWithEmail() {
    const res = await supabase.auth.signIn({
      email: "carlomigueldy@gmail.com",
      // email: "dev@dev.com",
    });
    console.log("[loginWithEmail]", res);
  }

  return (
    <Box
      height="50px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingX="5px"
      backgroundColor={colors.grayMedium}
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
          <MenuItem onClick={() => loginWithEmail()}>Sign In</MenuItem>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

function BottomSection() {
  const user = useAuth();

  console.log("[useAuth]", user);

  return (
    <Box
      paddingY="12px"
      paddingX="5px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor={colors.grayDark}
    >
      <Center>
        <Avatar size="sm" />
      </Center>
      <Box marginX="10px">
        <Text color="white" maxW="100px" fontSize="sm" isTruncated>
          {user?.email ?? "Unknown user"}
        </Text>

        <Text color="gray.500" fontSize="xs">
          #1240
        </Text>
      </Box>
      <HStack>
        <AppIconButton
          ariaLabel="Mute mic"
          icon={<InfoOutlineIcon />}
        ></AppIconButton>
        <AppIconButton
          ariaLabel="Mute mic"
          icon={<RepeatIcon />}
        ></AppIconButton>
        <AppIconButton
          ariaLabel="Mute mic"
          icon={<SettingsIcon />}
        ></AppIconButton>
      </HStack>
    </Box>
  );
}
