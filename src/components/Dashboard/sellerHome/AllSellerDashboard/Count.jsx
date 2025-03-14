import { Package, PackageIcon } from 'lucide-react';
import React from 'react';
import { FaBox, FaDollarSign, FaUserPlus, FaSmile, FaMoneyBill, FaMoneyBillWave } from 'react-icons/fa';
import { GrMoney } from "react-icons/gr";

const Count = () => {
    return (
        <div className=" py-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* product  */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-[#1e9ff2]">50</p>
                        <h2 className=" font-medium mt-2 text-gray-500">Total Products</h2>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaBox className="text-[#1e9ff2] w-6 h-6" />
                        
                    </div>
                </div>

                {/* total sales */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-[#ff9149]">57</p>
                        <h2 className="text-gray-500 font-medium mt-2">Total Sales</h2>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                    <GrMoney className="text-[#ff9149] w-6 h-6" />
                    </div>
                </div>

                {/* Total orders */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-purple-500">85</p>
                        <h2 className=" font-medium mt-2 text-gray-500">Total Orders</h2>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <Package className="text-purple-500 w-6 h-6" />
                    </div>
                </div>

                {/* net profit */}
                <div className="bg-white p-6 rounded-md shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-xl font-medium text-[#46d4a2]">$850</p>
                        <h2 className="text-gray-500 font-medium mt-2">Net Profit</h2>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaDollarSign className="text-[#ff9149] w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;