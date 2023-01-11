import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../../assets/Icons/left-arrow.png";

const SavedAddress = () => {
  return (
    <div>
      <div className="shadow-md p-2 lg:p-8 rounded-lg  mx-auto bg-base-200 w-[80%] ">
        <div className="flex items-center">
          <Link to="/settings">
            <div className="cursor-pointer hover:scale-95 transition-all duration-700">
              <img src={backIcon} alt="" className="h-8 w-8" />
            </div>
          </Link>
          <div className="ml-3">
            <p className="font-bold text-xl">Contact information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
