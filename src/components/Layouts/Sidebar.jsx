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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 64,
            bgcolor: "primary.dark",
          }}
        >
          <Typography
            sx={{ fontWeight: "800", fontSize: { xs: "2.5rem", sm: "3rem" } }}
            fontFamily="monospace"
            variant="h4"
            color="white"
          >
            Dashy
          </Typography>
        </Box>
        <Divider />
        <Nav />
      </Box>
    </Drawer>
  );
};
