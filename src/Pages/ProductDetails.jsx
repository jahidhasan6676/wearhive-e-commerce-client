import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";

const ProductDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allProduct/${id}`);
            return res.data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    const product = products[0];

    return (
        <div className="py-20 w-11/12 lg:w-8/12 mx-auto">
            <div className="md:flex gap-5 space-y-5 md:space-y-0">
                {/* Image Section */}
                <div className="flex-1 w-full">
                    <img
                        src={product.photo}
                        alt={product.name}
                        className="w-full h-[550px] object-contain rounded-lg"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold">{product.productName}</h1>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-yellow-500 text-lg">★★★★★</span>
                        <span className="text-gray-500 text-sm">(122)</span>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-semibold mt-8">${product.price}</div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-8">{product.description}</p>

                    {/* Select Size */}
                    <div className="mt-4">
                        <h3 className="text-md font-medium">Select Size</h3>
                        <div className="flex space-x-3 mt-4">
                            <p className="border px-3 py-1 rounded-sm bg-gray-100">S</p>
                            <p className="border px-3 py-1 rounded-sm bg-gray-100">M</p>
                            <p className="border px-3 py-1 rounded-sm bg-gray-100">L</p>
                            <p className="border px-3 py-1 rounded-sm bg-gray-100">XL</p>
                            <p className="border px-3 py-1 rounded-sm bg-gray-100">XXL</p>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="mt-8 w-fit bg-black text-white py-3 px-6 text-sm rounded-sm">
                        ADD TO CART
                    </button>

                    <hr className="mt-8"/>

                    {/* Additional Info */}
                    <div className="mt-6 text-sm text-gray-600">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

