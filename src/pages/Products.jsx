import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  TablePagination,
  TableContainer,
  Typography,
} from "@mui/material";
import { productsData } from "../data";
import { ProductsTable } from "../components/ProductsTable";
import { ProductsTableFilter } from "../components/ProductsTableFilter";

// const TableCell = styled(TableCell)(({ theme }) => ({
//   color: theme.palette.common.white,
// }));

export const Products = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [emptyRows, setEmptyRows] = useState(0);

  const [filters, setFilters] = useState({
    priceFilter: { minPrice: 0, maxPrice: 0 },
    stockFilter: { minStock: 0, maxStock: 0 },
    categoryFilter: [],
  });

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const createSortHandler = (property) => (event) => {
    handleSort(property);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    if (!filteredProducts.length) {
      return;
    }
    const products = filteredProducts
      .sort((a, b) => {
        if (order === "asc") {
          return a[orderBy] < b[orderBy] ? -1 : 1;
        } else {
          return a[orderBy] > b[orderBy] ? -1 : 1;
        }
      })
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    setProducts(products);
  }, [order, orderBy, page, rowsPerPage, filteredProducts]);

  useEffect(() => {
    setEmptyRows(
      rowsPerPage -
        Math.min(rowsPerPage, filteredProducts.length - page * rowsPerPage)
    );
  }, [page, rowsPerPage, filteredProducts]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundOpacity: 0.6,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
          px: 2,
        }}
      >
        <Typography variant="h4" component="div">
          Products
        </Typography>
        <ProductsTableFilter
          products={productsData}
          filters={filters}
          setFilters={setFilters}
          setFilteredProducts={setFilteredProducts}
        />
      </Box>
      {products ? (
        <ProductsTable
          products={products}
          emptyRows={emptyRows}
          order={order}
          orderBy={orderBy}
          createSort={createSortHandler}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 2,
            px: 2,
          }}
        >
          <Typography variant="h6" component="div">
            No products found
          </Typography>
        </Box>
      )}

      {filteredProducts ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
    </TableContainer>
  );
};
