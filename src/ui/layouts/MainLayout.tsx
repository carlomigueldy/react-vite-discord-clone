import React from "react";
import { Box } from "@chakra-ui/react";

import AppCategorySidebar from "../components/AppCategorySidebar";
import AppMainContent from "../components/AppMainContent";
import AppServerSidebar from "../components/AppServerSidebar";

type Props = {
  children: JSX.Element;
};

export default function AppMainLayout({ children }: Props) {
  return (
    <Box height="100vh" display="flex" justifyContent="space-between">
      <AppServerSidebar />
      <AppCategorySidebar />
      <AppMainContent />
    </Box>
  );
}
