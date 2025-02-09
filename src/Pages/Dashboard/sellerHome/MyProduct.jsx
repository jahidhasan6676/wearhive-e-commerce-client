import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import MyProductTable from "../../../components/Dashboard/sellerHome/MyProductTable";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const MyProduct = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // user products data load
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/products/emailed/${user?.email}`)
            return data.data;
        }
    })
    //console.log(products)

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
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => <MyProductTable key={product._id} product={product} index={index + 1} />)}

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyProduct;