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
import { useHistory } from "react-router";
import { supabase } from "../../app/supabase";
import { useAuth } from "../../hooks/useAuth";
import {
  DEFAULT_REDIRECT_ROUTE,
  OTHER_REDIRECT_ROUTE,
} from "../../routes/AppRouteProvider";
import { colors } from "../theme/colors";
import AppCategoryList from "./AppCategoryList";
import AppIconButton from "./AppIconButton";

const CARLO_MIGUEL_DY_URL =
  "https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/138022372_3881881045163509_7294372322424458231_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFnO8sgH47tHpZw6Zf7tBazQ7jT1m4ha1tDuNPWbiFrW8cq3qyRuzG8grx1_7DxFlb5zBTKZ7ObJs8I7FzQSuBp&_nc_ohc=erPfbho78dwAX-T9sq6&_nc_ht=scontent.fmnl25-1.fna&oh=7244200a8bb45f61cda2c6374523f8bc&oe=60A30876";

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
  async function loginWithEmail() {}

  async function logout() {
    await supabase.auth.signOut();
    useAuth();
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
          <MenuItem onClick={loginWithEmail}>Sign In</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

function BottomSection() {
  const user = useAuth();
  const history = useHistory();

  function toSettingsView() {
    history.push("/settings");
  }

  function toOther() {
    history.push(OTHER_REDIRECT_ROUTE);
  }

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
        <Avatar src={CARLO_MIGUEL_DY_URL} size="sm" />
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
          ariaLabel="To other"
          tooltip="Other"
          icon={<RepeatIcon />}
          onClick={toOther}
        ></AppIconButton>
        <AppIconButton
          ariaLabel="Settings"
          tooltip="Settings"
          icon={<SettingsIcon />}
          onClick={toSettingsView}
        ></AppIconButton>
      </HStack>
    </Box>
  );
}
