import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';

const ShopProductCard = ({ product }) => {
    const { photo, productName, price, _id } = product || {};
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
                className={`absolute top-3 right-3 z-10 p-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} bg-white bg-opacity-80 hover:bg-opacity-100 transition`}
            >
                <FiHeart className={isWishlisted ? 'fill-current' : ''} />
            </button>

            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={photo}
                    alt={productName}
                    className="w-full object-cover transition-transform duration-500"
                    style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                />

                {/* Quick Actions on Hover */}
                {isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-4 transition-opacity duration-300">
                        <button className="p-2 bg-white rounded-full text-gray-800 hover:bg-primary hover:text-white transition">
                            <FiShoppingCart size={18} />
                        </button>
                        <Link
                            to={`/productDetails/${_id}`}
                            className="p-2 bg-white rounded-full text-gray-800 hover:bg-primary hover:text-white transition"
                        >
                            <FiEye size={18} />
                        </Link>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="mt-3">
                <Link to={`/productDetails/${_id}`}>
                    <h3 className="font-medium text-gray-800 hover:text-primary transition line-clamp-1">
                        {productName}
                    </h3>
                </Link>

                <p className="text-lg font-medium text-gray-900">
                    ${price.toFixed(2)}
                </p>

            </div>
        </div>
    );
};

export default ShopProductCard;