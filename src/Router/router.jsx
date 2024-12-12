import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import Home from "../Components/Home";
import Login from "../pages/login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>this page not found</h2>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/login',
            element:<Login></Login>,
        }
      ]
    },
  ]);

  export default router;