import React from "react";
import FriendRequest from "../../components/Shared/Sidebar/FriendRequest";

const Home = () => {
  return (
    <div>
      {/* Main Div  */}
      <div>
        <dvi className="grid grid-cols-12">
          {/* newsFeed */}
          <div className="col-span-8"></div>

          {/* rightSide component */}
          <div className="col-span-4">
            <FriendRequest />
          </div>
        </dvi>
      </div>
    </div>
  );
};

export default Home;
