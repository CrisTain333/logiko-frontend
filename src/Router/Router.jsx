import { createBrowserRouter } from "react-router-dom";
import LogIn from "../components/Authentication/LogIn/LogIn";
import MainLayout from "../Layout/MainLayout";
import Friends from "../Pages/Friends/Friends";
import Home from "../Pages/Home/Home";
import AccountInformation from "../Pages/Settings/AccountInformation/AccountInformation";
import SavedAddress from "../Pages/Settings/SavedAddress/SavedAddress";
import Settings from "../Pages/Settings/Settings";
import SocialAccount from "../Pages/Settings/SocialAccount/SocialAccount";
import UserProfile from "../Pages/UserProfile/UserProfile";

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
        path: "/user-profile",
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
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);
