import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import Home from "../Components/Home";
import Login from "../pages/login/Login";
import JobDetails from "../pages/jobDetails/JobDetails";

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
          path: '/jobs/:id',
          element: <JobDetails></JobDetails>,
          loader: ({params})=> fetch(`http://localhost:5555/jobs/${params.id}`)
          
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