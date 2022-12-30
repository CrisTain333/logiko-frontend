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
          <div className="left_Sidebar col-span-3 hidden sticky top-20 h-screen lg:block">
            <NewFeeds />
            <Account />
          </div>

          <div className="main_content col-span-9 mt-5 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
