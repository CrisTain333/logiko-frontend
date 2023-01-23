import { createBrowserRouter } from "react-router-dom";
import LogIn from "../components/Authentication/LogIn/LogIn";
import SignUp from "../components/Authentication/SignUp/SignUp";
import MainLayout from "../Layout/MainLayout";
import Chat from "../Pages/Chat/Chat";
import Friends from "../Pages/Friends/Friends";
import Help from "../Pages/Help/Help";
import Home from "../Pages/Home/Home";
import AccountInformation from "../Pages/Settings/AccountInformation/AccountInformation";
import Password from "../Pages/Settings/Password/Password";
import SavedAddress from "../Pages/Settings/SavedAddress/SavedAddress";
import Settings from "../Pages/Settings/Settings";
import SocialAccount from "../Pages/Settings/SocialAccount/SocialAccount";
import UserProfile from "../Pages/UserProfile/UserProfile";
// import PrivateRoute from "./Private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user-profile/cristain",
        // loader: async ({ params }) => {
        //   return fetch(
        //     `https://logiko-backend.vercel.app/api/v1/user-profile/${params.id}`
        //   );
        // },
        element: <UserProfile />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/account-information",
        element: <AccountInformation />,
      },
      {
        path: "/settings/contact-information",
        element: <SavedAddress />,
      },
      {
        path: "/settings/social-account",
        element: <SocialAccount />,
      },
      {
        path: "/settings/change-password",
        element: <Password />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
