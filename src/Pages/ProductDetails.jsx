import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useRole from "../Hooks/useRole";
import { useState } from "react";
import LoginModal from "../Modal/LoginModal";
import useCount from "../Hooks/useCount";
import ProductReviewList from "../components/productReview/ProductReviewList";

const ProductDetails = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [, , refetch] = useCount();
    const { user } = useAuth();
    const { id } = useParams();
    const [role] = useRole();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: products = [], isLoading, } = useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allProduct/${id}`);
            return res.data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    const product = products[0];

    // product cart item add
    const handleAddProduct = async (product) => {

        if (!user) {
            setIsModalOpen(true); // Show the modal if user is not logged in
            return;
        }

        const productItem = {
            productId: product?._id,
            productName: product?.productName,
            price: parseInt(product?.price),
            manCategory: product?.manCategory,
            photo: product?.photo,
            orderQuantity: parseInt(1),
            email: user?.email,
        }

        // product item add database
        const item = await axiosSecure.post(`/cartItem`, productItem)

        if (item.data.insertedId) {
            toast.success(`${product?.productName} Successfully Added`)
            refetch();
        }

    }

    // product add wishlist
    const handleWishlistProduct = async (product) => {

        if (!user) {
            setIsModalOpen(true); // Show the modal if user is not logged in
            return;
        }

        const wishlistItem = {
            productId: product?._id,
            productName: product?.productName,
            price: parseInt(product?.price),
            manCategory: product?.manCategory,
            photo: product?.photo,
            email: user?.email,
        }

        // product item add database
        const wishlist = await axiosSecure.post(`/wishlistItem`, wishlistItem)
        if (wishlist.data.insertedId) {
            toast.success(`${product?.productName} Successfully Added`)
            refetch();
        }

    }

    return (
        <div className="py-20 w-11/12 lg:w-8/12 mx-auto">
            <div className="md:flex gap-5 space-y-5 md:space-y-0">
                {/* Image Section */}
                <div className="flex-1 w-full">
                    <img
                        src={product?.photo}
                        alt={product?.productName}
                        className="w-full h-[550px] object-contain rounded-lg"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold">{product?.productName}</h1>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mt-2">
                        {product?.ratingCount > 0 ? (
                            <>
                                <span className="text-yellow-400 text-lg">
                                    {'★'.repeat(Math.floor(product?.averageRating))}
                                    {'☆'.repeat(5 - Math.floor(product?.averageRating))}
                                </span>
                                <span className="text-gray-500 text-sm">({product?.ratingCount})</span>
                            </>
                        ) : (
                            <>
                                <span className="text-yellow-400 text-lg">{'☆'.repeat(5)}</span>
                                <span className="text-gray-500 text-sm">(0)</span>
                            </>
                        )}
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-semibold mt-8">${product?.price}</div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-8">{product?.description}</p>

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

                    <div className="flex gap-3">
                        {/* Add to Cart Button */}
                        <button disabled={role === "seller" || role === "moderator" || role === "admin"
                        } onClick={() => handleAddProduct(product)} className="mt-8 w-fit bg-black text-white py-3 px-6 text-sm rounded-sm disabled:cursor-not-allowed disabled:opacity-50">
                            ADD TO CART
                        </button>
                        {/* Add to wishlist Button */}
                        <button disabled={role === "seller" || role === "moderator" || role === "admin"} onClick={() => handleWishlistProduct(product)} className="mt-8 w-fit border border-black hover:bg-black hover:text-white py-3 px-6 text-sm rounded-sm disabled:cursor-not-allowed disabled:opacity-50">
                            Add Wishlist
                        </button>
                    </div>

                    <hr className="mt-8" />

                    {/* Additional Info */}
                    <div className="mt-6 text-sm text-gray-600">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/* product review list added */}
            <ProductReviewList productId={product?._id} />

            {/* Modal */}
            <LoginModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

        </div>
    );
};

export default ProductDetails;

