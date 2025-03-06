
import { IoNotificationsOutline } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { Search } from "lucide-react";
import { CiMail } from "react-icons/ci";

const DashboardNav = () => {
    const { user } = useAuth();
    const [role] = useRole();
    //bg-[#23272f]
    return (
        <div className="sticky top-0 z-50  border-b border-gray-200 hidden md:flex w-full h-[60px] bg-white">

            <div className="w-11/12 mx-auto flex justify-between items-center">
                {/* left side */}
                <div className="relative lg:w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
                </div>
                {/* right side */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        <button className="bg-gray-100 w-[40px] h-[40px] rounded-full flex justify-center items-center"><CiMail className="w-[25px] h-[25px]" /></button>
                        <button className="bg-gray-100 w-[40px] h-[40px] rounded-full flex justify-center items-center"><IoNotificationsOutline className="w-[25px] h-[25px]" /></button>
                    </div>
                    <div className="flex">
                        <img src={user?.photoURL} alt="" referrerPolicy="no-referrer" className="w-[45px] h-[45px] rounded-lg" />
                        <div className="flex flex-col justify-end ml-4">
                            <p className="text-sm font-medium">{user?.displayName}</p>
                            <p className="text-gray-500 text-[12px]">{role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;