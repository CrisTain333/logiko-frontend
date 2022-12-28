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
            <div className="bg-base-200 rounded-lg shadow-md w-[90%]  p-3">
              <div>
                <div className="flex items-center justify-between">
                  <p className=" font-semibold text-base-900">Friend Request</p>
                  <p className="text-primary font-semibold cursor-pointer">
                    See All
                  </p>
                </div>
                {/* Friend Request component */}
                <div className="space-y-5 py-5">
                  <FriendRequest
                    img={"https://i.ibb.co/bd90CTC/rsz-profile-pic-1.png"}
                    name={"Cristain"}
                  />
                  <FriendRequest
                    img={
                      "https://i.ibb.co/yysqkLr/Whats-App-Image-2022-12-28-at-21-29-16.jpg"
                    }
                    name={"Sakib XRz"}
                  />
                  <FriendRequest
                    img={
                      "https://i.ibb.co/Vv0qNPL/main-qimg-2d25bc414750bea25d0042ac1548a9a4-pjlq.jpg"
                    }
                    name={"Mia Khalifa"}
                  />
                </div>
              </div>
            </div>
          </div>
        </dvi>
      </div>
    </div>
  );
};

export default Home;
