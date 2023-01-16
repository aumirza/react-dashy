import { Divider, Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Nav } from "./Nav";

export const Sidebar = ({ width }) => {
  return (
    <Drawer
      container="aside"
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: width },
      }}
      variant="permanent"
      anchor="left"
      open={true}
    >
      <Box>
        <Typography variant="h4">Sidebar</Typography>
        <Divider />
        <Nav />
      </Box>
    </Drawer>
  );
};
