import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';

const ShopProductCard = ({ product }) => {
    const { photo, productName, price, _id, averageRating, ratingCount } = product || {};
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div
            className="bg-white overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {/* Wishlist Button */}
            <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`absolute top-3 right-3 z-10 p-2 text-[15px] rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} bg-white bg-opacity-80 hover:bg-opacity-100 transition`}>
                <FiHeart className={isWishlisted ? 'fill-current' : ''} />
            </button>

            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={photo}
                    alt={productName}
                    className="w-full object-cover transition-transform duration-500"
                    style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}/>

                {/* Quick Actions on Hover */}
                {isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-4 transition-opacity duration-300">
                        <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-primary hover:text-white transition">
                            <FiShoppingCart size={15} />
                        </button>
                        <Link
                            to={`/productDetails/${_id}`}
                            className="p-2 bg-white rounded-full text-gray-800 hover:bg-primary hover:text-white transition">
                            <FiEye size={15} />
                        </Link>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="mt-2">
                {/* rating */}
                <div className="flex items-center space-x-2">
                    {product?.ratingCount > 0 ? (
                        <>
                            <span className="text-yellow-400 text-xl">
                                {'★'.repeat(Math.floor(averageRating))}
                                {'☆'.repeat(5 - Math.floor(averageRating))}
                            </span>
                            <span className="text-gray-500 text-sm">({ratingCount})</span>
                        </>
                    ) : (
                        <>
                            <span className="text-yellow-400 text-xl">{'☆'.repeat(5)}</span>
                            <span className="text-gray-500 text-sm">(0)</span>
                        </>
                    )}
                </div>
                <h3 className="font-medium text-gray-700">
                    {productName}
                </h3>
                <p className="font-medium text-gray-500">
                    ${price.toFixed(2)}
                </p>

            </div>
        </div>
    );
};

export default ShopProductCard;