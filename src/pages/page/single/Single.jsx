import React from "react";
import Navbar from "../../../components/navigation/navbar/Navbar";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import FormProduct from "../FormProduct/FormProd";

const Single = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1
          style={{
            marginLeft: "20px",
            marginBottom: "16px",
            marginTop: "20px",
          }}
          className="text-2xl">
          Create New Product
        </h1>

        <FormProduct />
      </div>
    </div>
  );
};

export default Single;
