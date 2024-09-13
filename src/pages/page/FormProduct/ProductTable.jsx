import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductTable({ products, confirmDelete, setSelectedProduct }) {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/produk-edit/${id}/edit`);
  };
  return (
    <div className="flex flex-col">
     
    </div>
  );
}
