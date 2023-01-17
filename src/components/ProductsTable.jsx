import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Product",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "stock",
    numeric: true,
    disablePadding: false,
    label: "Stock",
  },
];

export const ProductsTable = ({
  emptyRows,
  orderBy,
  order,
  products,
  createSort,
}) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                sx={{ fontWeight: "bold", fontSize: "large" }}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSort(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell component="th">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: 30, height: 30, pr: 2 }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                    src={product.image}
                    alt={product.name}
                  />
                </Box>
                <Typography variant="body2">{product.name}</Typography>
              </Box>
            </TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell align="right">{product.price}</TableCell>
            <TableCell align="right">{product.stock}</TableCell>
          </TableRow>
        ))}
        {emptyRows > 0 && (
          <TableRow
            sx={{
              height: 62.8 * emptyRows,
            }}
          >
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
