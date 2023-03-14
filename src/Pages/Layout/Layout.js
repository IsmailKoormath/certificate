import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footerall from "../Footer/Footerall";
import Header from "../Header/Dashboardnav";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
     
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar />
     
        <div className="w-100">{children}</div>
        
      </div>
 <ToastContainer
          position="top-right"
          autoClose={1500}
        />
      <Footerall />
    </div>
  );
};

export default Layout;
