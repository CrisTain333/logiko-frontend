import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Friends from "../Pages/Friends/Friends";
import Home from "../Pages/Home/Home";
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
    ],
  },
]);
