import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../../assets/Icons/left-arrow.png";

const SocialAccount = () => {
  return (
    <div>
      <div className="shadow-md p-2 lg:p-8 rounded-lg  mx-auto bg-base-200 w-[80%] ">
        <div className="flex items-center">
          <Link to="/settings">
            <div className="cursor-pointer hover:scale-95 transition-all duration-700">
              <img src={backIcon} alt="" className="h-8 w-8" />
            </div>
          </Link>
          <div className="ml-3">
            <p className="font-bold text-xl">Social Network </p>
          </div>
        </div>

        <div className="user_info flex items-center justify-center">
          <div>
            <div className="container mx-auto p-2 lg:p-10">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-0  ">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlhtmlFor="facebook"
                    >
                      Facebook
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlhtmlFor="Twitter"
                    >
                      Twitter
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
                      type="text"
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-0  ">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlhtmlFor="Instagram"
                    >
                      Instagram
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlhtmlFor="Github"
                    >
                      Github
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-0  ">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlhtmlFor="Linkedin"
                    >
                      Linkedin
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlhtmlFor="Skype"
                    >
                      Skype
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex   -mx-3 mb-6">
                  <div className="w-full flex  justify-center px-3">
                    <button
                      className="w-auto bg-primary text-white py-2 px-5 rounded  transition-all duration-500 text-lg font-semibold"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialAccount;
