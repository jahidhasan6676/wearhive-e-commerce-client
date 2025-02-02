import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaDumbbell } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav>
                <div className="w-11/12 mx-auto flex justify-between items-center py-2">
                    {/* logo section */}
                    <div className="text-xl flex items-center gap-2 font-bold uppercase">
                        <FaDumbbell />
                        <p>Coders</p>
                        <p className="text-secondary">Gym</p>
                    </div>
                    {/* menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            <li className=" ">
                                <NavLink to="/" className={({ isActive }) => `inline-block font-medium text-[17px] ${isActive ? 'text-secondary' : 'hover:text-secondary'}`} >Home</NavLink>
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

                        </ul>
                    </div>
                    {/* icon section */}
                    <div className="flex items-center gap-4">
                        <button className="text-xl hover:bg-secondary p-1 rounded-full hover:text-white duration-200">
                            <PiShoppingCartThin />
                        </button>
                        <button className="font-semibold rounded-md border-2 px-3 py-1 border-secondary hover:bg-secondary hover:text-white hidden md:block">Login</button>

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
                        transition={{duration: 0.3}}
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
                            </ul>
                            <hr className="w-8/12 mx-auto my-4" />
                            <div className="text-center">
                                <button className="font-semibold hover:bg-white hover:text-secondary  rounded-md border-2 px-3 py-1  ">Login</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default Navbar;