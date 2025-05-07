import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogSection = () => {
    const axiosPublic = useAxiosPublic();

    // latest products data load
    const { data: blogData = [], isLoading } = useQuery({
        queryKey: ['blogData'],
        queryFn: async () => {
            const data = await axiosPublic.get("/blog");
            return data.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="w-11/12 mx-auto pb-20">
            <div className="flex items-center gap-6 mb-8">
                <h1 className=" text-2xl md:text-3xl font-medium">Latest Blogs</h1>
                <Link to="/blog"><p href="#" className="text-sm text-gray-900 hover:underline flex items-center gap-1">View All <IoIosArrowForward className="text-[14px]" /></p></Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                {blogData?.map((post, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded-md">
                        <img src={post?.photo} alt="blog" className="w-full h-[250px] object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-5 mb-2">{post?.title.slice(0, 50)}...</h3>
                        <p className="text-sm text-gray-500 mb-3">
                            {post?.date} | {"0 comment"}
                        </p>
                        <p className="text-sm text-gray-700 mb-4">{post?.description.slice(0, 100)}...</p>
                        <p className="text-gray-900 hover:underline font-medium flex items-center gap-1">Read More <IoIosArrowForward className="text-[14px]" /></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;