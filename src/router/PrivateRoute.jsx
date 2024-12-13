import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center my-20">
                <span className="text-[#008854] loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to={"/signIn"}></Navigate>;
};

export default PrivateRoute;
