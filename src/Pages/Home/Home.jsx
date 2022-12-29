import React from "react";
import ReelsCard from "../../components/Shared/ReelsCard/ReelsCard";
import FriendRequest from "../../components/Shared/Sidebar/FriendRequest";
import "./home.css";
const Home = () => {
  return (
    <div>
      {/* Main Div  */}
      <div>
        <dvi className="grid grid-cols-12">
          {/* newsFeed */}
          <div className="col-span-8">
            {/* ----- Main Content DIV ------ */}
            <div>
              <div className="reals_div flex overflow-hidden  example space-x-3">
                <ReelsCard
                  image={"https://pbs.twimg.com/media/FWUckPnaMAMqPYA.jpg"}
                  name={"Kerrty"}
                  userProfile={
                    "https://telugubucket.com/wp-content/uploads/2022/05/f27efcdb197933b48b4a397096e343b0.jpg"
                  }
                />
                <ReelsCard
                  image={
                    "https://i.pinimg.com/originals/fd/ca/eb/fdcaeb6ffe3e76ed948cc426f58efc6e.jpg"
                  }
                  name={"Anu"}
                  userProfile={
                    "https://i.pinimg.com/originals/fd/ca/eb/fdcaeb6ffe3e76ed948cc426f58efc6e.jpg"
                  }
                />
                <ReelsCard
                  image={
                    "https://i.pinimg.com/originals/a0/06/d5/a006d5d8429585a2dc588819066348db.jpg"
                  }
                  name={"Purnima"}
                  userProfile={
                    "https://i.pinimg.com/236x/4c/8a/53/4c8a53c44e462fb58269b0eb07601198.jpg"
                  }
                />
                <ReelsCard
                  image={
                    "https://i.pinimg.com/736x/11/87/31/118731bea3cf9d11ef60f8cd5a0e3ae2.jpg"
                  }
                  name={"Safa"}
                  userProfile={
                    "https://i.pinimg.com/550x/b4/e5/bb/b4e5bb59958ca218e4dcfa73768387ce.jpg"
                  }
                />
              </div>
            </div>
          </div>

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
