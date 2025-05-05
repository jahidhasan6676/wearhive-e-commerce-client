import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaBookmark } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

const BlogDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: singleBlogData = {}, isLoading } = useQuery({
        queryKey: ['singleBlogData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allBlog/${id}`);
            return res.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;

    // Sample related blogs data
    const relatedBlogs = [
        {
            id: 1,
            title: "Cozy Winter Styles Couples Love Together",
            image: "https://i.ibb.co.com/xtHMP4TW/blog-6.webp",
            date: "April 15, 2025",
            category: "Winter"
        },
        {
            id: 2,
            title: "Explore the Radiance of Summer Fashion",
            image: "https://i.ibb.co.com/fVzng82W/blog-4.webp",
            date: "May 1, 2025",
            category: "Summer"
        }
    ];

    return (
        <div className="">
            {/* blog page banner */}
            <div className='w-full h-[250px] bg-[#fcf6f6]'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl mb-3'>Blog Read</h1>
                    <p className='text-gray-600'><span><Link to="/" className='hover:text-secondary'>Home</Link> <span className='text-[12px]'>//</span> Blog Details</span></p>
                </div>
            </div>
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-12 my-20">
                {/* Left Sidebar - Moved from right */}
                <aside className="lg:w-1/3 space-y-8">
                    {/* Search */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Search</h3>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                            />
                            <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Related Posts</h3>
                        <div className="space-y-4">
                            {relatedBlogs.map(blog => (
                                <a key={blog.id} href="#" className=" flex gap-4">
                                    <img
                                        src={blog?.image}
                                        alt={blog?.title}
                                        className="w-20 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <span className="text-xs text-gray-600 font-semibold">{blog?.category}</span>
                                        <h4 className="text-sm font-medium text-gray-900 transition">
                                            {blog?.title}
                                        </h4>
                                        <span className="text-xs text-gray-500">{blog.date}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                                    <span>Health & Wellness</span>
                                    <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">24</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                                    <span>Nutrition</span>
                                    <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">18</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                                    <span>Mental Health</span>
                                    <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">12</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <article className="lg:w-2/3">
                    {/* Blog Header */}
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                            {singleBlogData?.category || "Uncategorized"}
                        </span>
                        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
                            {singleBlogData.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8">
                            <div className="flex items-center">
                                <FaUser className="mr-2" />
                                <span>By {singleBlogData?.author}</span>
                            </div>
                            <div className="flex items-center">
                                <FaCalendarAlt className="mr-2" />
                                <span>{singleBlogData?.date}</span>
                            </div>
                            <div className="flex items-center">
                                <IoMdTime className="mr-2" />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={singleBlogData?.photo}
                            alt={singleBlogData?.title}
                            className="w-full h-[500px] sm:h-[800px] object-cover"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="prose max-w-none text-gray-600 leading-relaxed mb-12">
                        {singleBlogData?.description}
                    </div>

                    {/* Tags and Share */}
                    <div className="mt-12 pt-8 border-t border-gray-200 mb-12">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <div>
                                <span className="font-medium mr-2">Tags:</span>
                                <a href="#" className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full mr-2 mb-2">Health</a>
                                <a href="#" className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full mr-2 mb-2">Wellness</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="font-medium">Share:</span>
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="text-blue-400 hover:text-blue-600">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-blue-700 hover:text-blue-900">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Comment Form */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave a Comment</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                                <textarea
                                    id="comment"
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                    placeholder="Write your comment here..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetails;