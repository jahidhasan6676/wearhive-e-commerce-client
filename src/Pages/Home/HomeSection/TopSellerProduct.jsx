import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const TopSellerProduct = () => {
    const axiosPublic = useAxiosPublic();

    // top seller product data load
    const { data: topSellerProduct = [], isLoading } = useQuery({
        queryKey: ["topSellerProduct"],
        queryFn: async () => {
            const data = await axiosPublic.get(`/top-seller-product`);
            return data.data;
        },
    });

    if (isLoading) return <LoadingSpinner />;
    
    return (
        <div className="w-11/12 mx-auto pb-20">
            <h2 className="text-3xl font-medium uppercase relative mb-10 ">
                <span className="text-gray-500">BEST</span> SELLER
                <hr className="absolute top-[16px] left-[185px] border-[1px] border-gray-600 w-[50px] "/>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {topSellerProduct?.map(product => (
                    <div key={product._id} className="">
                        <Link to={`/productDetails/${product?._id}`}><img src={product?.photo} alt="" className="w-full object-cover" /></Link>
                        <div className="mt-2">
                            <h2 className="">{product?.productName}</h2>
                            <div className="flex items-center gap-10">
                                <p>${product?.price}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSellerProduct;