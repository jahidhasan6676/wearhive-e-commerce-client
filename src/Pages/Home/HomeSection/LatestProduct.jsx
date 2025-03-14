import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const LatestProduct = () => {
    const axiosPublic = useAxiosPublic();

    // user products data load
    const { data: latestProducts = [], isLoading } = useQuery({
        queryKey: ['latestProducts'],
        queryFn: async () => {
            const data = await axiosPublic.get("/latest-product");
            return data.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="w-11/12 mx-auto pb-20">
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-medium uppercase relative w-fit inline">
                    <span className="text-gray-500">LATEST</span> COLLECTION
                    <hr className="absolute top-[17px] md:top-[20px] left-[245px] md:left-[306px] border-[1px] border-gray-600 w-[20px] sm:w-[50px]" />
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
                        >
                            <img src={latestProduct?.photo} alt="" className="w-full object-cover" />
                            <div className="mt-2">
                                <h2 className="text-lg font-semibold">{latestProduct?.productName}</h2>
                                <p className="text-gray-600 text-sm">${latestProduct?.price}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LatestProduct;

