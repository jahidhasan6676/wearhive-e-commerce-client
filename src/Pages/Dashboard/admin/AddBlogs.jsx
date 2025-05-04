
import React, { useState } from 'react';
import { FiUpload, FiSave, FiX } from 'react-icons/fi';
import { photoUpload } from '../../../utilities/utils';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useAuth from '../../../Hooks/useAuth';

const AddBlogs = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const photo = await photoUpload(image);
        const description = form.description.value;
        const author = form.author.value;
        const date = new Date().toLocaleDateString();

        const addBlogData = {
            title,
            photo,
            description,
            author,
            date
        }

       // product data save database
               try {
                   const res = await axiosSecure.post("/addBlog", addBlogData)
                   if (res.data.insertedId) {
                       toast.success("Blog successfully added",{
                           position: "top-center",
                           autoClose: 3000,
                       })
                       form.reset();
                   }
       
               } catch (err) {
                console.log(err)
                   toast.error(err.message,{
                       position: "top-center",
                       autoClose: 3000,
                   })
               }


    };

    return (
        <div className=' min-h-[calc(100vh-60px)] flex justify-center items-center w-11/12 mx-auto'>
            <div className="w-full max-w-2xl mx-auto p-5 bg-white rounded-lg shadow-sm">
                <h1 className="text-2xl text-center font-semibold text-gray-800 mb-5">Add New Blog Post</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Title Field */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Post Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 "
                            placeholder="Enter post title"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Featured Image *
                        </label>

                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <div className="flex text-sm text-gray-600 justify-center">
                                    <label
                                        htmlFor="image-upload"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                                    >
                                        <span>Upload an image</span>
                                        <input
                                            id="image-upload"
                                            name="image"
                                            type="file"
                                            className="sr-only"
                                            accept="image/*"
                                            required
                                        />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                            </div>
                        </div>

                    </div>

                    {/* Description Field */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Post Content *
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
                            placeholder="Write your blog post content here..."
                            required
                        />
                    </div>

                    {/* Author Field */}
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                            Author Name *
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            defaultValue={user?.displayName}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
                            placeholder="Enter author name"
                            required
                        />
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center"
                        >
                            <FiSave className="mr-2" /> Publish Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogs;