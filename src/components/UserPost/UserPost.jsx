import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import likedIcon from "../../assets/Icons/heart.png";
import { AuthContext } from "../../context/AuthProvider";
import getRelativeDateString from "../../Helper/getRelativeDateString";

const UserPost = ({ img, caption, likes }) => {
  const date = new Date();
  // const [loading, setLoading] = useState(false);
  // // const [likes, setLikes] = useState([]);
  // const [getUser, setGetUser] = useState([]);
  // const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   fetch(`https://logiko-backend.vercel.app/api/v1/user/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGetUser(data);
  //     });
  // }, [user?.email]);

  // // console.log(getUser);

  // // GET Likes for post
  // // useEffect(() => {
  // //   setLoading(true);
  // //   fetch(`https://logiko-backend.vercel.app/api/v1/like/${post?._id}`)
  // //     .then((res) => res.json())
  // //     .then((data) => {
  // //       setLikes(data);
  // //       setLoading(false);
  // //     });
  // //   setLoading(false);
  // // }, [post?._id, loading]);

  // const { data: likes = [], refetch } = useQuery({
  //   queryKey: ["likes"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://logiko-backend.vercel.app/api/v1/like/${post?._id}`
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // const handleLikeDislike = () => {
  //   const likedUser = {
  //     postId: post?._id,
  //     userName: getUser?.username,
  //     liked: true,
  //   };
  //   fetch("https://logiko-backend.vercel.app/api/v1/like", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(likedUser),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLoading(true);
  //       refetch();
  //     });
  // };

  return (
    <div className="bg-base-200 rounded-xl shadow-md  p-6  mx-auto ">
      {/* main div */}
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="mainDiv">
        {/* user info div  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="avatar">
              <div className="w-14 shadow-sm rounded-full">
                <img
                  src="https://i.ibb.co/J5Fx2rW/Cris-Tains-Puja-beautiful-cartoon-boy8ksmart-2779a366-918c-4def-a898-f8c40b80a889.png"
                  alt=""
                />
              </div>
            </div>
            {/* user name and time */}
            <div className="ml-5">
              <p className="text-sm font-bold text-base-900">Cristain</p>
              <p className="text-xs font-semibold text-neutral">
                {getRelativeDateString(date)}
              </p>
            </div>
          </div>
          <div>
            <div className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-base-900"
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
        <div className="w-[90%] my-5">
          <p className=" flex- flex-wrap text-sm text-accent">{caption}</p>
        </div>

        {/* user posted Image  */}
        {img ? (
          <div className="rounded-xl ">
            <img src={img} className="rounded-xl " alt="" />
          </div>
        ) : null}

        {/* Action div */}
        <div className="flex items-center justify-between mt-5 mx-5">
          <div className=" flex items-center">
            {/* react div  */}
            <div className="flex items-center justify-between">
              <div
              // onClick={handleLikeDislike}
              >
                <img
                  src={likedIcon}
                  className="h-5 cursor-pointer hover:scale-125 transition-all duration-700"
                  alt=""
                />
              </div>

              <p className="ml-2 text-sm font-bold text-base-900 flex">
                {likes}
                {/* <span className="hidden lg:block">like</span> */}
              </p>
            </div>
            {/* comment div */}
            <div className="flex items-center justify-between ml-5">
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
              <p className="ml-2 text-sm font-bold text-base-900 flex">
                22k
                {/* <span className="hidden lg:block ml-2">Comment</span> */}
              </p>
            </div>
          </div>
          {/* share div  */}
          <div className="flex items-center ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
            <p className="ml-2 text-sm font-bold text-base-900 flex items-center justify-center">
              Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
