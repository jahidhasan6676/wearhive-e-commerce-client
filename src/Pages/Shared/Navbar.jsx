import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Assets/logo.png";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { IoMdArrowDropdown } from "react-icons/io";
import useCount from "../../Hooks/useCount";

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const [role] = useRole();
    const [count] = useCount();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleUserLogOut = () => {
        signOutUser();
        navigate("/login");
    };


    const handleCartClick = () => {
        if (!user) {
            setShowLoginModal(true);
        }

        else {
            navigate("/dashboard/cart");
        }
    };

    const handleWishClick = () => {
        if (!user) {
            setShowLoginModal(true);
        }

        else {
            navigate("/wishlist");
        }
    };

    return (
        <>
            <nav className="border-b sticky top-0 backdrop:blur-sm bg-white z-50">
                <div className="w-11/12 mx-auto flex justify-between items-center py-4">
                    {/* logo section */}
                    <div className="flex items-center gap-2">
                        <img className="w-[30px]" src={logo} alt="" />
                        <p className="text-[24px] font-semibold uppercase">Wear<span className="text-secondary">Hive</span></p>
                    </div>

                    {/* Menu section for larger screens */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-5">
                            <li><NavLink to="/" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Home</NavLink></li>

                            {/* Shop Link with Hover and Icon */}
                            <li><NavLink to="/shop" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Shop</NavLink></li>

                            {/* Other links */}
                            <li><NavLink to="/about" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>About</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Contact</NavLink></li>

                            {user?.email && role === "customer" && <li><NavLink to="/dashboard/cart" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Dashboard</NavLink></li>}

                            {user?.email && role === "seller" && <li><NavLink to="/dashboard/sellerDashboard" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Dashboard</NavLink></li>}

                            {user?.email && role === "moderator" && <li><NavLink to="/dashboard/pendingProduct" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Dashboard</NavLink></li>}

                            {user?.email && role === "admin" && <li><NavLink to="/dashboard/adminDashboard" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Dashboard</NavLink></li>}
                        </ul>
                    </div>

                    {/* icon section */}
                    <div className="flex items-center gap-3 ">
                        <div className="relative">
                            <button disabled={role === "seller" || role === "moderator" || role === "admin"} onClick={handleCartClick} className="text-xl flex items-center hover:bg-secondary p-1 rounded-full hover:text-white duration-200 disabled:cursor-not-allowed disabled:opacity-50">
                                <PiShoppingCartThin />
                            </button>
                            <p className="absolute -right-[2px] -top-[4px] bg-black p-1 rounded-full text-xs text-white w-4 h-4 flex justify-center items-center">{user ? count?.cartCount : 0}</p>
                        </div>

                        <div className="relative">
                            <button disabled={role === "seller" || role === "moderator" || role === "admin"} onClick={handleWishClick} className="text-xl flex items-center hover:bg-secondary p-1 rounded-full hover:text-white duration-200 disabled:cursor-not-allowed disabled:opacity-50"><ion-icon name="heart-outline"></ion-icon></button>
                            <p className="absolute -right-[2px] -top-[4px] bg-black p-1 rounded-full text-xs text-white w-4 h-4 flex justify-center items-center">{user ? count.wishCount : 0}</p>
                        </div>
                        {user ? (
                            <button onClick={handleUserLogOut} className="hidden md:block font-semibold rounded-md border-2 px-3 py-1 border-secondary hover:bg-secondary hover:text-white">Logout</button>
                        ) : (
                            <Link to="/login">
                                <button className="hidden md:block font-semibold rounded-md border-2 px-3 py-1 border-secondary hover:bg-secondary hover:text-white">Login</button>
                            </Link>
                        )}

                        {/* mobile hamburger menu section */}
                        <div className="md:hidden" onClick={() => setOpen(!open)}>
                            <MdMenu className="text-3xl" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* mobile sidebar section */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-3/4 h-full mt-[68px] bg-white shadow-lg z-50"
                    >
                        <div className="relative w-full h-full p-6">
                            <button onClick={() => setOpen(false)} className="absolute top-4 left-4 text-2xl">
                                <MdClose />
                            </button>
                            <ul className="flex flex-col gap-4 mt-10">
                                <li><NavLink to="/" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Home</NavLink></li>
                                <li><NavLink to="/men" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Men</NavLink></li>
                                <li><NavLink to="/women" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Women</NavLink></li>
                                <li><NavLink to="/kid" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Kids</NavLink></li>
                                <li><NavLink to="/about" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>About</NavLink></li>
                                <li><NavLink to="/contact" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}>Contact</NavLink></li>

                                {user?.email && role === "customer" && <li><NavLink to="/dashboard/cart" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Dashboard</NavLink></li>}

                                {user?.email && role === "seller" && <li><NavLink to="/dashboard/addProduct" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Dashboard</NavLink></li>}

                                {user?.email && role === "moderator" && <li><NavLink to="/dashboard/pendingProduct" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Dashboard</NavLink></li>}

                                {user?.email && role === "admin" && <li><NavLink to="/dashboard/adminDashboard" className={({ isActive }) => `font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} onClick={() => setOpen(false)}>Dashboard</NavLink></li>}
                            </ul>
                            <div className="mt-6">
                                {user ? (
                                    <button onClick={handleUserLogOut} className="w-fit font-semibold rounded-md border-2 px-3 py-1 border-secondary hover:bg-secondary hover:text-white">Logout</button>
                                ) : (
                                    <Link to="/login">
                                        <button className="w-fit font-semibold rounded-md border-2 px-3 py-1 border-secondary hover:bg-secondary hover:text-white">Login</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm">
                        <h2 className="text-lg font-semibold mb-4 text-center">Please Login First</h2>
                        <p className="text-gray-600 text-center mb-4">You need to log in to access the cart.</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setShowLoginModal(false)} className="px-4 py-2 bg-gray-300 rounded">
                                Cancel
                            </button>
                            <button onClick={() => navigate("/login")} className="px-4 py-2 bg-blue-600 text-white rounded">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
