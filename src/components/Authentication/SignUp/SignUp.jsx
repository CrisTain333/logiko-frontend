import React, { useContext } from "react";
import logikoLogo from "../../../assets/Icons/logiko-without-bg.png";
import { AuthContext } from "../../../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const phone = form.phone.value;
    const profilePicture = form.profilePicture.files[0];
    const formData = new FormData();
    formData.append("image", profilePicture);
    const password = form.password.value;

    console.log(name, email, gender, phone, password, profilePicture);
  };

  return (
    <div>
      {/* main div  */}
      <div className="h-screen flex items-center justify-center">
        {/* left div  */}
        <div>
          <div>
            <img src={logikoLogo} className="w-[10rem] " alt="" />
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
                  <form className="w-full max-w-lg" onSubmit={handleSubmit}>
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
                          name="name"
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
                          name="email"
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
                          Gender
                        </label>
                        <select
                          name="gender"
                          className="border p-2 w-full text-black font-medium"
                        >
                          <option value="Male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                          htmlFor="grid-number"
                        >
                          Phone Number
                        </label>
                        <input
                          className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                          name="phone"
                          type="Number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                          htmlFor="file_input"
                        >
                          Profile Picture
                        </label>
                        <input
                          type="file"
                          id="file_input"
                          name="profilePicture"
                          className="border p-2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className=" w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                          htmlFor="grid-number"
                        >
                          Password
                        </label>
                        <input
                          className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                          name="password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex   -mx-3 mb-6">
                      <div className="w-full flex  justify-center px-3">
                        <button
                          className="w-auto bg-primary text-white py-2 px-5 rounded  transition-all duration-500 text-lg font-semibold"
                          type="submit"
                        >
                          Create Account
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
