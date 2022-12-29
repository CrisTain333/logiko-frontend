import React from "react";
import settingIcon from "../../../Images/Icons/settings.png";
import chatIcon from "../../../Images/Icons/chat.png";
import dataIcon from "../../../Images/Icons/data-analytics.png";
import logOut from "../../../Images/Icons/logout.png";

const Account = () => {
  return (
    <div>
      <div className="shadow-md mt-5 rounded-xl py-5 px-4 bg-base-200 w-[80%] mx-auto">
        <div>
          <p className="text-sm text-neutral font-medium">Account</p>
          <div className="mt-5 space-y-4">
            {/* Links */}
            <div className="flex items-center">
              <div>
                <img src={chatIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Chat
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={dataIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Analytical
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={settingIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Setting
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={logOut} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-red-500 transition-all duration-500 cursor-pointer">
                Log Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
