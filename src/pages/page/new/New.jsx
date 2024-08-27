import { useEffect, useState } from "react";
import Navbar from "../../../components/navigation/navbar/Navbar";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
import "./new.scss";
import FormProduct from "../User/FormUser";
import axios from "axios";
import { useParams } from "react-router-dom";

const New = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`https://dummyjson.com/products/${id}`).then(({data}) => {
        setProducts(data)
      })
    };

    fetchData(); // Call the fetch function
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1 className="text-2xl">Edit Product</h1>
        <FormProduct product={products}/>
      </div>
    </div>
  );
};

export default New;
