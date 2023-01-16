import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  Area,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { sales, sales2 } from "../Data/index";

const allSales = sales.map((sale, index) => {
  return {
    ...sale,
    amt2: sales2[index].amt,
  };
});

export const SalesLineChart = () => {
  const theme = useTheme();
  return (
    <Box sx={{ p: 2 }}>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={allSales}>
          <YAxis />
          <XAxis dataKey="month" />

          {/* shading below line */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.palette.primary.main}
                stopOpacity={0.5}
              />
              <stop
                offset="50%"
                stopColor={theme.palette.primary.main}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.palette.secondary.main}
                stopOpacity={0.5}
              />
              <stop
                offset="50%"
                stopColor={theme.palette.secondary.main}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Tooltip />
          <CartesianGrid vertical={false} strokeDasharray="3 5" />
          <Line
            type="monotone"
            dataKey="amt"
            strokeWidth={3}
            // legendType="none"
            dot={false}
            fillOpacity={1}
            stroke={theme.palette.primary.main}
          />
          <Line
            type="monotone"
            dataKey="amt2"
            strokeWidth={3}
            // legendType="none"
            dot={false}
            fillOpacity={1}
            stroke={theme.palette.secondary.main}
          />
          <Area
            tooltipType="none"
            type="monotone"
            fillOpacity={1}
            stroke={false}
            strokeWidth={3}
            dataKey="amt"
            fill="url(#colorUv)"
          />
          <Area
            tooltipType="none"
            type="monotone"
            fillOpacity={1}
            stroke={false}
            strokeWidth={3}
            dataKey="amt2"
            fill="url(#colorUv2)"
          />
          <Brush
            dataKey="month"
            height={30}
            stroke={theme.palette.primary.main}
            fill="none"
            startIndex={0}
            endIndex={3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
