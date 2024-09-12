// src/components/AddProductForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField, Container, Typography } from "@mui/material";
import addItems from "../redux/reducers/addItem";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    sku: "",
    title: "",
    brand: "",
    categ: "",
    stock: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItems(product));
    setProduct({ sku: "", title: "", brand: "", categ: "", stock: 0, price: 0 });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 4,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Add New Product
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
        }}
      >
        <TextField label="SKU" name="sku" value={product.sku} onChange={handleChange} variant="outlined" fullWidth />
        <TextField label="Product" name="title" value={product.title} onChange={handleChange} variant="outlined" fullWidth />
        <TextField label="Brand" name="brand" value={product.brand} onChange={handleChange} variant="outlined" fullWidth />
        <TextField label="Category" name="categ" value={product.categ} onChange={handleChange} variant="outlined" fullWidth />
        <TextField label="Stock" name="stock" type="number" value={product.stock} onChange={handleChange} variant="outlined" fullWidth />
        <TextField label="Price" name="price" type="number" value={product.price} onChange={handleChange} variant="outlined" fullWidth />
        <Button type="submit" variant="contained" color="primary" sx={{ paddingY: 1, fontWeight: "bold" }}>
          Add Product
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
