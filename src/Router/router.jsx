import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>this page not found</h2>,
      children: [
        {
            path: '/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;