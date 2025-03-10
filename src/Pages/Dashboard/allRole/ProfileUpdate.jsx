const ProfileUpdate = () => {

    return (
        <div className="py-10 min-h-[calc(100vh-60px)] flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-xl mx-auto">
                <h2 className="text-xl font-semibold">Edit Personal Information</h2>
                <p className="text-gray-500 text-sm mb-4">Update your details to keep your profile up-to-date.</p>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium text-gray-700">Social Links</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            <input type="text" placeholder="Facebook" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                            <input type="text" placeholder="X.com" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                            <input type="text" placeholder="LinkedIn" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                            <input type="text" placeholder="Instagram" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-700">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            <input type="text" placeholder="FirstName" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                            <input type="text" placeholder="LastName" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                            <input type="text" placeholder="Phone" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                            <input type="text" placeholder="Bio" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-700">Address Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <input type="text" placeholder="Country" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                        <input type="text" placeholder="City/State" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                        <input type="text" placeholder="Postal Code" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                        <input type="text" placeholder="Tax ID" className="border p-2 rounded w-full focus:outline-black focus:ring-1" />
                    </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded">Save Changes</button>
                    </div>
                </div>
            </div>
            );
};

            export default ProfileUpdate;