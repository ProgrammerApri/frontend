import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import axios from "axios";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import AddProductForm from "../../components/formAddProduct/addProduct";
import { Link, useNavigate } from "react-router-dom";
import Single from "../page/single/Single";

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "sku",
        header: "SKU",
        size: 150,
      },
      {
        accessorKey: "title", //access nested data with dot notation
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

      // {
      //   accessorKey: "desc",
      //   header: "Description",
      //   size: 150,
      // },
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
              size="small" // Ukuran tombol kecil
              onClick={() => handleEdit(row.original.id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small" // Ukuran tombol kecil
              onClick={() => handleDelete(row.original)}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(10);

  const getProducts = () => {
    const url = searchQuery ? `https://dummyjson.com/products/search?q=${searchQuery}` : `https://dummyjson.com/product`;
    axios.get(url).then(({ data }) => {
      const formatData = data.products.map((d) => {
        return {
          id: d.id,
          sku: d.sku,
          title: d.title,
          brand: d.brand || "-",
          categ: d.category,
          stock: d.stock,
          desc: d.description,
          price: d.price,
        };
      });

      setProducts(formatData);
    });
  };

  useEffect(() => {
    getProducts();
  }, [searchQuery]);

  const handleEdit = (product) => {
    navigate(`/produk-edit/${product}/edit`);
  };

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Product deleted:", data);

          // Update the state to remove the deleted product from the list
          setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/produk-create"); // Use navigate to programmatically go to the add product page

    // Implement your add logic here
  };

  const table = useMaterialReactTable({
    columns,
    data: products || [], //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <Container>
      <Box my={2} display="flex" justifyContent="space-between" alignItems="center">
        <TextField
          label="Search Products"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          style={{ marginRight: "16px", width: "200px" }} // Add some margin
        />{" "}
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </Box>
      <MaterialReactTable table={table} />;
    </Container>
  );
};

export default Example;
