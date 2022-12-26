import React from "react";
import Footerall from "../Footer/Footerall";
import Header from "../Header/Dashboardnav";
import Sidebar from "../sidebar/Sidebar";
const Layout=({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="w-100">{children}</div>
      </div>
      <Footerall />
    </div>
  );
}

export default Layout;
