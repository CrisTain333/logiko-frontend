import React from "react";
import newsFeed from "../../../Images/Icons/newsfeed.png";
import badge from "../../../Images/Icons/award.png";
import storyIcon from "../../../Images/Icons/instagram-stories.png";
import popularIcon from "../../../Images/Icons/flash-sale.png";
import userIcon from "../../../Images/Icons/user.png";

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
                <img src={badge} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Badge
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={popularIcon} alt="" className="h-7 w-7" />
              </div>
              <span className="text-accent font-semibold ml-3 hover:text-primary transition-all duration-500 cursor-pointer">
                Popular Groups
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFeeds;
