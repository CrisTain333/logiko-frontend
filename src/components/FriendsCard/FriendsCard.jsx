import React from "react";

const FriendsCard = () => {
  return (
    <div className="bg-base-200 rounded-xl shadow-md flex flex-col justify-center items-center ">
      <div className="avatar">
        <div className="w-20 rounded-full mt-3">
          <img src="https://i.ibb.co/bd90CTC/rsz-profile-pic-1.png" alt="" />
        </div>
      </div>

      <div className="py-2">
        <p className="text-base-900 font-semibold">Cristain</p>
      </div>

      <div className="my-2">
        <button className="py-2 px-3 rounded text-base-200 font-normal text-base bg-primary">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default FriendsCard;
