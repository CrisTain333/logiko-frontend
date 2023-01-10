import React from "react";
import homeIcon from "../../assets/Icons/home.png";

const Settings = () => {
  return (
    <div>
      {/* main div  */}
      <div className="shadow-md p-2 lg:p-8 rounded-lg  mx-auto bg-base-200 w-[80%] ">
        <p className="text-2xl font-bold text-base-900">Settings</p>

        {/* Links Div  */}
        <div className="my-14">
          <div className="links_div">
            <p className="text-sm text-neutral font-medium">General</p>
          </div>

          <div className="flex items-center  mt-5">
            <div className="flex items-center justify-center">
              <img src={homeIcon} alt="" className="h-9 w-9" />
              <span className="text-sm font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Account Information
              </span>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
