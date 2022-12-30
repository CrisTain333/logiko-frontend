import React from "react";

const UserProfile = () => {
  return (
    <div>
      {/* main Div  */}
      <div className="shadow-lg p-6 rounded-lg mx-10 bg-base-200">
        {/* cover Image Div */}
        <div className="relative">
          <img
            className="rounded-2xl"
            src="https://i.ibb.co/3cV8HR6/attachment1.png"
            alt=""
          />
          <div className="avatar -bottom-14 left-10 absolute">
            <div
              className="w-24 rounded-full"
              style={{ border: "3px solid white" }}
            >
              <img
                className="object-contain"
                src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* user info Div  */}
        <div className="user_info_main_div flex items-center ml-5">
          {/* profile Div */}

          <div className="ml-32 mt-4">
            <p className="text-xl text-base-900 font-bold">Cristain</p>
          </div>
        </div>

        {/* Links DIV  */}
        <div className="mt-8">
          <hr className="mb-5" />
          <ul className="flex space-x-6">
            <li className="text-base text-base-900 font-semibold cursor-pointer">
              About
            </li>
            <li className="text-base text-neutral font-semibold cursor-pointer">
              Membership
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
  );
};

export default UserProfile;
