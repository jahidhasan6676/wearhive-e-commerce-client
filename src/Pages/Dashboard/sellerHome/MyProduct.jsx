import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyProduct = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    // user products data load
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const data = await axiosPublic.get(`/products/emailed/${user?.email}`)
            return data.data;
        }
    })
    console.log(products)

    return (
        <div className="overflow-x-auto bg-gray-100 min-h-screen">
            <div className="py-10">
                <table className="w-11/12 mx-auto table-auto text-sm text-center  text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-white/70 border-b">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b text-gray-600">
                            <td className="px-6 py-6">1</td>
                            <td className="px-6 py-6">Image</td>
                            <td className="px-6 py-6">Product Name</td>
                            <td className="px-6 py-6">Category</td>
                            <td className="px-6 py-6 text-green-500">Active</td>
                            <td className="px-6 py-6">$100</td>
                            <td className="px-6 py-6">
                                <Link to={`/dashboard`}>
                                    <button
                                        className="bg-blue-500 text-white px-2 py-2 rounded-md mr-2 hover:bg-blue-600">
                                        <FaRegEdit />
                                    </button>
                                </Link>

                                <button
                                    className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600">
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                        {/* More rows can be added here */}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyProduct;