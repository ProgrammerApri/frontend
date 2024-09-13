import { useEffect, useMemo, useState } from "react";
import * as React from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Example = () => {
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  // State untuk menyimpan ID item yang akan dihapus
  const [deleteId, setDeleteId] = useState(null);

  // Handler untuk membuka modal dan menyimpan ID item yang akan dihapus
  const handleDelete = (id) => {
    setDeleteId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setDeleteId(null); // Reset ID setelah modal ditutup
  };

  // Handler untuk mengonfirmasi penghapusan
  const handleConfirmDelete = async () => {
    try {
      await fetch(`https://dummyjson.com/products/${deleteId}`, {
        method: 'DELETE',
      });
      console.log(`Item with ID ${deleteId} deleted.`);
      // Lakukan sesuatu setelah berhasil dihapus, seperti memperbarui daftar produk
      handleClose(); // Tutup modal setelah penghapusan
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: "sku",
        header: "SKU",
        size: 150,
      },
      {
        accessorKey: "title",
        header: "Product",
        size: 150,
      },
      {
        accessorKey: "brand",
        header: "Brand",
        size: 150,
      },
      {
        accessorKey: "categ",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "stock",
        header: "Stock",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 150,
      },
      {
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleEdit(row.original.id)}>
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleDelete(row.original.id)}>
              Delete
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // New state for selected category

  const getProducts = async () => {
    try {
      // Ambil semua produk dari API
      const url = `https://dummyjson.com/products`;
      const { data } = await axios.get(url);

      // Format data produk
      const formatData = data.products.map((d) => ({
        id: d.id,
        sku: d.sku,
        title: d.title,
        brand: d.brand || "-",
        categ: d.category,
        stock: d.stock,
        desc: d.description,
        price: d.price,
      }));

      // Set produk dan filter produk berdasarkan query dan kategori
      setProducts(formatData);
      filterProducts(formatData, searchQuery, selectedCategory);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  // Filter produk berdasarkan searchQuery dan selectedCategory
  const filterProducts = (data, query, category) => {
    let filtered = data;

    if (query) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().startsWith(query.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.categ === category);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts(products, searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory, products]);

  const handleEdit = (productId) => {
    navigate(`/produk-edit/${productId}/edit`);
  };

  const handleAddProduct = () => {
    navigate("/produk-create");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const navigate = useNavigate();

  const table = useMaterialReactTable({
    columns,
    data: filteredProducts,
  });



  
  return (
    <Container maxWidth={24}>
      <Box my={2} display="flex" >
        
        <TextField
          label="Search Products"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mr: 2, width: 200 }} // Use sx for consistent styling
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirm Delete
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this item?
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleConfirmDelete}>
              Confirm
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Modal>

        <FormControl size="small" sx={{ mr: 2, width: 200 }}>
          {" "}
          {/* Ensure same size and width */}
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            id="category-input"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Category" // Associate label with Select
            sx={{ width: "100%" }} // Ensure it fills the width of FormControl
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="beauty">Beauty</MenuItem>
            <MenuItem value="fragrances">Fragrances</MenuItem>
            <MenuItem value="furniture">Furniture</MenuItem>
            <MenuItem value="groceries">Groceries</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </Box>

      <MaterialReactTable table={table} />
    </Container>
  );
};

export default Example;
