import React, { useContext, useEffect, useState } from "react";
import newsFeed from "../../../assets/Icons/newsfeed.png";
// import storyIcon from "../../../assets/Icons/instagram-stories.png";
import friends from "../../../assets/Icons/friends.png";
// import userIcon from "../../../assets/Icons/user.png";
import chatIcon from "../../../assets/Icons/chat.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const NewFeeds = () => {
  // const [getUser, setGetUser] = useState([]);
  // const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   fetch(`https://logiko-backend.vercel.app/api/v1/user/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGetUser(data);
  //     });
  // }, [user?.email]);

  return (
    <>
      <div className="shadow-md mt-5 rounded-xl py-5 px-4 bg-base-200 w-[80%] mx-auto">
        <div>
          <p className="text-sm text-neutral font-medium">New Feeds</p>
          <div className="mt-5 space-y-4">
            {/* Links */}
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-7 rounded-full">
                  <img
                    src="https://i.ibb.co/J5Fx2rW/Cris-Tains-Puja-beautiful-cartoon-boy8ksmart-2779a366-918c-4def-a898-f8c40b80a889.png"
                    alt=""
                  />
                </div>
              </div>
              <Link to={`/user-profile/cristain`}>
                <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                  Profile
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div>
                <img src={newsFeed} alt="" className="h-7 w-7" />
              </div>
              <Link to="/">
                <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                  Newsfeed
                </span>
              </Link>
            </div>
            {/* <div className="flex items-center">
              <div>
                <img src={storyIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Explore Stories
              </span>
            </div> */}
            <div className="flex items-center">
              <div>
                <img src={friends} alt="" className="h-7 w-7" />
              </div>
              <Link to="/friends">
                <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                  Friends
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div>
                <img src={chatIcon} alt="" className="h-7 w-7" />
              </div>
              <Link to="/chat">
                <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                  Chat
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFeeds;
