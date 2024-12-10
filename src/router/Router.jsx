import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<h2>404 not found</h2>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            }
        ]
    },
]);

export default router;
