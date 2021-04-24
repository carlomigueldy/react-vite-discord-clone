import React from "react";
import { Box } from "@chakra-ui/react";

import AppLeftSidebar from "../components/AppLeftSidebar";
import AppMainContent from "../components/AppMainContent";
import AppMainSidebar from "../components/AppMainSidebar";

type Props = {
  children: React.ReactNode;
};

export default function AppMainLayout({ children }: Props) {
  return (
    <Box height="100vh" display="flex" justifyContent="space-between">
      <AppMainSidebar />
      <AppLeftSidebar />
      <AppMainContent>{children}</AppMainContent>
    </Box>
  );
}
