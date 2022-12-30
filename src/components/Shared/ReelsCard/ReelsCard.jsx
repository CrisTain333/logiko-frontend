import React from "react";
import "./reelscard.css";

const ReelsCard = ({ image, name, userProfile }) => {
  return (
    <div>
      <div>
        <div className="card">
          <img src={image} alt="" className="object-cover" />
          <div className="content">
            <div className="avatar flex justify-center mb-2">
              <div className="w-10 rounded-full border-2 border-primary">
                <img src={userProfile} alt="" />
              </div>
            </div>
            <h2 className="text-center font-medium">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsCard;
