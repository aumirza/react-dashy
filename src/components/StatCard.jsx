import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export const StatCard = ({ stat }) => {
  return (
    <Card sx={{ bgcolor: "primary.main" }}>
      <CardContent>
        <Typography variant="h6" color="white">
          {stat.text}
        </Typography>
        <Typography variant="h4" color="white">
          {stat.value}
        </Typography>
      </CardContent>
    </Card>
  );
};
