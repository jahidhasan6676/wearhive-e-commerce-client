import Cover from "../Shared/Cover";
import menImage from "../../assets/Assets/menBannerImage.png"
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import MenProductCard from "./MenProductCard";

const Men = () => {
    const axiosSecure = useAxiosSecure();

    // all pending products load
    const { data: menProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['menProducts'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/men-category-product`)
            return data.data;
        }
    })

    if(isLoading) return <LoadingSpinner/>
    console.log(menProducts)
    
    return (
        <div>
            {/* banner part */}
            <div className="">
                <Cover image={menImage} />
            </div>
            
            {/* product part */}
            <div className="w-11/12 mx-auto py-20">
                <h2>Men All Product: {menProducts?.length}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {menProducts?.map(menProduct => <MenProductCard key={menProduct._id} menProduct={menProduct}/>)}
                </div>
            </div>
        </div>
    );
};

export default Men;