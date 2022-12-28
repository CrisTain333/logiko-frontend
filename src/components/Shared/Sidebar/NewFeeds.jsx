import React from "react";
import newsFeed from "../../../Images/Icons/newsfeed.png";
import badge from "../../../Images/Icons/award.png";
import storyIcon from "../../../Images/Icons/instagram-stories.png";
const NewFeeds = () => {
  return (
    <>
      <div className="shadow-md mt-10 rounded-lg p-3 mx-2">
        <div>
          <p className="text-xs text-gray-500 font-bold">New Feeds</p>
          <div className="mt-3">
            {/* Links */}
            <div className="flex items-center my-3">
              <div>
                <img src={newsFeed} alt="" className="h-8 w-8" />
              </div>
              <span className="text-gray-500 font-semibold ml-2 hover:text-blue-600 transition-all duration-500 cursor-pointer">
                Newsfeed
              </span>
            </div>
            <div className="flex items-center my-3">
              <div>
                <img src={badge} alt="" className="h-8 w-8" />
              </div>
              <span className="text-gray-500 font-semibold ml-2 hover:text-blue-600 transition-all duration-500 cursor-pointer">
                Badge
              </span>
            </div>
            <div className="flex items-center my-3">
              <div>
                <img src={storyIcon} alt="" className="h-8 w-8" />
              </div>
              <span className="text-gray-500 font-semibold ml-2 hover:text-blue-600 transition-all duration-500 cursor-pointer">
                Explore Stories
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFeeds;
