import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const MainLayout = () => {
    return (
        <div>
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
