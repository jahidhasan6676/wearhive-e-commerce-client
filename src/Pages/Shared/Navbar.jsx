import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Assets/logo.png";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="border-b sticky top-0 backdrop:blur-sm bg-white">
                <div className="w-11/12 mx-auto flex justify-between items-center py-4 ">
                    {/* logo section */}
                    <div className=" flex items-center gap-2 ">
                        <img className="w-[30px]" src={logo} alt="" />
                        <p className="text-[24px] font-bold uppercase">Shop<span className="text-secondary">Per</span></p>

                    </div>
                    {/* menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            <li className=" ">
                                <NavLink to="/" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Home</NavLink>
                            </li>
                            <li className=" ">
                                <NavLink to="/ss" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Shop</NavLink>
                            </li>
                            <li className=" ">
                                <NavLink to="/sg" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >About</NavLink>
                            </li>
                            <li className=" ">
                                <NavLink to="/gs" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Contact</NavLink>
                            </li>
                            <li className=" ">
                                <NavLink to="/dashboard" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Dashboard</NavLink>
                            </li>

                        </ul>
                    </div>
                    {/* icon section */}
                    <div className="flex items-center gap-4">
                        <button className="text-xl hover:bg-secondary p-1 rounded-full hover:text-white duration-200">
                            <PiShoppingCartThin />
                        </button>
                        <Link to="/login">
                            <button className="font-semibold rounded-md border-2 px-3 py-1 border-secondary hover:bg-secondary hover:text-white hidden md:block">Login</button>
                        </Link>

                        {/* mobile hamburger menu section */}
                        <div className="md:hidden" onClick={() => setOpen(!open)}>
                            <MdMenu className="text-3xl" />
                        </div>
                    </div>


                </div>
            </nav>

            {/* mobile sidebar section */}
            <AnimatePresence >
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.3 }}
                        className="absolute to-20 left-0 w-full h-screen z-20"
                    >
                        <div className=" font-semibold py-10 rounded-3xl bg-secondary text-white w-11/12 mx-auto">
                            <ul className="flex flex-col justify-center items-center gap-3">

                                <li className=" ">
                                    <NavLink to="/ss" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Home</NavLink>
                                </li>
                                <li className=" ">
                                    <NavLink to="/ss" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Trainer</NavLink>
                                </li>
                                <li className=" ">
                                    <NavLink to="/sg" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Program</NavLink>
                                </li>
                                <li className=" ">
                                    <NavLink to="/gs" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Blogs</NavLink>
                                </li>
                                <li className=" ">
                                    <NavLink to="/dashboard" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Dashboard</NavLink>
                                </li>
                            </ul>
                            <hr className="w-8/12 mx-auto my-4" />
                            <div className="text-center">
                                <Link to="/login">
                                    <button className="font-semibold hover:bg-white hover:text-secondary  rounded-md border-2 px-3 py-1  ">Login</button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default Navbar;