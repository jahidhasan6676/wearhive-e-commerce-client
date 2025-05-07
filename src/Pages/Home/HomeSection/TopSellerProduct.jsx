import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaEye } from "react-icons/fa";

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
                <h2 className="text-2xl md:text-3xl font-medium uppercase relative mb-2 ">
                    <span className="text-gray-500">BEST</span> SELLER
                </h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Discover our most loved products by customers worldwide
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {topSellerProduct?.map(product => (
                    <div key={product._id} className="group relative bg-white overflow-hidden transition-all duration-300">
                        {/* Product Image */}
                        <div className="relative overflow-hidden ">
                            <Link to={`/productDetails/${product._id}`}>
                                <img
                                    src={product?.photo}
                                    alt={product?.productName}
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Eye Icon on Hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="p-2 bg-white rounded-full text-gray-800 hover:bg-primary hover:text-white transition">
                                        <FaEye size={15} />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Product Info */}
                        <div className="mt-2">
                            {/* Rating */}
                            <div className="flex items-center space-x-2">
                                {product?.ratingCount > 0 ? (
                                    <>
                                        <span className="text-yellow-400 text-xl">
                                            {'★'.repeat(Math.floor(product?.averageRating))}
                                            {'☆'.repeat(5 - Math.floor(product?.averageRating))}
                                        </span>
                                        <span className="text-gray-500 text-sm">({product?.ratingCount})</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-yellow-400 text-xl">{'☆'.repeat(5)}</span>
                                        <span className="text-gray-500 text-sm">(0)</span>
                                    </>
                                )}
                            </div>
                            <h3 className="font-medium text-gray-700">
                                {product?.productName}
                            </h3>
                            {/* Price */}
                            <p className="font-medium text-gray-500">
                                ${product?.price.toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSellerProduct;