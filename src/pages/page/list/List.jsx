import React from "react";
import Navbar from "../../../components/navigation/navbar/Navbar";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import Footer from "../../../components/navigation/footer/Footer";
import Example from "../../compon/ProductList";

const List = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <Example />
        <Footer/>
      </div>
    </div>
  );
};

export default List;
