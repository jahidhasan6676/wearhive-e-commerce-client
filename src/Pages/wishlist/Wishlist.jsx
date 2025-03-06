import React from "react";
import useWishlist from "../../Hooks/useWishlist";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Wishlist = () => {
    const [wishlist, , refetch] = useWishlist();
    const axiosPublic = useAxiosPublic();

    // product item delete
    const handleWishlistProductDelete = async (id) => {

        const res = await axiosPublic.delete(`/wishlistProduct-delete/${id}`)
        if (res.data.deletedCount) {
            refetch()
        }

    }

    return (
        <div className="w-11/12 mx-auto py-20">
            <h2 className="text-2xl font-medium uppercase relative mb-8">
                <span className="text-gray-500">MY</span> WISHLIST
                <hr className="absolute top-[14px] left-[155px] border-[1px] border-gray-600 w-[50px] " />
            </h2>

            <div>
                {wishlist?.map(list => <React.Fragment key={list._id}>
                    <div className="flex items-center py-4 border-b border-gray-200">
                        <img src={list.photo} alt={list.productName} className="w-20 h-24 object-cover mr-4" />
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold">{list.productName}</h3>
                            <p className="text-sm text-gray-600">${list.price}</p>
                        </div>
                        <div className="flex items-center">

                            <button onClick={() => handleWishlistProductDelete(list._id)} className="text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </React.Fragment>)}
            </div>
        </div>
    );
};

export default Wishlist;