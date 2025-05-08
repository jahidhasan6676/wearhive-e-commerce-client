import { IoNotificationsOutline } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { Search } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";

const DashboardNav = () => {
    const { user } = useAuth();
    const [role] = useRole();
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const profileRef = useRef(null);

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfilePopup(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="sticky top-0 z-30 border-b border-gray-200 bg-white h-[60px]">
            <div className="w-11/12 mx-auto h-full flex items-center justify-between">
                {/* Search - Hidden on mobile */}
                <div className="relative w-[170px] sm:w-[270px] lg:w-[350px]">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
                    />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <CiMail className="w-[20px] h-[20px]" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <IoNotificationsOutline className="w-[20px] h-[20px]" />
                    </button>
                    
                    <div 
                        className="flex items-center gap-2 relative"
                        ref={profileRef}
                    >
                        <img 
                            src={user?.photoURL} 
                            alt="Profile" 
                            className="w-10 h-10 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all"
                            referrerPolicy="no-referrer"
                            onClick={() => setShowProfilePopup(!showProfilePopup)}
                        />
                        
                        {/* Always visible name and role on desktop */}
                        <div className="hidden md:block">
                            <p className="text-sm font-medium">{user?.displayName}</p>
                            <p className="text-xs text-gray-500 capitalize">{role}</p>
                        </div>

                        {/* Popup for mobile and hover effect */}
                        {showProfilePopup && (
                            <div className="md:hidden absolute right-0 top-12 bg-white shadow rounded-md p-3 min-w-[180px] border border-gray-100 animate-fadeIn">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={user?.photoURL} 
                                        alt="Profile" 
                                        className="w-12 h-12 rounded-full mb-2"
                                        referrerPolicy="no-referrer"
                                    />
                                    <p className="font-medium text-gray-800">{user?.displayName}</p>
                                    <p className="text-xs text-gray-500 capitalize mb-2">{role}</p>
                                    <div className="w-full border-t border-gray-100 pt-2">
                                        <p className="text-sm text-gray-600 text-center">{user?.email}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;