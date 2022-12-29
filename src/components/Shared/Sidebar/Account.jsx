import React from "react";
import settingIcon from "../../../Images/Icons/settings.png";
import chatIcon from "../../../Images/Icons/chat.png";
import dataIcon from "../../../Images/Icons/data-analytics.png";

const Account = () => {
  return (
    <div>
      <div className="shadow-md mt-5 rounded-lg p-3 bg-base-200 w-[85%] mx-auto">
        <div>
          <p className="text-sm text-neutral font-bold">Account</p>
          <div className="mt-3 space-y-3">
            {/* Links */}
            <div className="flex items-center">
              <div>
                <img src={settingIcon} alt="" className="h-9 w-9" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Setting
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={dataIcon} alt="" className="h-9 w-9" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Analytical
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={chatIcon} alt="" className="h-9 w-9" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
