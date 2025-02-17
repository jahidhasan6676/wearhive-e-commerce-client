import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import PendingProductTable from "../../../components/Dashboard/ModeratorHome/PendingProductTable";
import { toast } from "react-toastify";


const PendingProduct = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // all pending products load
    const { data: pendingProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['pendingProduct'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/all-pending-product`)
            return data.data;
        }
    })

    // product status update
    const handleUpdateStatus = async(id, status) => {
        try {

            const res = await axiosSecure.patch(`product-update-status/${id}`, { status })
            if (res.data.modifiedCount) {
                toast.success(`Product Status ${status}`)
                refetch();
            }
        }
        catch (err) {
            toast.error(err.response)
        }
    }

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
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingProducts?.map((pendingProduct, index) => <PendingProductTable key={pendingProduct._id} pendingProduct={pendingProduct} index={index + 1} handleUpdateStatus={handleUpdateStatus} />)}

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default PendingProduct;