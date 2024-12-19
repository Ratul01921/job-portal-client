import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import Home from "../Components/Home";
import Login from "../pages/login/Login";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivetRouter from "./PrivetRouter";
import JobApply from "../pages/JobApply";
import MyApplications from "../Components/MyApplications";
import AddJob from "../Components/AddJob";

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
          path: 'jobs/:id',
          element: <PrivetRouter><JobDetails></JobDetails></PrivetRouter>,
          loader: ({params})=> fetch(`http://localhost:5555/jobs/${params.id}`)
          
        },
        {
          path: 'jobApply/:id',
          element: <PrivetRouter><JobApply></JobApply></PrivetRouter>
        },
        {
          path: 'myApplications',
          element: <PrivetRouter><MyApplications></MyApplications></PrivetRouter>
        },
        {
          path: 'addJob',
          element: <PrivetRouter><AddJob></AddJob></PrivetRouter>
        },
        {
            path: 'register',
            element:<Register></Register>
        },
        {
            path: 'login',
            element:<Login></Login>,
        }
      ]
    },
  ]);

  export default router;