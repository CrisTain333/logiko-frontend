import React from "react";
import userPostImage from "../../assets/images/ulmai_flowers_covering_is_face_1870c0e8-269a-4fc8-ac2d-17499e5f673d.png";
import heartIcon from "../../assets/Icons/heart.png";

const UserPost = () => {
  return (
    <div className="bg-base-200 rounded-xl shadow-md  p-6">
      {/* main div */}
      <div className="mainDiv">
        {/* user info div  */}
        <div>
          <div>
            <img src="https://i.ibb.co/bd90CTC/rsz-profile-pic-1.png" alt="" />
            {/* user name and time */}
            <div>
              <p>Cristain</p>
              <p>22 min ago</p>
            </div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* user Text  */}
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            inventore neque rem eaque, tempore blanditiis.
          </p>
        </div>

        {/* user posted Image  */}
        <div>
          <img src={userPostImage} alt="" />
        </div>

        {/* Action div */}
        <div>
          <div>
            {/* react div  */}
            <div>
              <img src={heartIcon} alt="" />
              <p>2.6k like</p>
            </div>

            {/* comment div */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
              <p>22 Comment</p>
            </div>
          </div>
          {/* share div  */}
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
