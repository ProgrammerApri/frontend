import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import QueryStatsIcon from "@mui/icons-material/QueryStats";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Logo Pejuang Stack</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span> Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span> Product</span>
            </li>
          </Link>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span> Customer</span>
            </li>
          </Link>
          <li>
            <PaymentIcon className="icon" />
            <span> Transaksi</span>
          </li>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span> Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span> Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span> Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span> System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span> Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span> Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span> Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span> Logout</span>
          </li> */}
        </ul>
      </div>
      <div className="buttom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
