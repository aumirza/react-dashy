import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Box component="header" sx={{ bgcolor: "primary.main" }}>
      <Typography variant="h4" color="white">
        Header
      </Typography>
    </Box>
  );
};
