import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  Bar,
  BarChart,
  Brush,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { sales } from "../Data/index";

export const SalesBarChart = () => {
  const theme = useTheme();
  return (
    <Box sx={{ p: 2, backgroundColor: theme.palette.background.paper }}>
      <Box
        sx={{
          height: 150,
          p: 3,
          background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.primary.main} 90%)`,
          borderRadius: 5,
        }}
      >
        <ResponsiveContainer width="90%">
          <BarChart data={sales} barGap={3} barSize={10} margin="5">
            <YAxis
              tick={{ fill: "white" }}
              // axisLine={{ stroke: "white" }}
              // tickLine={{ stroke: "white" }}
              tickLine={false}
              axisLine={false}
            />
            <XAxis dataKey="month" hide={true} />
            <Tooltip
              labelStyle={{ color: theme.palette.secondary.main }}
              itemStyle={{ color: theme.palette.primary.main }}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="amt"
              fill="white"
              radius={[10, 10, 0, 0]}
              spacing={3}
            />
            {/* <Legend /> */}
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Typography variant="h4">Sales Bar Chart</Typography>
    </Box>
  );
};
