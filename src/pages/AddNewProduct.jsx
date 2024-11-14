import { Box, Paper, TableContainer, TextField } from "@mui/material";
import React from "react";

// image: "https://source.unsplash.com/random",
// name: "Nougat",
// category: "Dessert",
// price: 2.5,
// stock: 10,

export default function AddNewProduct() {
  return (
    <TableContainer
      component={Paper}
      sx={{ p: 5, backgroundOpacity: 0.6, borderRadius: 2, boxShadow: 3 }}
    >
      <h1>Add New Product</h1>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField placeholder="Title" value="" label="Name" />
        <TextField label="Category" placeholder="Category" />
        <TextField label="Price" placeholder="price" />
        <TextField label="Stock" placeholder="stock" />
      </Box>
    </TableContainer>
  );
}
