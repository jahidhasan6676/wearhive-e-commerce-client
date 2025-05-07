import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

const LatestProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // latest products data load
    const { data: latestProducts = [], isLoading } = useQuery({
        queryKey: ['latestProducts'],
        queryFn: async () => {
            const data = await axiosPublic.get("/latest-product");
            return data.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;

    return (
        <div id="latest-products" className="w-11/12 mx-auto pb-20">
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-medium uppercase relative w-fit inline">
                    <span className="text-gray-500">LATEST</span> COLLECTION
                </h2>
                <p className="text-gray-500 mt-3">Discover the trendiest picks of the season, handpicked just for you!</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {latestProducts?.map((latestProduct, index) => (
                    <Link key={latestProduct?._id} to={`/productDetails/${latestProduct?._id}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.08 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={latestProduct?.photo}
                                    alt=""
                                    className="w-full object-cover transition-transform duration-500"
                                    style={{ transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)' }}
                                />
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300">

                                        <motion.button
                                            className="p-2 bg-white rounded-full text-gray-800 hover:bg-primary hover:text-white transition"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaEye size={15} />
                                        </motion.button>
                                    </div>
                                )}
                            </div>
                            {/* Rating */}
                            <div className="flex items-center space-x-2 mt-2">
                                {latestProduct?.ratingCount > 0 ? (
                                    <>
                                        <span className="text-yellow-400 text-xl">
                                            {'★'.repeat(Math.floor(latestProduct?.averageRating))}
                                            {'☆'.repeat(5 - Math.floor(latestProduct?.averageRating))}
                                        </span>
                                        <span className="text-gray-500 text-sm">({latestProduct?.ratingCount})</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-yellow-400 text-xl">{'☆'.repeat(5)}</span>
                                        <span className="text-gray-500 text-sm">(0)</span>
                                    </>
                                )}
                            </div>
                            <div className="">
                                <h3 className=" font-medium text-gray-700">{latestProduct?.productName}</h3>
                            </div>
                            {/* price */}
                            <p className="text-gray-500 font-medium">${latestProduct?.price}</p>

                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LatestProduct;