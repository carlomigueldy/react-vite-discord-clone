import { AddIcon, AtSignIcon, CalendarIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Divider,
  Heading,
  IconButton,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box height="100vh" display="flex" justifyContent="space-between">
      <ServerSidebar />
      <CategorySidebar />
      <MainContent />
    </Box>
  );
}

function MemberSidebar() {
  return <Box width="325px" backgroundColor="gray.700"></Box>;
}

function MainContent() {
  return (
    <Box
      backgroundColor="gray.900"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <MainTopbar />

      <Box flexGrow={1} display="flex" justifyContent="space-between">
        <ChatContainer />

        <MemberSidebar />
      </Box>
    </Box>
  );
}

function MainTopbar() {
  return (
    <Box
      height="50px"
      backgroundColor="gray.800"
      borderBottomColor="gray"
      borderBottomWidth="1px"
    />
  );
}

function ChatContainer() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        height="0px"
        overflowY="scroll"
        paddingX="15px"
      >
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
      </Box>

      <ChatInput />
    </Box>
  );
}

function ChatInput() {
  return (
    <Box height="70px" paddingX="15px" backgroundColor="gray.900">
      <Box
        display="flex"
        justifyContent="space-around"
        backgroundColor="gray.600"
        padding="5px"
        borderRadius="8px"
      >
        <IconButton
          aria-label="Attach files"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<AddIcon />}
        />
        <Input
          height="35px"
          backgroundColor="gray.600"
          color="white"
          borderColor="none"
        />
        <IconButton
          aria-label="Attach files"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<CalendarIcon />}
        />
        <IconButton
          aria-label="Select giphy"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<LinkIcon />}
        />
        <IconButton
          aria-label="Select emoji"
          borderRadius="50%"
          size="sm"
          marginX="5px"
          icon={<AtSignIcon />}
        />
      </Box>
    </Box>
  );
}

function ServerSidebar() {
  return (
    <Box
      top="0"
      left="0"
      width="100px"
      height="100%"
      padding="5px"
      overflowX="hidden"
      backgroundColor="gray.800"
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflowY="hidden"
    >
      <Avatar height="40px" width="40px" />
      <Divider marginY="15px" width="30px" />
      <Avatar size="md" cursor="pointer" backgroundColor="red" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="blue" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="green" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="orange" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="pink" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="violet" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="cyan" marginY="5px" />
      <Avatar size="md" cursor="pointer" backgroundColor="yellow" marginY="5px" />
    </Box>
  );
}

function CategorySidebar() {
  return (
    <Box width="400px" backgroundColor="gray.700">
      <Box
        height="50px"
        backgroundColor="gray.800"
        borderBottomColor="gray"
        borderBottomWidth="1px"
      />
      <Heading>Hey</Heading>
    </Box>
  );
}

function PlaceholderItem() {
  return (
    <Box display="flex" marginY="15px">
      <Avatar></Avatar>

      <Box width="15px"></Box>

      <Box
        height="225px"
        width="500px"
        borderRadius="10px"
        backgroundColor="gray.500"
      ></Box>
    </Box>
  );
}
