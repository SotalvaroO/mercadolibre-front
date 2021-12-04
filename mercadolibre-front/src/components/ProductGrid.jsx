import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../Product/Product";
import { Products } from "../../ProductData";
import { getProductsByName } from "../services/ProductService";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductsByName().then((product) => {
        setProductData(product.data.results);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {productData.map((product, index) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product.data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
