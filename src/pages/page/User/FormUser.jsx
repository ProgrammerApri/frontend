import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, Alert } from "@mui/material";

export default function FormProduct({ product }) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    price: "",
    discountPercentage: "",
    stock: "",
    tags: "",
    brand: "",
    sku: "",
    weight: "",
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    minimumOrderQuantity: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id || "",
        title: product.title || "",
        category: product.category || "",
        price: product.price || "",
        discountPercentage: product.discountPercentage || "",
        stock: product.stock || "",
        tags: product.tags || "",
        brand: product.brand || "",
        sku: product.sku || "",
        weight: product.weight || "",
        warrantyInformation: product.warrantyInformation || "",
        shippingInformation: product.shippingInformation || "",
        availabilityStatus: product.availabilityStatus || "",
        returnPolicy: product.returnPolicy || "",
        minimumOrderQuantity: product.minimumOrderQuantity || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing
    if (name === "title" && value) {
      setErrorMessage("");
    }
  };

  const submitData = async (e) => {
    e.preventDefault();

    // Validation: Check if title is empty
    if (!formData.title) {
      setErrorMessage("Nama Product tidak boleh kosong.");
      return;
    }

    try {
      // Check if formData.id exists to decide between POST or PUT
      if (formData.id) {
        // Use PUT method to update the product
        const { data } = await axios.put(`https://dummyjson.com/products/${formData.id}`, formData);
        console.log("Product updated: ", data);
        setSuccessMessage("Product berhasil diupdate!");
      } else {
        // Use POST method to add a new product
        const { data } = await axios.post("https://dummyjson.com/products/add", formData);
        console.log("New product added: ", data);
        setSuccessMessage("Product berhasil ditambahkan!");
      }

      setErrorMessage("");

      // Delay navigation for 2 seconds to show success message
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      setErrorMessage("Terjadi kesalahan saat menambahkan atau memperbarui produk.");
    }
  };

  return (
    <Box component="form" sx={{ width: { lg: "66%" }, display: "flex", flexDirection: "column", gap: 2, ml: { xs: 1, md: 2 } }} onSubmit={submitData}>
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      {/* SKU Input */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="sku-input" sx={{ fontWeight: "bold" }}>
            SKU
          </InputLabel>
          <TextField id="sku-input" name="sku" value={formData.sku} onChange={handleChange} placeholder="RCH45Q1A" fullWidth variant="outlined" />
        </Box>
      </Box>

      {/* Product Name & Brand */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="title-input" sx={{ fontWeight: "bold" }}>
            Nama Product
          </InputLabel>
          <TextField id="title-input" name="title" value={formData.title} onChange={handleChange} placeholder="Product Name" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="brand-input" sx={{ fontWeight: "bold" }}>
            Brand
          </InputLabel>
          <TextField id="brand-input" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand Name" fullWidth variant="outlined" />
        </Box>
      </Box>

      {/* Stock Input */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="stock-input" sx={{ fontWeight: "bold" }}>
            Stock
          </InputLabel>
          <TextField id="stock-input" name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="0" fullWidth variant="outlined" inputProps={{ min: 0 }} />
        </Box>
      </Box>

      {/* Category & Price */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="price-input" sx={{ fontWeight: "bold" }}>
            Category
          </InputLabel>
          <FormControl fullWidth>
            <InputLabel htmlFor="category-input"></InputLabel>
            <Select id="category-input" name="category" value={formData.category} onChange={handleChange}>
              <MenuItem value="beauty">Beauty</MenuItem>
              <MenuItem value="fragrances">Fragrances</MenuItem>
              <MenuItem value="furniture">Furniture</MenuItem>
              <MenuItem value="groceries">Groceries</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="price-input" sx={{ fontWeight: "bold" }}>
            Price
          </InputLabel>
          <TextField id="price-input" name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Enter price" fullWidth variant="outlined" inputProps={{ min: 0, step: 0.01 }} />
        </Box>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}>
        <Button component={Link} to="/products" variant="outlined" color="primary" sx={{ fontWeight: "bold" }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: "bold" }}>
          {formData.id ? "Update Product" : "Save Product"}
        </Button>
      </Box>
    </Box>
  );
}
