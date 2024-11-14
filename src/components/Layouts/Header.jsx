import { Avatar, Badge, Box, styled } from "@mui/material";
import React from "react";
import { BreadCrumb } from "../Breadcrumb";
import { Notifications } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "primary.main",
        height: 64,
      }}
    >
      <BreadCrumb />
      <Box>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar>Ad </Avatar>
        </StyledBadge>
        <Badge color="secondary" badgeContent={2} max={100}>
          <Notifications
            sx={{
              color: "white",
              fontSize: 30,
            }}
          />
        </Badge>
      </Box>
    </Box>
  );
};
