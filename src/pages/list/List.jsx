import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Datatable from "./Datatable";
import DialogTambah from "./DialogTambah";

const List = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Product</h1>
        <DialogTambah />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
