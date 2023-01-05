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
      <div className="main_container hidden lg:block">
        <div className="grid grid-cols-12">
          {/* Left sidebar */}
          <div className="left_Sidebar col-span-3 hidden sticky top-14 h-screen lg:block">
            <NewFeeds />
            <Account />
          </div>

          <div className="main_content col-span-9 mt-5 ">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="drawer drawer-mobile lg:hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button hidden"
          >
            Open drawer
          </label>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <NewFeeds />
            <Account />
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
