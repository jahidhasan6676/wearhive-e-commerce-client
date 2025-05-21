import { FaBox, FaUserPlus, FaUsers } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';

const UserCount = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Products Sold */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center transition-all hover:shadow-md">
          <div>
            <p className="text-2xl font-semibold text-blue-600">$4,850</p>
            <h2 className="text-gray-600 font-medium mt-1">Products Sold</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <FaBox className="text-blue-600 w-6 h-6" />
          </div>
        </div>
  
        {/* Revenue */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center transition-all hover:shadow-md">
          <div>
            <p className="text-2xl font-semibold text-green-500">$12,450</p>
            <h2 className="text-gray-600 font-medium mt-1">Revenue</h2>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <FiTrendingUp className="text-green-500 w-6 h-6" />
          </div>
        </div>
  
        {/* Total Customer */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center transition-all hover:shadow-md">
          <div>
            <p className="text-2xl font-semibold text-purple-600">1,285</p>
            <h2 className="text-gray-600 font-medium mt-1">Total Customers</h2>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <FaUserPlus className="text-purple-600 w-6 h-6" />
          </div>
        </div>
  
        {/* Total Seller */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center transition-all hover:shadow-md">
          <div>
            <p className="text-2xl font-semibold text-amber-500">342</p>
            <h2 className="text-gray-600 font-medium mt-1">Total Sellers</h2>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl">
            <FaUsers className="text-amber-500 w-6 h-6" />
          </div>
        </div>
      </div>
    );
};

export default UserCount;