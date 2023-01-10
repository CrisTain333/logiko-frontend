import logo from "../../../assets/Icons/logiko-without-bg.png";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div className="mt-24">
      {/* Main Div  */}
      <div>
        <div className="max-w-xl mx-auto mb-6 ">
          <div className="flex items-center ">
            <div className="w-full  rounded bg-base-200 shadow-lg  p-8 m-4 md:max-w-sm md:mx-auto">
              <span className="flex justify-center items-center  w-full text-xl uppercase font-bold mb-4 text-center">
                <img src={logo} alt="brandImage" className="w-[7rem] mr-2" />
              </span>
              <form className="mb-4">
                <div className="mb-4 md:w-full">
                  <label htmlFor="email" className="block text-xs mb-1">
                    Email
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-6 md:w-full">
                  <label htmlFor="password" className="block text-xs mb-1">
                    Password
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="bg-primary  text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
                  value="Login"
                />
              </form>
              <Link to="/passwordreset">
                <p className="text-primary underline ">Forgot Password ? </p>
              </Link>
              <p className="text-xs text-center sm:px-6 py-2 text-base-900 my-3">
                Dont have an account?
                <Link
                  rel="noopener noreferrer"
                  to="/singup"
                  className="underline text-primary px-2"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
