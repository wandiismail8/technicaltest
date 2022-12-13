import { createBrowserRouter, redirect } from "react-router-dom";

import Count from "../pages/Count";
import HomePage from "../pages/HomePage.jsx";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }

      return null;
    },

    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/counter",
        element: <Count />,
      },
    ],
  },
]);

export default router;
