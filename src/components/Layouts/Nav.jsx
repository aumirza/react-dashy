import { List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/profile">Profile</Link>
        </ListItem>
        <ListItem>
          <Link to="/settings">settings</Link>
        </ListItem>
      </List>
    </nav>
  );
};
