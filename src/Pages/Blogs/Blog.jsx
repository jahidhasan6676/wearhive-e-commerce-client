import { IoIosArrowForward } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const Blog = () => {
    const axiosPublic = useAxiosPublic();

    // latest products data load
    const { data: allBlogData = [], isLoading } = useQuery({
        queryKey: ['allBlogData'],
        queryFn: async () => {
            const data = await axiosPublic.get("/allBlog");
            return data.data;
        }
    });

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="">
            {/* blog page banner */}
            <div className='w-full h-[250px] bg-[#fcf6f6]'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl mb-3'>Blog</h1>
                    <p className='text-gray-600'><span><Link to="/" className='hover:text-secondary'>Home</Link> <span className='text-[12px]'>//</span> Blog</span></p>
                </div>
            </div>

            {/* blog content card */}
            <div className="w-11/12 mx-auto py-20">
                <div className="flex items-center gap-6 mb-8">
                    <h1 className="text-xl font-semibold">All Blogs</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    {allBlogData?.map((blog, index) => (
                        <div key={index} className="bg-gray-50 p-2 rounded-md">
                            <img src={blog?.photo} alt="blog" className="w-full h-[250px] object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-5 mb-2">{blog?.title.slice(0, 50)}...</h3>
                            <p className="text-sm text-gray-500 mb-3">
                                {blog?.date} | {"0 comment"}
                            </p>
                            <p className="text-sm text-gray-700 mb-4">{blog?.description.slice(0, 100)}...</p>
                            <Link to={`/blogDetails/${blog?._id}`}><p className="text-gray-900 hover:underline font-medium flex items-center gap-1">Read More <IoIosArrowForward className="text-[14px]" /></p></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;