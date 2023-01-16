import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Layouts/Header";
import { Sidebar } from "./Layouts/Sidebar";

const SidebarWidth = 180;

export const Layout = () => {
  return (
    <Box>
      <Sidebar width={SidebarWidth} />
      <Box sx={{ ml: SidebarWidth + "px" }} component="main">
        <Header />
        <Box component="section" sx={{ pt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
