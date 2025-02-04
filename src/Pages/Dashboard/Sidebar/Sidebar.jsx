import logo from "../../../assets/Assets/logo.png"
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBox, FaChartPie, FaPlus, FaTicketAlt, FaUsers } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
    const [isActive, setActive] = useState(false);

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="">
            {/* Small Screen Navbar */}
            <div className="bg-[#23272f] text-gray-400 flex justify-between md:hidden">
                <div>
                    <div className="block cursor-pointer p-4 font-bold">
                        <Link to="/"><div className=" flex items-center gap-1 text-white">
                            <img className="w-[25px]" src={logo} alt="" />
                            <p className="text-[20px] font-semibold uppercase">Shop<span className="text-secondary">Per</span></p>

                        </div></Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className="mobile-menu-button p-4 focus:outline-none "
                >
                    <AiOutlineBars className="h-5 w-5" />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#23272f] text-gray-400 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && "-translate-x-full"
                    } md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <div>
                    <div className="w-full  px-4 py-2 shadow rounded-lg justify-center items-center mx-auto bg-gray-700">
                        <h2 className="flex items-center justify-center gap-1 font-medium text-gray-100 "> <IoHome className="text-[15px]"/>Admin Home</h2>
                        
                    </div>

                    {/* Nav Items */}
                    <div>
                        <nav className="mt-10  space-y-4 text-[16px] font-medium flex flex-col">

                            <NavLink to="/" className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-gray-700 text-gray-100"
                                    : "hover:bg-gray-700 hover:text-gray-100"
                                }`
                            }><CgProfile className="text-lg" /> Profile</NavLink>

                            <NavLink to="/" className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-gray-700 text-gray-100"
                                    : "hover:bg-gray-700 hover:text-gray-100"
                                }`
                            }><FaPlus />Add Product</NavLink>

                            <NavLink to="/" className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-gray-700 text-gray-100"
                                    : "hover:bg-gray-700 hover:text-gray-100"
                                }`
                            }><FaChartPie /> Statistics</NavLink>

                            <NavLink to="/" className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-gray-700 text-gray-100"
                                    : "hover:bg-gray-700 hover:text-gray-100"
                                }`
                            }><FaUsers />Manage Users</NavLink>

                            <NavLink to="/" className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-gray-700 text-gray-100"
                                    : "hover:bg-gray-700 hover:text-gray-100"
                                }`
                            }><MdReportProblem /> Report Product</NavLink>

                            <NavLink to="/" className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-gray-700 text-gray-100"
                                    : "hover:bg-gray-700 hover:text-gray-100"
                                }`
                            }><FaBox />My Product</NavLink>

                            <NavLink to="/" className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-gray-700 text-gray-100"
                                    : "hover:bg-gray-700 hover:text-gray-100"
                                }`
                            }><FaTicketAlt />Manage Coupon</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;