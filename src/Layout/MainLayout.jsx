import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import NewFeeds from "../components/Shared/Sidebar/NewFeeds";
import Account from "../components/Shared/Sidebar/Account";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* Main container  */}
      <div className="main_container">
        <div className="grid grid-cols-12">
          {/* Left sidebar */}
          <div className="left_Sidebar col-span-2">
            <NewFeeds />
            <Account />
          </div>

          <div className="main_ content col-span-10 mt-5 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
