import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../../assets/Icons/left-arrow.png";

const AccountInformation = () => {
  return (
    <div>
      {/* Main div  */}
      <div className="shadow-md p-2 lg:p-8 rounded-lg  mx-auto bg-base-200 w-[80%] ">
        <div className="flex items-center">
          <Link to="/settings">
            <div className="cursor-pointer hover:scale-95 transition-all duration-700">
              <img src={backIcon} alt="" className="h-8 w-8" />
            </div>
          </Link>
          <div className="ml-3">
            <p className="font-bold text-xl">Account Details</p>
          </div>
        </div>

        <div className=" flex items-center flex-col justify-center mt-10">
          <div className="avatar ">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
              <img
                src="https://en.esportsku.com/wp-content/uploads/2022/01/Untitled-297.jpg"
                alt="userProfilePicture "
              />
            </div>
          </div>
          {/* <div className="avatar">
            <div className="w-28 rounded">
            </div>
          </div> */}
          <div className="mt-3">
            <p className="font-semibold text-lg">Paraboy Pubg</p>
          </div>
        </div>

        {/* form  */}
        {/* <div className="">
          <form action="">
            <div className="flex justify-center  items-center">
              name div
              <div className="w-1/2">
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" className="border-2" />
              </div>
              <div className="w-1/2">
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" className="border-2" />
              </div>
            </div>
          </form>
        </div> */}

        {/* <div className="user_div flex flex-col md:flex-row items-center justify-start ">
          <div>
            <div className="avatar ">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
                <img
                  src="https://en.esportsku.com/wp-content/uploads/2022/01/Untitled-297.jpg"
                  alt="userProfilePicture "
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="user_info flex items-center justify-center">
          <div>
            <div className="container mx-auto p-2 lg:p-10">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-0  ">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlFor="grid-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
                      id="grid-email"
                      type="email"
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-0  ">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                      id="grid-first-name"
                      type="text"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlFor="town/city"
                    >
                      Town/City
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  "
                      id="grid-email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Relationship
                    </label>
                    <select
                      name=""
                      className="border p-2 w-full text-black font-medium"
                    >
                      <option value="single">single</option>
                      <option value="inARelationship">In a Relationship</option>
                      <option value="divorced">Divorced</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className=" w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                      htmlFor="grid-number"
                    >
                      Phone Number
                    </label>
                    <input
                      className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                      id="grid-number"
                      type="Number"
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

export default AccountInformation;
