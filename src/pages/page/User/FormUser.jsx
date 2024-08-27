import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (product) {
      const {
        id,
        title,
        category,
        price,
        discountPercentage,
        stock,
        tags,
        brand,
        sku,
        weight,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        returnPolicy,
        minimumOrderQuantity,
      } = product;
      setFormData({
        id,
        title,
        category,
        price,
        discountPercentage,
        stock,
        tags,
        brand,
        sku,
        weight,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        returnPolicy,
        minimumOrderQuantity,
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

  const submitData = (e) => {
    e.preventDefault();
    
    // Validation: Check if title is empty
    if (!formData.title) {
      setErrorMessage("Nama Product tidak boleh kosong.");
      return; // Prevent form submission
    }

    console.log(formData);
    axios
      .post("https://dummyjson.com/products/add", formData)
      .then(({ data }) => {
        setSuccessMessage("Product berhasil ditambahkan!");
        setErrorMessage(""); // Clear error message on success
        navigate("/products");
      })
      .catch((error) => {
        setErrorMessage("Terjadi kesalahan saat menambahkan produk.");
      });
  };

  return (
    <form className="lg:w-8/12 flex flex-col gap-y-2" onSubmit={submitData}>
      {successMessage && (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
          role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
          role="alert">
          {errorMessage}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-2">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <label
              htmlFor="sku-input"
              className="block text-sm font-medium mb-2 dark:text-white">
              SKU
            </label>
          </div>
          <input
            type="text"
            id="sku-input"
            onChange={handleChange}
            value={formData.sku}
            name="sku"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="RCH45Q1A"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-2">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <label
              htmlFor="title-input"
              className="block text-sm font-medium mb-2 dark:text-white">
              Nama Product
            </label>
          </div>
          <input
            type="text"
            id="title-input"
            onChange={handleChange}
            value={formData.title}
            name="title"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Product Name"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <label
              htmlFor="brand-input"
              className="block text-sm font-medium mb-2 dark:text-white">
              Brand
            </label>
          </div>
          <input
            type="text"
            id="brand-input"
            onChange={handleChange}
            value={formData.brand}
            name="brand"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Brand Name"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-2">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <label
              htmlFor="stock-input"
              className="block text-sm font-medium mb-2 dark:text-white">
              Stock
            </label>
          </div>
          <input
            type="number"
            id="stock-input"
            onChange={handleChange}
            value={formData.stock}
            name="stock"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="0"
            min="0"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-2">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <label
              htmlFor="category-input"
              className="block text-sm font-medium mb-2 dark:text-white">
              Category
            </label>
          </div>
          <select
            id="category-input"
            onChange={handleChange}
            value={formData.category}
            name="category"
            className="py-3 px-4 pr-9 block w-full border-gray-200 bg-white rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <label
              htmlFor="price-input"
              className="block text-sm font-medium mb-2 dark:text-white">
              Price
            </label>
          </div>
          <input
            type="number"
            id="price-input"
            onChange={handleChange}
            value={formData.price}
            name="price"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Enter price"
            min="0"
            step="0.01"
          />
        </div>
      </div>
      <div className="flex justify-end mt-10 gap-x-4">
        <Link
          to="/products"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
          Cancel
        </Link>

        <button
          onClick={(e) => submitData(e)}
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          {formData.id ? "Update Product" : "New Product"}
        </button>
      </div>
    </form>
  );
}
