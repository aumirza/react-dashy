import { Home, Person, Settings, Store } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  [
    {
      text: "Home",
      icon: <Home />,
      path: "/",
    },
    {
      text: "Profile",
      icon: <Person />,
      path: "/profile",
    },
    {
      text: "Settings",
      icon: <Settings />,
      path: "/settings",
    },
    {
      text: "Products",
      icon: <Store />,
    },
  ],
  [
    {
      text: "Login",
      path: "/login",
    },
    {
      text: "Register",
      path: "/register",
    },
  ],
  [
    {
      text: "404",
      path: "/404",
    },
  ],
];

export const Nav = () => {
  return (
    <nav>
      {navLinks.map((links, index) => (
        <List key={index}>
          {links.map((link) => (
            <ListItem sx={{ display: "block" }} disablePadding>
              <Link style={{ textDecoration: "none" }} to={link.path}>
                <ListItemButton>
                  {link.icon && (
                    <ListItemIcon sx={{ color: "white" }}>
                      {link.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText sx={{ color: "white" }} primary={link.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <Divider />
        </List>
      ))}
    </nav>
  );
};
