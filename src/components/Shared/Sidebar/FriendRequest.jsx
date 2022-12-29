import React from "react";
import Primary from "../Button/Primary";
import Secondary from "../Button/Secondary";

const FriendRequest = ({ img, name }) => {
  return (
    <>
      {" "}
      {/* Friend Request div */}
      <div className="flex flex-col px-2">
        {/* Friend req card */}
        <div className="flex items-center">
          {/* image div  */}
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          {/* name div */}
          <div className="ml-3">
            <div>
              <p className="text-sm font-bold text-base-900">{name}</p>
            </div>
            <p className="text-xs font-semibold text-neutral mt-1">
              12 Mutual Friend
            </p>
          </div> 
        </div>

        {/* button div  */}
        <div className="mt-3">
          <div className="space-x-2">
            <Primary /> 
            <Secondary />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
