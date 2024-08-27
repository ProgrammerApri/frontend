import Navbar from "../../../components/navigation/navbar/Navbar";
import Sidebar from "../../../components/navigation/sidebar/Sidebar";
// import List from "../list/List";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
