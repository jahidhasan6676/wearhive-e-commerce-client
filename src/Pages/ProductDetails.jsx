import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { div } from "framer-motion/client";

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
            <div className=" grid md:grid-cols-2 gap-5">
                {/* Image Section */}
                <div className="flex justify-center items-center  ">
                    <img
                        src={product.photo}
                        alt={product.name}
                        className="w-[450px] h-[500px] object-cover rounded-lg"
                    />
                </div>

                {/* Product Info */}
                <div className="min-h-[400px] flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold">{product.productName}</h1>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 my-2">
                        <span className="text-yellow-500 text-lg">★★★★☆</span>
                        <span className="text-gray-500 text-sm">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="text-xl font-semibold">${product.price}</div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-3">{product.description}</p>

                    {/* Select Size */}
                    <div className="mt-4">
                        <h3 className="text-md font-medium">Select Size</h3>
                        <div className="flex space-x-3 mt-2">
                            <p className="border px-3 py-1 rounded-lg bg-gray-100">SM</p>
                            <p className="border px-3 py-1 rounded-lg bg-gray-100">M</p>
                            <p className="border px-3 py-1 rounded-lg bg-gray-100">L</p>
                            <p className="border px-3 py-1 rounded-lg bg-gray-100">XL</p>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="mt-5 w-fit hover:bg-primary border-b-4  border-b-secondary  hover:text-white py-2 px-4 text-sm font-medium rounded-lg  transition duration-300">
                        ADD TO CART
                    </button>

                    {/* Category */}
                    <div className="mt-4 text-sm text-gray-600">
                        <p>
                            <span className="font-medium text-black">Category:</span> {product.productCategory}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

