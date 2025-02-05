export default function AddProduct() {
    return (
        <div className=" bg-gray-50 min-h-[calc(100vh-60px)]  flex justify-center items-center">
            <div className="max-w-2xl mx-auto shadow-sm bg-white p-10 rounded-md ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-lg">Add New Product</h2>
                <form className="grid grid-cols-1 gap-6 sm:gap-4">
                    {/* Image Upload */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Product Image</label>
                        <input type="file" className="mt-2 w-full p-3 border border-gray-300 focus:outline-gray-300 rounded-lg sm:p-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:grid-cols-1">
                        {/* Product Name */}
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input type="text" placeholder="Enter product name" className="mt-2 w-full p-3 border border-gray-300 focus:outline-gray-300 rounded-lg sm:p-2 focus:ring-gray-100" />
                        </div>

                        {/* Main Category */}
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">Main Category</label>
                            <select className="mt-2 w-full p-3 border border-gray-300 focus:outline-gray-300 rounded-lg sm:p-2">
                                <option>Men</option>
                                <option>Women</option>
                                <option>Kids</option>
                            </select>
                        </div>

                        {/* Product Category */}
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">Product Category</label>
                            <input type="text" placeholder="e.g. T-shirt, Jeans" className="mt-2 w-full p-3 border border-gray-300 focus:outline-gray-300 rounded-lg sm:p-2" />
                        </div>

                        {/* Quantity */}
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input type="number" placeholder="Enter quantity" className="mt-2 w-full p-3 border border-gray-300 focus:outline-gray-300 rounded-lg sm:p-2" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea placeholder="Enter product description" className="mt-2 w-full p-3 border border-gray-300 focus:outline-gray-300 rounded-lg h-32 sm:p-2 sm:h-24"></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 flex justify-end">
                        <button type="submit" className="hover:bg-[#23272f] hover:text-white font-medium py-3 px-5 rounded-lg  transition duration-300 border border-gray-300 hover:border-[#23272f]">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


