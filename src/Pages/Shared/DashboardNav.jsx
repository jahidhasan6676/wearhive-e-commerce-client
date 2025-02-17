import { Link } from "react-router-dom";
import logo from "../../assets/Assets/logo.png"
import useAuth from "../../Hooks/useAuth";

const DashboardNav = () => {
    const { user } = useAuth();
    //bg-[#23272f]
    return (
        <div className="sticky top-0 z-50 border-l border-gray-600 hidden md:flex w-full h-[60px] bg-white">

            <div className="w-full flex justify-between items-center px-10">
                {/* left side */}
                <div className="flex">
                    <img src={user?.photoURL} alt="" referrerPolicy="no-referrer" className="w-[45px] h-[45px] rounded-full" />
                    <div className="flex flex-col justify-end ml-2">
                        <p className="text-sm">{user?.displayName}</p>
                        <p className="text-gray-500 text-[12px]">welcome to dashboard</p>
                    </div>
                </div>
                {/* right side */}
                <Link to="/">
                    <div className=" flex items-center gap-1">
                        <img className="w-[25px]" src={logo} alt="" />
                        <p className="text-[20px] font-semibold uppercase">Shop<span className="text-secondary">Per</span></p>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DashboardNav;