import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import DashboardNav from "../Pages/Shared/DashboardNav";

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white mt-[60px] md:mt-[0px]'>
            {/* Left Side: Sidebar Component */}
            <Sidebar />
            {/* Right Side: Dashboard Dynamic Content */}
            <div className='flex-1  md:ml-64'>
                
                    <DashboardNav/>
                    <div className='bg-gray-100 min-h-[calc(100vh-60px)]'>
                    {/* Outlet for dynamic contents */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;