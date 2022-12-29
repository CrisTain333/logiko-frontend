import React from "react";
import newsFeed from "../../../assets/Icons/newsfeed.png";
import storyIcon from "../../../assets/Icons/instagram-stories.png";
import friends from "../../../assets/Icons/friends.png";
import userIcon from "../../../assets/Icons/user.png";
import chatIcon from "../../../assets/Icons/chat.png";

const NewFeeds = () => {
  return (
    <>
      <div className="shadow-md mt-5 rounded-xl py-5 px-4 bg-base-200 w-[80%] mx-auto">
        <div>
          <p className="text-sm text-neutral font-medium">New Feeds</p>
          <div className="mt-5 space-y-4">
            {/* Links */}
            <div className="flex items-center">
              <div>
                <img src={userIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                User Profile
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={newsFeed} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Newsfeed
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={storyIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Explore Stories
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={friends} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Friends
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={chatIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFeeds;
