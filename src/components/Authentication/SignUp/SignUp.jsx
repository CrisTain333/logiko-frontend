import React from "react";
import logikoLogo from "../../../assets/Icons/logiko-without-bg.png";

const SignUp = () => {
  return (
    <div>
      {/* main div  */}
      <div className="h-screen flex items-center justify-center">
        {/* left div  */}
        <div>
          <div>
            <img src={logikoLogo} className="w-[10rem]" alt="" />
          </div>
          <div>
            <p className="text-2xl font-medium">
              Ligoko helps you connect and share <br /> with the people in your
              life.
            </p>
          </div>
        </div>
        {/* right div  */}
        <div>
          <div className="shadow-md p-2  rounded-lg  mx-auto bg-base-200 w-[80%] ">
            <div className="user_info flex items-center justify-center">
              <div>
                <div className="container mx-auto p-2">
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
                          <option value="inARelationship">
                            In a Relationship
                          </option>
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
      </div>
    </div>
  );
};

export default SignUp;
