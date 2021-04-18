import { Box } from "@chakra-ui/layout";
import React from "react";
import CategoryChannelList from "./AppCategoryChannelList";

export default function AppCategoryList() {
  return (
    <Box
      flexGrow={1}
      height="0px"
      display="flex"
      overflow="hidden"
      _hover={{
        overflowY: "scroll",
      }}
      flexDirection="column"
      paddingTop="10px"
      paddingX="5px"
    >
      <CategoryChannelList></CategoryChannelList>
      <CategoryChannelList></CategoryChannelList>
      <CategoryChannelList></CategoryChannelList>
      <CategoryChannelList></CategoryChannelList>
    </Box>
  );
}
