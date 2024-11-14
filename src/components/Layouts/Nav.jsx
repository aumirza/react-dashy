import { Home, Person, Settings, Store } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";

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
      path: "/products",
      icon: <Store />,
      children: [
        {
          text: "Add New",
          path: "/products/add",
        },
      ],
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
        <List sx={{ gap: 0 }} key={index}>
          {links.map((link) => (
            <Fragment key={link.text}>
              <NavItem
                key={link.text}
                {...link}
                end={link.children ? true : false}
              />
              {link.children && link.children.length > 0 && (
                <List sx={{ pl: 2 }}>
                  {link.children.map((child) => (
                    <NavItem
                      key={child.text}
                      {...child}
                      disablePadding={true}
                    />
                  ))}
                </List>
              )}
            </Fragment>
          ))}
          <Divider />
        </List>
      ))}
    </nav>
  );
};

const NavItem = ({ icon, text, path, disablePadding, end }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ListItem sx={{ display: "block" }} disablePadding={disablePadding}>
      <NavLink
        className={({ isActive }) => setIsActive(isActive)}
        style={{ textDecoration: "none" }}
        to={path}
        end={end}
      >
        <ListItemButton selected={isActive}>
          <Divider />
          {icon && (
            <ListItemIcon sx={{ color: "primary" }}>{icon}</ListItemIcon>
          )}
          <ListItemText primary={text} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  );
};
