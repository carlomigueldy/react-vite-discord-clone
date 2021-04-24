import React from "react";
import { Box, Text } from "@chakra-ui/layout";

export type AppCategoryItemProps = {
  label: string;
  active?: boolean;
  onClick?: VoidFunction;
};

export default function AppChannelListItem({
  label,
  active,
  onClick,
}: AppCategoryItemProps) {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      padding="3px"
      backgroundColor={active ? "gray.500" : "transparent"}
      borderRadius="3px"
      marginY="2px"
      cursor="pointer"
      onClick={onClick}
      _hover={{
        backgroundColor: "gray.600",
      }}
    >
      <Text
        color="gray.300"
        marginRight="10px"
        fontStyle="italic"
        fontSize="xl"
      >
        #
      </Text>
      <Text color="white">{label}</Text>
      <Box></Box>
    </Box>
  );
}
