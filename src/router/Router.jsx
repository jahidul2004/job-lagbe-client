import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import JobDetails from "../pages/jobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<h2>404 not found</h2>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/signIn",
                element:<Login></Login>
            },
            {
                path:'/jobs/:id',
                element:<JobDetails></JobDetails>,
                loader: async ({params}) => {
                    return await fetch(`http://localhost:5000/jobs/${params.id}`)
                }
            }
        ]
    },
]);

export default router;
