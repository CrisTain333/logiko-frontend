import React from "react";
import settingIcon from "../../../Images/Icons/settings.png";
import chatIcon from "../../../Images/Icons/chat.png";
import dataIcon from "../../../Images/Icons/data-analytics.png";

const Account = () => {
  return (
    <div>
      <div className="shadow-md mt-5 rounded-lg p-3 mx-2 bg-white">
        <div>
          <p className="text-sm text-gray-400 font-bold">Account</p>
          <div className="mt-3">
            {/* Links */}
            <div className="flex items-center my-3">
              <div>
                <img src={settingIcon} alt="" className="h-6 w-6" />
              </div>
              <span className="text-gray-500 font-semibold ml-2 hover:text-blue-600 transition-all duration-500 cursor-pointer">
                Setting
              </span>
            </div>
            <div className="flex items-center my-3">
              <div>
                <img src={dataIcon} alt="" className="h-6 w-6" />
              </div>
              <span className="text-gray-500 font-semibold ml-2 hover:text-blue-600 transition-all duration-500 cursor-pointer">
                Analytical
              </span>
            </div>
            <div className="flex items-center my-3">
              <div>
                <img src={chatIcon} alt="" className="h-6 w-6" />
              </div>
              <span className="text-gray-500 font-semibold ml-2 hover:text-blue-600 transition-all duration-500 cursor-pointer">
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
