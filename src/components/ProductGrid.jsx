import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import { getProductsByName } from "../services/ProductService";
import { Button, TextField } from "@mui/material";


const ProductGrid = () => {
  const [productData, setProductData] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
      const value = e.target.value;
      setSearchValue(value)
  };

  const handleClick = (e) => {
      console.log(searchValue)
    getProductsByName(searchValue).then((product) => {
      setProductData(product.data.results);
      console.log(productData);
    });
  };
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <TextField onChange={handleOnChange} id="searchValue" name="searchValue" />
      <Button onClick={() => handleClick()}>Buscar</Button>
      <Grid container spacing={2}>
        {productData.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
