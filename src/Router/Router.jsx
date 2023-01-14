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
import PrivateRoute from "./Private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/friends",
        element: (
          <PrivateRoute>
            <Friends />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings/account-information",
        element: (
          <PrivateRoute>
            <AccountInformation />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings/contact-information",
        element: (
          <PrivateRoute>
            <SavedAddress />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings/social-account",
        element: (
          <PrivateRoute>
            <SocialAccount />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings/change-password",
        element: (
          <PrivateRoute>
            <Password />
          </PrivateRoute>
        ),
      },
      {
        path: "/help",
        element: (
          <PrivateRoute>
            <Help />
          </PrivateRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        ),
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
