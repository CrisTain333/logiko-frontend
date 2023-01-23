import React from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import ReelsCard from "../../components/Shared/ReelsCard/ReelsCard";
import FriendRequest from "../../components/Shared/Sidebar/FriendRequest";
import UserPost from "../../components/UserPost/UserPost";
import "./home.css";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";
const Home = () => {
  const {
    data: posts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://logiko-backend.vercel.app/api/v1/post");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <div className="h-3/4 w-full flex justify-center items-center mt-20">
      <ThreeCircles
        height="150"
        width="150"
        color="#3075FF"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>;
  }

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* Main Div  */}
      <div>
        <div className="grid grid-cols-12 gap-4">
          {/* newsFeed */}
          <div className="col-span-12 lg:col-span-8 ">
            {/* ----- Main Content DIV ------ */}
            <div className="space-y-5">
              <div className="reals_div flex overflow-x-scroll example space-x-3 w-[95%] mx-auto">
                {/* add story */}
                <div>
                  <div>
                    <div className="add-card bg-[#343A40] dark:bg-[#293145]">
                      <div className="" />
                      <div className="content">
                        <div className="flex justify-center mb-2">
                          <div className="w-10 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="rounded-full p-2 w-10 h-10 bg-white text-primary"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </div>
                        </div>
                        <h2 className="text-center font-medium">Add Story</h2>
                      </div>
                    </div>
                  </div>
                </div>
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
              {/* Create Post */}
              <div className="w-[95%] mx-auto">
                <CreatePost refetch={refetch} />
              </div>

              {/* User Post  */}
              <div className="w-[95%] mx-auto space-y-5 ">
                <UserPost
                  caption={"Cristain Anime Art"}
                  img={"https://i.ibb.co/2Pw3793/1674457080310.png"}
                  likes={800}
                />
                <UserPost
                  caption={"Dragon AI Art"}
                  img={"https://i.ibb.co/rwz8wSF/1674457262848.png"}
                  likes={300}
                />
                <UserPost
                  caption={"Dragon With Angry Dad"}
                  img={"https://i.ibb.co/Lrj5C4M/1674457262827.png"}
                  likes={`1k`}
                />
                <UserPost
                  caption={"Full Website Designed By Cristain"}
                  likes={`2k`}
                />
              </div>
            </div>
          </div>

          {/* rightSide component */}
          <div className="col-span-4 hidden lg:block">
            <div className="bg-base-200 rounded-xl shadow-md w-[90%] py-5 px-4">
              <div>
                <div className="flex items-center justify-between px-2">
                  <p className=" font-semibold text-base-900">Friend Request</p>
                  <p className="text-primary font-semibold cursor-pointer">
                    See All
                  </p>
                </div>
                {/* Friend Request component */}
                <div className="space-y-5 pt-5 pb-3">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
