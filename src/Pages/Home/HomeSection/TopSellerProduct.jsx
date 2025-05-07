import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import { IoBagAddOutline } from "react-icons/io5";


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
            {/* Section Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-medium uppercase relative mb-2 ">
                    <span className="text-gray-500">BEST</span> SELLER
                </h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Discover our most loved products by customers worldwide
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {topSellerProduct?.map(product => (
                    <div key={product._id} className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300">
                        {/* Product Image */}
                        <div className="relative overflow-hidden">

                            <img
                                src={product?.photo}
                                alt={product?.productName}
                                className="w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Quick Add Button */}
                            {/* <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-indigo-600 hover:text-white">
                                <IoBagAddOutline className="text-xl" />
                            </button> */}
                        </div>

                        {/* Product Info */}
                        <div className="mt-3">
                            <h3 className=" font-semibold text-gray-800 mb-1 transition-colors">
                                {product?.productName}
                            </h3>
                            {/* Price */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className=" font-medium">
                                        ${product?.price.toFixed(2)}
                                    </span>
                                    {product?.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through ml-2">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                <Link to={`/productDetails/${product?._id}`}>
                                    <button className="text-sm font-medium hover:underline">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TopSellerProduct;