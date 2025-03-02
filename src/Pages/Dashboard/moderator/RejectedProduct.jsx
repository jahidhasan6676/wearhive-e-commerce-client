import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const RejectedProduct = () => {
    const axiosSecure = useAxiosSecure();

    // all pending products load
    const { data: rejectProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['approveProducts'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/all-reject-product`)
            return data.data;
        }
    })
    if (isLoading) return <LoadingSpinner />
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
                                View
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rejectProducts?.map((rejectProduct, index) => <tr key={rejectProduct._id} className="bg-white border-b text-gray-600">
                            <td className="px-6 py-3">{index + 1}</td>
                            <td className="px-6 py-3 flex justify-center items-center"> <img src={rejectProduct.photo} alt="" className="w-[50px] h-[50px] rounded-md " /> </td>
                            <td className="px-6 py-3">{rejectProduct.productName}</td>
                            <td className="px-6 py-3">{rejectProduct.productCategory}</td>
                            <td className="px-6 py-3 underline"><Link to={`/productDetails/${rejectProduct._id}`} >Details</Link></td>
                            <td className="px-2 md:px-3 lg:px-6 py-3">
                                <button  className="bg-red-500 text-white px-3 py-1 mr-2 rounded-full">{rejectProduct.status}</button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RejectedProduct;