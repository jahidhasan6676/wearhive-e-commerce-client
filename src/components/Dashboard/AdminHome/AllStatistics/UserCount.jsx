import React from 'react';
import { FaBox, FaDollarSign, FaUserPlus, FaSmile } from 'react-icons/fa';

const UserCount = () => {
    return (
        <div className=" py-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Products Sold */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-[#1e9ff2]">$850</p>
                        <h2 className=" font-medium mt-2 text-gray-500">Products Sold</h2>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaBox className="text-[#1e9ff2] w-6 h-6" />
                    </div>
                </div>

                {/* Net Profit */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-[#ff9149]">$850</p>
                        <h2 className="text-gray-500 font-medium mt-2">Revenue</h2>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FaDollarSign className="text-[#ff9149] w-6 h-6" />
                    </div>
                </div>

                {/* New Customers */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-purple-500">85</p>
                        <h2 className=" font-medium mt-2 text-gray-500">Total Customer</h2>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <FaUserPlus className="text-purple-500 w-6 h-6" />
                    </div>
                </div>

                {/* Customer Satisfaction */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-[#46d4a2]">50</p>
                        <h2 className="text-gray-500 font-medium mt-2">Total Seller</h2>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <FaUserPlus className="text-[#46d4a2] w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCount;