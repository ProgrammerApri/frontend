import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Datatable from "../list/Datatable";
import "./customer.scss";

const Customer = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div></div>
        <Datatable />
      </div>
    </div>
  );
};

export default Customer;
