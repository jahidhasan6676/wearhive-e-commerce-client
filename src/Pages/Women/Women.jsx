import Cover from "../Shared/Cover";
import womenBannerImage from "../../assets/Assets/womenBannerImage.png"
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import MenProductCard from "../Men/MenProductCard";
import WomenProductCard from "./WomenProductCard";

const Women = () => {
    const axiosSecure = useAxiosSecure();

    // all pending products load
    const { data: womenProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['womenProducts'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/women-category-product`)
            return data.data;
        }
    })

    if (isLoading) return <LoadingSpinner />
    console.log(womenProducts)
    return (
        <div>
            <div>
                <Cover image={womenBannerImage} />
            </div>

            {/* product part */}
            <div className="w-11/12 mx-auto py-20">
                <h2>Men All Product: {womenProducts?.length}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {womenProducts?.map(womenProduct => <WomenProductCard key={womenProduct._id} womenProduct={womenProduct} />)}
                </div>
            </div>
        </div>
    );
};

export default Women;