import Navbar from "../../../components/navigation/navbar/Navbar";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
// import Datatable from "../list/Datatable";
import "./customer.scss";

const Customer = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div></div>
        {/* <Datatable /> */}
      </div>
    </div>
  );
};

export default Customer;
