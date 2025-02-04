import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import DashboardNav from "../Pages/Shared/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white'>
            {/* Left Side: Sidebar Component */}
            <Sidebar />
            {/* Right Side: Dashboard Dynamic Content */}
            <div className='flex-1  md:ml-64'>
                <div className=''>
                    <DashboardNav/>
                    {/* Outlet for dynamic contents */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;