
import { FaPen, FaPenAlt } from "react-icons/fa";
import {
    FaFacebook,
    FaXTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";


const Profile = () => {
    const { user } = useAuth();
   

    return (
        <div className=" bg-gray-100 ">
            <div className="w-11/12 py-10 mx-auto">

                <div className=" bg-white  rounded-lg p-6 border">
                    {/* Profile Header */}
                    <h3 className="text-lg font-semibold mb-3">Profile</h3>

                    <div className="flex lg:flex-row flex-col justify-center items-center gap-4 border rounded-lg p-4">
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            referrerPolicy="no-referrer"
                            className="w-20 h-20 rounded-full border"
                        />
                        <div>
                            <h2 className="text-xl font-bold lg:text-start text-center">
                                {user?.displayName}
                            </h2>
                            <p className="text-gray-600 lg:text-start text-center">
                                Team Manager | Leeds, United Kingdom
                            </p>
                        </div>
                        <div className="lg:ml-auto flex gap-3">
                            <FaFacebook className="text-4xl text-gray-500 cursor-pointer hover:text-blue-600 border p-1.5 rounded-badge" />
                            <FaXTwitter className="text-4xl text-gray-500  cursor-pointer hover:text-black border p-1.5 rounded-badge" />
                            <FaLinkedin className="text-4xl text-gray-500  cursor-pointer hover:text-blue-500 border p-1.5 rounded-badge" />
                            <FaInstagram className="text-4xl text-gray-500  cursor-pointer hover:text-pink-500 border p-1.5 rounded-badge" />
                        </div>
                        <Link to="/dashboard/profileUpdate"><button  className="text-gray-500 lg:w-auto w-full justify-center flex items-center gap-2 border px-3 py-1 rounded-badge">
                            <FaPen></FaPen>
                            Edit
                        </button></Link>
                    </div>

                    {/* Personal Information */}
                    <div className="mt-8 p-4 border rounded-lg">
                        <div className="flex lg:flex-row flex-col justify-between items-center">
                            <h3 className="text-lg font-semibold">Personal Information</h3>

                            <Link to="/dashboard/profileUpdate"><button className="text-gray-500 hidden lg:flex items-center gap-2 border px-3 py-1 rounded-badge">
                                <FaPen></FaPen>
                                Edit
                            </button></Link>
                        </div>
                        <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700">
                            <p>
                                <span className="text-sm text-gray-500">First Name</span>
                                <br />
                                <strong>{user?.displayName?.split(" ")[0]}</strong>
                            </p>
                            <p>
                                <span className="text-sm text-gray-500">Last Name</span>
                                <br />
                                <strong>{user?.displayName?.split(" ")[1]}</strong>
                            </p>
                            <p>
                                <span className="text-sm text-gray-500">Email</span>
                                <br />
                                <strong>{user?.email}</strong>
                            </p>
                            <p>
                                <span className="text-sm text-gray-500">Phone</span>
                                <br />
                                <strong>+09 363 398 46</strong>
                            </p>
                            <p>
                                <span className="text-sm text-gray-500">Bio</span>

                                <br />
                                <strong>Team Manager</strong>
                            </p>
                            <Link to="/dashboard/profileUpdate"><button onClick={() => setIsModalOpen(true)} className="text-gray-500 lg:hidden justify-center flex items-center gap-2 border px-3 py-1 rounded-badge">
                                <FaPen></FaPen>
                                Edit
                            </button></Link>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="mt-8 p-4 border rounded-lg">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Address</h3>
                            <Link to="/dashboard/profileUpdate"><button  className="text-gray-500 hidden  lg:flex items-center gap-2 border px-3 py-1 rounded-badge">
                                <FaPen></FaPen>
                                Edit
                            </button></Link>
                        </div>
                        <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700">
                            <p>
                                <span className="text-sm text-gray-500">Country</span>
                                <br />
                                <strong> United Kingdom</strong>
                            </p>
                            <p>
                                <span className="text-sm text-gray-500">City/State</span>
                                <br />
                                <strong> Leeds, East London</strong>
                            </p>

                            <p>
                                <span className="text-sm text-gray-500">Postal Code</span>
                                <br />
                                <strong> ERT 2489</strong>
                            </p>

                            <p>
                                <span className="text-sm text-gray-500">TAX ID</span>
                                <br />
                                <strong> AS4568384</strong>
                            </p>
                            <Link to="/dashboard/profileUpdate"><button className="text-gray-500 lg:hidden justify-center flex items-center gap-2 border px-3 py-1 rounded-badge">
                                <FaPen></FaPen>
                                Edit
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default Profile;