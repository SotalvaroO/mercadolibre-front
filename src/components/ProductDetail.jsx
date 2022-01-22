import React, {useState, useEffect} from "react";
import { getProductDetailById, getProductDescription } from "../services/ProductService";
import { Grid, Paper } from "@mui/material";
import {useParams} from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams()
    const [data, setData] = useState({});
    const [description, setDescription] = useState({});
    useEffect(() => {
      getProductDetailById(id).then((response)=>{
          console.log(response.data);
          setData(response.data)
      });
      getProductDescription(id).then((response)=>{
          setDescription(response.data)
      });
    }, []);
    
  return (
    <Grid container sx={{p:10}} spacing={4} direction="row">
      
      <Paper elevation={3}>
        <img
          src={data.thumbnail}
          alt="img-icon"
        />
      </Paper>
      <Paper elevation={3} sx={{width:800}}>
        <h1>{data.title}</h1>
        <h3>{data.price} COP</h3>
        <p>{description.plain_text}</p>
      </Paper>
    </Grid>
  );
};

export default ProductDetail;
