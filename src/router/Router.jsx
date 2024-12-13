import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import PrivateLoginRegister from "./PrivateLoginRegister";
import JobApply from "../pages/jobApply/JobApply";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>404 not found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: (
                    <PrivateLoginRegister>
                        <Register></Register>
                    </PrivateLoginRegister>
                ),
            },
            {
                path: "/signIn",
                element: (
                    <PrivateLoginRegister>
                        <Login></Login>
                    </PrivateLoginRegister>
                ),
            },
            {
                path: "/jobs/:id",
                element: (
                    <PrivateRoute>
                        <JobDetails></JobDetails>
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    return await fetch(
                        `http://localhost:5000/jobs/${params.id}`
                    );
                },
            },
            {
                path: "/jobs/apply/:id",
                element: (
                    <PrivateRoute>
                        <JobApply></JobApply>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
