import React, { useContext, useState } from "react";
import logikoLogo from "../../../assets/Icons/logiko-without-bg.png";
import { AuthContext } from "../../../context/AuthProvider";
import uploadImage from "../../../Helper/uploadImage";
import toast, { Toaster } from "react-hot-toast";
import saveUser from "../../../Helper/saveUser";
import swal from "sweetalert";
import smallLoader from "../../../Helper/smallLoader";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { createUser } = useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const phone = form.phone.value;
    const username = form.username.value;
    const profilePicture = form.profilePicture.files[0];
    const formData = new FormData();
    formData.append("image", profilePicture);
    const password = form.password.value;

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
              profilePic,
              password,
              username
            );
            if (result.acknowledged) {
              // show success message
              swal({
                title: "Grate",
                text: "Account Create Successfully",
                icon: "success",
              });
              navigate(from, { replace: true });
            }
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
                            Username
                          </label>
                          <input
                            className="appearance-none block w-full  text-black font-medium border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  "
                            required
                            name="username"
                            // type={view ? "text" : "password"}
                            type="text"
                          />
                        </div>
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
                    <p className="text-xs text-center sm:px-6 py-2 text-base-900 my-3">
                      All ready a user?
                      <Link to="/login" className="underline text-primary px-2">
                        Sign In
                      </Link>
                    </p>
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
