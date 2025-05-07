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
                        <div className="relative overflow-hidden aspect-square">
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
                        <div className="p-3">
                            <h3 className="font-semibold text-gray-800 mb-1transition-colors line-clamp-1">
                                {product?.productName}
                            </h3>
                            {/* Price */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-medium">
                                        ${product?.price.toFixed(2)}
                                    </span>
                                    {product?.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through ml-2">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                {/* Rating */}
                                <div className="flex items-center space-x-1">
                                    {product?.ratingCount > 0 ? (
                                        <>
                                            <span className="text-yellow-400 text-sm">
                                                {'★'.repeat(Math.floor(product?.averageRating))}
                                                {'☆'.repeat(5 - Math.floor(product?.averageRating))}
                                            </span>
                                            <span className="text-gray-500 text-xs">({product?.ratingCount})</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-yellow-400 text-sm">{'☆'.repeat(5)}</span>
                                            <span className="text-gray-500 text-xs">(0)</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSellerProduct;