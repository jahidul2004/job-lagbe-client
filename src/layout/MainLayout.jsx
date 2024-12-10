import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-[95%] md:container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
