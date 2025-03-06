import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";


const TopWishlistProduct = () => {
    const axiosPublic = useAxiosPublic();

    const { data: topWishlistProduct = [], isLoading, refetch, error } = useQuery({
        queryKey: ["topWishlistProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/top-wishlist-product`);
            return res.data;
        },
    });

    if (isLoading) return <LoadingSpinner />

    return (
        <div className="w-11/12 mx-auto pb-20">
            <h2 className="text-2xl font-semibold mb-4">Top Wishlist Products: {topWishlistProduct?.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {topWishlistProduct?.map(product => (
                    <div key={product._id} className="">
                        <img src={product?.photo} alt="" className="h-auto max-h-[350px] object-contain" />
                        <div className="mt-2">
                            <h2>{product?.productName}</h2>
                            <div className="flex items-center gap-5">
                            <p>${product?.price}</p>
                            <p>Count: ({product?.wishlistCount})</p>
                            </div>
                            <Link to={`/productDetails/${product?._id}`}>
                                <button className="px-3 py-2 border rounded-md border-secondary hover:bg-primary mt-2 hover:text-white">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopWishlistProduct;
