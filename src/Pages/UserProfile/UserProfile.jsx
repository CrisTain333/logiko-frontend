import React from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import UserPost from "../../components/UserPost/UserPost";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
  const userData = useLoaderData();

  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts", userData?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://logiko-backend.vercel.app/api/v1/post/${userData?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      {/*user main Div  */}
      <div className="">
        <div className="shadow-md p-2 lg:p-6 rounded-lg  lg:mr-8 bg-base-200 w-[95%] mx-auto">
          {/* cover Image Div */}
          <div className="relative">
            {/* <img
              className="rounded-lg h-44 lg:h-80 w-full object-cover"
              src="https://wallpapercave.com/wp/wp11526112.jpg"
              alt=""
            /> */}

            <form action="">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    name="coverPhoto"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            </form>

            <div className="absolute bottom-[-4rem]   lg:bottom-[-6rem] left-[5%]  lg:left-10">
              <div className="flex items-end space-x-5">
                <div className="outline outline-4 outline-base-200 rounded-full">
                  <img
                    className="object-cover w-32 h-32   lg:w-32 lg:h-32 rounded-full"
                    src="https://i.ibb.co/J5Fx2rW/Cris-Tains-Puja-beautiful-cartoon-boy8ksmart-2779a366-918c-4def-a898-f8c40b80a889.png"
                    alt=""
                  />
                </div>
                <div className="pb-5 hidden lg:block">
                  <p className="text-2xl text-base-900 font-bold">Cristain</p>
                  <p className="text-sm text-base-900">200 Friends</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:hidden ">
            <div className="ml-5 ">
              <p className="text-2xl text-base-900 font-bold">Cristain</p>
              <p className="text-sm text-base-900">200 Friends</p>
            </div>
          </div>

          {/* Links DIV  */}
          <div className="mt-4 lg:mt-28">
            <div className="divider mt-0"></div>
            <ul className="flex space-x-6">
              <li className="text-base text-base-900 font-semibold cursor-pointer">
                About
              </li>
              <li className="text-base text-neutral font-semibold cursor-pointer">
                Friends
              </li>
              <li className="text-base text-neutral font-semibold cursor-pointer">
                Photos
              </li>
              <li className="text-base text-neutral font-semibold cursor-pointer">
                Group
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* user about and post Main div  */}
      <div className="user_about_div lg:mr-8 mt-10">
        {/* main_DIV */}
        <div className="grid grid-cols-12 lg:space-x-3">
          {/* user About */}
          <div className="col-span-12 w-[95%]  mx-auto lg:col-span-4">
            <div className="p-5 rounded-lg bg-base-200 shadow-md ">
              {/* user Bio  */}
              <div>
                <p className="text-sm font-bold text-base-900 "> About</p>
                <p className="text-neutral text-sm mt-3 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  facilis ipsam doloribus quis corrupti ab mollitia cupiditate
                  sit ad saepe.
                </p>
              </div>
              <div className="mt-5">
                <div className="divider mt-0"></div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 bg-base-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>

                    <p className="ml-2 text-sm">
                      Works at
                      <span className="font-semibold"> Meta</span>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 bg-base-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="ml-2 text-sm">
                      Lives in{" "}
                      <span className="font-semibold">Muscat, Oman</span>{" "}
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 bg-base-900"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>

                    <p className="ml-2 text-sm">
                      <span className="font-semibold">Single</span>{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 w-[95%] mx-auto mt-8 lg:mt-0">
            <div className="mb-5">
              <CreatePost
                userProfilePic={userData?.profilePic}
                refetch={refetch}
              />
            </div>
            <div className="space-y-5">
              {/* <UserPost img={userPost1} /> */}

              <UserPost
                img={"https://i.ibb.co/0rMCwNT/1674460706815.png"}
                likes={"10k"}
                caption={"Ai"}
              />
              <UserPost
                img={"https://i.ibb.co/brYpCMN/1674460706843.png"}
                likes={"3k"}
                caption={"Ai Nature Art"}
              />
              <UserPost
                img={"https://i.ibb.co/HTs4Ms4/1674460706830.png"}
                likes={"5k"}
                caption={"Beauty Girls"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
