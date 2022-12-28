import React from "react";

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
                <img src={img} />
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
            <button className="bg-primary py-1 px-4 rounded-full text-base-200">
              Confirm
            </button>
            <button className="bg-gray-100 py-1 px-4 rounded-full text-base-900">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
