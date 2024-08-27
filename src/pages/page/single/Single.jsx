import React from "react";
import Navbar from "../../../components/navigation/navbar/Navbar";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import FormProduct from "../User/FormUser";
import Footer from "../../../components/navigation/footer/Footer";
// import FormProduct from "../User/FormProduct";

const Single = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <h1 className="text-2xl">Create New Product</h1>
        <FormProduct/>
      </div>
    
    </div>
  );
};

export default Single;
