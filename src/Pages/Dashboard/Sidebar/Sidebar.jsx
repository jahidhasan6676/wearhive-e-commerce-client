import logo from "../../../assets/Assets/logo.png"
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBox, FaChartPie, FaPlus, FaTicketAlt, FaUsers } from "react-icons/fa";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import {  MdReportProblem } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import { Clock, CheckCircle, XCircle,ClipboardList,CreditCard,Package     } from "lucide-react";
import useAuth from "../../../Hooks/useAuth";
const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const [role, isLoading] = useRole();
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleUserLogOut = () => {
        signOutUser()
        navigate("/login")
    }

    return (
        <div className="">
            {/* Small Screen Navbar */}
            <div className="fixed top-0 z-50 w-full bg-white h-[60px] md:hidden flex items-center border-b">
                <div className="w-11/12 mx-auto flex justify-between items-center">
                    <div className="block cursor-pointer font-bold">
                        <Link to="/"><div className=" flex items-center gap-1">
                            <img className="w-[25px]" src={logo} alt="" />
                            <p className="text-[20px] font-semibold uppercase">Shop<span className="text-secondary">Per</span></p>

                        </div></Link>
                    </div>


                    <button
                        onClick={handleToggle}
                        className="mobile-menu-button focus:outline-none "
                    >
                        <AiOutlineBars className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white w-64 border-r  space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && "-translate-x-full"
                    } md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <div>
                    <div className="px-4 items-center gap-1 hidden md:flex">
                        <img className="w-[25px]" src={logo} alt="" />
                        <p className="text-[20px] font-semibold uppercase">Shop<span className="text-secondary">Per</span></p>

                    </div>

                    {/* Nav Items */}
                    <div>
                        <nav className="mt-10  space-y-4 text-[16px] font-medium flex flex-col">


                            {/* customer */}
                            {
                                role === "customer" && <>
                                    <NavLink to="/dashboard/cart" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><IoCartOutline className=" w-[18px] h-[18px]" />My Cart</NavLink>

                                    <NavLink to="/dashboard/myOrder" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><ClipboardList  className=" w-[18px] h-[18px]" />My Order</NavLink>

                                    <NavLink to="/dashboard/paymentHistory" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><CreditCard    className=" w-[18px] h-[18px]" />Payment History</NavLink>
                                </>
                            }

                            {/* seller */}
                            {
                                role === "seller" && <>
                                    <NavLink to="/dashboard/sellerDashboard" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><BiSolidDashboard className=" w-[18px] h-[18px]" />Dashboard</NavLink>

                                    <NavLink to="/dashboard/addProduct" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><FaPlus className=" w-[18px] h-[18px]" />Add Product</NavLink>

                                    <NavLink to="/dashboard/myProduct" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><FaBox className=" w-[18px] h-[18px]" />My Product</NavLink>

                                    <NavLink to="/dashboard/newOrders" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><Package className=" w-[18px] h-[18px]" />New Orders</NavLink>

                                </>
                            }

                            {/* moderator */}
                            {
                                role === "moderator" && <>
                                    <NavLink to="/dashboard/pendingProduct" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><Clock className="text-yellow-500 w-[18px] h-[18px]" /> Pending Product</NavLink>
                                    <NavLink to="/dashboard/approveProduct" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }> <CheckCircle className="text-green-600 w-[18px] h-[18px]" /> Approve Product</NavLink>
                                    <NavLink to="/dashboard/rejectProduct" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }>  <XCircle className="text-red-600 w-[18px] h-[18px]" /> Rejected Product</NavLink>
                                    <NavLink to="/dashboard/rejectProduct" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><MdReportProblem className="w-[18px] h-[18px]" /> Report Product</NavLink>
                                </>
                            }

                            {/* admin */}
                            {
                                role === "admin" && <>
                                    <NavLink to="/dashboard/adminDashboard" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><BiSolidDashboard className=" w-[18px] h-[18px]" />Dashboard</NavLink>

                                    <NavLink to="/dashboard/manageUsers" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><FaUsers className=" w-[18px] h-[18px]" />Manage Users</NavLink>

                                    <NavLink to="/" className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                            ? "bg-gray-100"
                                            : "hover:bg-gray-100"
                                        }`
                                    }><FaTicketAlt className=" w-[18px] h-[18px]" />Manage Coupon</NavLink>
                                </>
                            }


                            <div className="space-y-4">
                                <NavLink to="/dashboard/profile" className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                        ? "bg-gray-100"
                                        : "hover:bg-gray-100"
                                    }`
                                }><CgProfile className="w-[18px] h-[18px]" /> Profile</NavLink>

                                <NavLink to="/" className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                        ? "bg-gray-100"
                                        : "hover:bg-gray-100"
                                    }`
                                }><IoMdHome className="w-[18px] h-[18px]" /> Home</NavLink>

                                <button onClick={handleUserLogOut} className="
                                    flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 w-full"><IoIosLogOut className="w-[18px] h-[18px]" /> LogOut</button>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;