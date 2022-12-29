import React from "react";
import "./reelscard.css";

const ReelsCard = ({ image, name, userProfile }) => {
  return (
    <div>
      <div>
        <div className="card">
          <img src={image} alt="" className="object-cover" />
          <div className="content">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={userProfile} alt="" />
              </div>
            </div>
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsCard;
