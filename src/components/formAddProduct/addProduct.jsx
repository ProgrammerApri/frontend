// src/components/AddProductForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addProduct } from "../redux/actions/productActions";
import { Box, Button, TextField, Container } from "@mui/material";
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
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="SKU" name="sku" value={product.sku} onChange={handleChange} />
        <TextField label="Product" name="title" value={product.title} onChange={handleChange} />
        <TextField label="Brand" name="brand" value={product.brand} onChange={handleChange} />
        <TextField label="Category" name="categ" value={product.categ} onChange={handleChange} />
        <TextField label="Stock" name="stock" type="number" value={product.stock} onChange={handleChange} />
        <TextField label="Price" name="price" type="number" value={product.price} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
