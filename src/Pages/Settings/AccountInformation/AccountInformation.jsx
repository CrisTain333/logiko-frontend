import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../../assets/Icons/left-arrow.png";

const AccountInformation = () => {
  return (
    <div>
      {/* Main div  */}
      <div className="shadow-md p-2 lg:p-8 rounded-lg  mx-auto bg-base-200 w-[80%] ">
        <div className="flex items-center">
          <Link to="/settings">
            <div className="cursor-pointer hover:scale-95 transition-all duration-700">
              <img src={backIcon} alt="" className="h-8 w-8" />
            </div>
          </Link>
          <div className="ml-3">
            <p className="font-bold text-xl">Account Details</p>
          </div>
        </div>

        <div className=" flex items-center flex-col justify-center my-10">
          <div className="avatar ">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
              <img
                src="https://en.esportsku.com/wp-content/uploads/2022/01/Untitled-297.jpg"
                alt="userProfilePicture "
              />
            </div>
          </div>
          {/* <div className="avatar">
            <div className="w-28 rounded">
            </div>
          </div> */}
          <div className="mt-3">
            <p className="font-semibold text-lg">Paraboy Pubg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
