import React, { useContext, useState } from "react";
import logikoLogo from "../../../assets/Icons/logiko-without-bg.png";
import { AuthContext } from "../../../context/AuthProvider";
import uploadImage from "../../../Helper/uploadImage";
import toast, { Toaster } from "react-hot-toast";
import saveUser from "../../../Helper/saveUser";
import swal from "sweetalert";
import smallLoader from "../../../Helper/smallLoader";
import getToken from "../../../Helper/getToken";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { createUser } = useContext(AuthContext);

  // Handle form submit
  const handleSubmit = async (e) => {
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

    const userEmail = {
      email: email,
    };

    //form validate
    if (password.length < 6) {
      toast.error("password must be at least 6 characters");
      return;
    } else if (password === "123456") {
      toast.error("password is very week");
    }

    //create User
    setLoading(true);
    createUser(email, password)
      .then(async (userCredential) => {
        // const tokenUri = "http://localhost:8000/api/v1/jwt";
        // fetch(tokenUri, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(userEmail),
        // })
        //   .then((res) => res.json())
        //   .then((token) => {
        //     console.log(token);
        //     localStorage.setItem("Token", token);
        //   });
        getToken(email);

        if (userCredential) {
          //Get Image Url
          const img = await uploadImage(formData);
          const profilePic = img.data.display_url;
          //save user information
          if (img.status === 200) {
            const result = await saveUser(
              name,
              email,
              gender,
              phone,
              profilePic
            );
            console.log(result);

            // show success message
            swal({
              title: "Grate",
              text: "Account Create Successfully",
              icon: "success",
            });
          }
        }
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal({
          title: errorCode,
          text: errorMessage,
          icon: "error",
          button: "ok",
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <Toaster />
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
                          required
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
                          required
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
                          required
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
                          required
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
                          required
                          id="file_input"
                          name="profilePicture"
                          className="border p-2"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className=" w-full px-3 ">
                        <div>
                          <label
                            className="block uppercase tracking-wide text-base-900 text-xs font-bold mb-2"
                            htmlFor="grid-number"
                          >
                            Password
                          </label>
                          <input
                            className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                            required
                            name="password"
                            // type={view ? "text" : "password"}
                            type="password"
                          />
                        </div>

                        <div className="cursor-pointer">
                          {/* {view === false ? (
                            <span onClick={() => setView(!false)}>
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
                                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span onClick={() => setView(!true)}>
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
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </span>
                          )} */}
                        </div>
                      </div>
                    </div>
                    <div className="flex   -mx-3 mb-6">
                      <div className="w-full flex  justify-center px-3">
                        <button
                          className="w-full bg-primary text-white py-2 px-5 rounded  transition-all duration-500 text-lg font-semibold"
                          type="submit"
                        >
                          {loading ? smallLoader : "Create Account"}
                          {/* Create Account */}
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
