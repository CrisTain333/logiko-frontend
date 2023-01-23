import React from "react";
import FriendsCard from "../../components/FriendsCard/FriendsCard";
import ComingSoon from "../ComingSoon/ComingSoon";

const Friends = () => {
  return (
    <div>
      {/* Main Div  */}
      <div className="main_div">
        {/* search div  */}
        <div className="bg-base-200 rounded-xl shadow-md  p-6 mr-5 flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">Friends</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="search"
              className="py-2 p-2 bg-gray-50 rounded"
            />

            <div className="absolute bottom-2 right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-neutral"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-x-5 gap-y-6 mr-5">
          {/* user Friend Card */}
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
          <FriendsCard />
        </div>
        {/* <ComingSoon /> */}
      </div>
    </div>
  );
};

export default Friends;
