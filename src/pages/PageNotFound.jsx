import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function PageNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#D0CCD0",
        // color: "white",
        textTransform: "uppercase",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h1">404</Typography>
        <image src="/rocket.png" height="100px" />
      </Box>
      <Typography variant="h2">Ahh!! You landed to wrong place</Typography>
      <Button
        sx={{ mt: 5 }}
        variant="contained"
        onClick={() => window.history.back()}
      >
        Go to Home
      </Button>
    </Box>
  );
}
