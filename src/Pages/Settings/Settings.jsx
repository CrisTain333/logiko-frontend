import React from "react";
import homeIcon from "../../assets/Icons/home.png";
import locationIcon from "../../assets/Icons/placeholder.png";
import socialIcon from "../../assets/Icons/social-media.png";
import myCard from "../../assets/Icons/credit-card.png";
import passwordIcon from "../../assets/Icons/lock.png";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      {/* main div  */}
      <div className="shadow-md p-2 lg:p-8 rounded-lg  mx-auto bg-base-200 w-[80%] ">
        <p className="text-2xl font-bold text-base-900">Settings</p>

        {/* Links Div  */}
        <div className="my-10">
          <div className="links_div">
            <p className="text-sm text-neutral font-medium">General</p>
          </div>

          <div className="flex items-center  mt-5">
            <div className="flex items-center justify-center">
              <img src={homeIcon} alt="" className="h-9 w-9" />
              <Link to="/settings/account-information">
                <span className="text-sm font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                  Account Information
                </span>
              </Link>
            </div>

            <hr />
          </div>
          <div className="flex items-center  mt-5">
            <div className="flex items-center justify-center">
              <img src={locationIcon} alt="" className="h-9 w-9" />
              <Link to="/settings/contact-information">
                <span className="text-sm font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                  Saved Address
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center  mt-5">
            <div className="flex items-center justify-center">
              <img src={socialIcon} alt="" className="h-9 w-9" />
              <Link to="/settings/social-account">
                <span className="text-sm font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                  Social Account
                </span>
              </Link>
            </div>
            <hr />
          </div>
        </div>

        <div className="mt-10">
          <div className="links_div">
            <p className="text-sm text-neutral font-medium">Account</p>
          </div>

          <div className="flex items-center  mt-5">
            <div className="flex items-center justify-center">
              <img src={myCard} alt="" className="h-9 w-9" />
              <span className="text-sm font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                My Cards
              </span>
            </div>

            <hr />
          </div>
          <div className="flex items-center  mt-5">
            <div className="flex items-center justify-center">
              <img src={passwordIcon} alt="" className="h-9 w-9" />
              <span className="text-sm font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Password
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
