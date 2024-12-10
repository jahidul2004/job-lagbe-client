import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";

const MainLayout = () => {
    return (
        <div className="w-[95%] md:container mx-auto">
            {/* Navbar */}
            <NavBar></NavBar>
            {/* Navbar end */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
