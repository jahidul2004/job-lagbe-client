import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            {/* Navbar */}
            <NavBar></NavBar>
            {/* Navbar end */}
            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>
            {/* Footer end */}
        </div>
    );
};

export default MainLayout;
