import { Avatar, Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box height="100vh" display="flex" justifyContent="space-between">
      <ServerSidebar />
      <CategorySidebar />
      <Box
        backgroundColor="blue"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box height="50px" backgroundColor="red" />

        <Box flexGrow={1} display="flex" justifyContent="space-between">
          <MainContent />

          <MemberSidebar />
        </Box>
      </Box>
    </Box>
  );
}

function MemberSidebar() {
  return <Box width="325px" backgroundColor="yellow"></Box>;
}

function MainContent() {
  return (
    <Box
      // backgroundColor="green.500"
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
      >
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
        <PlaceholderItem />
      </Box>
      <Box height="60px" backgroundColor="orange"></Box>
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
      <Avatar />
      <Divider marginY="15px" />
      <Avatar backgroundColor="red" marginY="5px" />
      <Avatar backgroundColor="blue" marginY="5px" />
      <Avatar backgroundColor="green" marginY="5px" />
      <Avatar backgroundColor="orange" marginY="5px" />
      <Avatar backgroundColor="pink" marginY="5px" />
      <Avatar backgroundColor="violet" marginY="5px" />
      <Avatar backgroundColor="cyan" marginY="5px" />
      <Avatar backgroundColor="yellow" marginY="5px" />
    </Box>
  );
}

function CategorySidebar() {
  return (
    <Box width="400px" backgroundColor="gray.700">
      <Box height="50px" backgroundColor="red" />
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
